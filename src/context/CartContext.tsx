import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { MenuItem } from '../data/menu';

export interface CartItem {
  id: string; // Unique combination of menuItem.id and sorted options
  menuItem: MenuItem;
  selectedOptions: Record<string, Set<string>>;
  quantity: number;
  price: number; // Total price of (base + addons) * quantity
  basePriceWithAddons: number; // Price of (base + addons) for a single quantity
}

interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  toggleCart: () => void;
  addToCart: (menuItem: MenuItem, selectedOptions: Record<string, Set<string>>) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  cartTotal: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Helper to calculate price of a single item with its addons
const calculateItemPrice = (menuItem: MenuItem, selectedOptions: Record<string, Set<string>>) => {
  let addOnsTotal = 0;
  if (menuItem.addOnGroups) {
    menuItem.addOnGroups.forEach(group => {
      const selections = selectedOptions[group.id] || new Set();
      group.options.forEach(opt => {
        if (selections.has(opt.id)) {
          addOnsTotal += opt.price;
        }
      });
    });
  }
  return menuItem.price + addOnsTotal;
};

// Helper to generate a unique ID based on item ID and its selections
const generateCartItemId = (menuId: string, selectedOptions: Record<string, Set<string>>) => {
  // Convert Sets to arrays, sort them, and stringify
  const normalizedOptions: Record<string, string[]> = {};
  
  // Sort the keys so object key order doesn't matter
  Object.keys(selectedOptions).sort().forEach(groupId => {
    const arr = Array.from(selectedOptions[groupId]).sort();
    if (arr.length > 0) {
      normalizedOptions[groupId] = arr;
    }
  });

  return `${menuId}-${JSON.stringify(normalizedOptions)}`;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(prev => !prev);

  const addToCart = (menuItem: MenuItem, selectedOptions: Record<string, Set<string>>) => {
    const id = generateCartItemId(menuItem.id, selectedOptions);
    const itemPrice = calculateItemPrice(menuItem, selectedOptions);

    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === id);
      if (existingItem) {
        // Increment quantity if exact match found
        return prev.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1, price: (item.quantity + 1) * item.basePriceWithAddons }
            : item
        );
      }
      
      // Add new item
      return [...prev, {
        id,
        menuItem,
        selectedOptions,
        quantity: 1,
        price: itemPrice,
        basePriceWithAddons: itemPrice
      }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(0, item.quantity + delta);
          return { ...item, quantity: newQuantity, price: newQuantity * item.basePriceWithAddons };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        toggleCart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartTotal,
        itemCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

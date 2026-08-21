import React from 'react';
import { useCart } from '../context/CartContext';
import './CartSidebar.css';

const CartSidebar: React.FC = () => {
  const { isCartOpen, toggleCart, cartItems, updateQuantity, removeFromCart, clearCart, cartTotal } = useCart();

  // Helper to format options clearly
  const renderOptions = (item: any) => {
    const lines: string[] = [];
    if (!item.menuItem.addOnGroups) return null;

    item.menuItem.addOnGroups.forEach((group: any) => {
      const selections = item.selectedOptions[group.id];
      if (selections && selections.size > 0) {
        const optionNames = Array.from(selections as Set<string>).map((optId: string) => {
          const opt = group.options.find((o: any) => o.id === optId);
          return opt ? opt.name : '';
        }).filter(Boolean);
        
        if (optionNames.length > 0) {
          lines.push(`${optionNames.join(', ')}`);
        }
      }
    });

    if (lines.length === 0) return null;
    return (
      <div className="cart-item-options">
        {lines.map((line, idx) => (
          <p key={idx} className="cart-item-option-text">{line}</p>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={toggleCart}></div>
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>My Order</h2>
          <button className="cart-close-btn" onClick={toggleCart}>
            <i className="ti ti-x"></i>
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <i className="ti ti-shopping-cart"></i>
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image-container">
                    <img src={item.menuItem.image} alt={item.menuItem.name} className="cart-item-image" />
                  </div>
                  
                  <div className="cart-item-content">
                    <div className="cart-item-title-row">
                      <h4>{item.menuItem.name.replace(/[\u{1F1E6}-\u{1F1FF}]/gu, '') /* Remove flags for cleaner look if desired */}</h4>
                      <button className="cart-item-remove-btn" onClick={() => removeFromCart(item.id)}>
                        <i className="ti ti-trash"></i>
                      </button>
                    </div>
                    
                    {renderOptions(item)}
                    
                    <div className="cart-item-bottom-row">
                      <span className="cart-item-price">${item.basePriceWithAddons.toFixed(2)}</span>
                      <div className="cart-qty-controls">
                        <button onClick={() => updateQuantity(item.id, -1)}><i className="ti ti-minus"></i></button>
                        <span>{item.quantity.toString().padStart(2, '0')}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}><i className="ti ti-plus"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary">
              <div className="cart-summary-row">
                <span>Items</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="cart-summary-row discount">
                <span>Discount</span>
                <span>-$0.00</span>
              </div>
              <div className="cart-summary-row total">
                <span>Total Amount</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            <div className="cart-footer-actions">
              <button className="btn-secondary clear-cart-btn" onClick={clearCart}>
                Clear
              </button>
              <button className="btn-primary checkout-btn" onClick={toggleCart}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;

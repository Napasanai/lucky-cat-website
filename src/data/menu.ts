export type MenuCategory = 'Thai' | 'Japanese' | 'Drinks';

export interface AddOn {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  addOns?: AddOn[];
}

export const menuData: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Pad Thai',
    description: 'Stir-fried rice noodles with egg, peanuts, bean sprouts, and tamarind sauce.',
    price: 12.99,
    image: '/images/pad_thai_1785254801539.jpg',
    category: 'Thai',
    addOns: [
      { id: 'a1', name: 'Extra Shrimp', price: 3.50 },
      { id: 'a2', name: 'Extra Tofu', price: 2.00 },
      { id: 'a3', name: 'Spicy Level: Hot', price: 0.00 }
    ]
  },
  {
    id: '2',
    name: 'Tonkotsu Ramen',
    description: 'Rich pork broth with fresh noodles, chashu, soft boiled egg, and scallions.',
    price: 14.99,
    image: '/images/tonkotsu_ramen_1785254823292.jpg',
    category: 'Japanese',
    addOns: [
      { id: 'r1', name: 'Extra Chashu', price: 4.00 },
      { id: 'r2', name: 'Extra Egg', price: 1.50 },
      { id: 'r3', name: 'Extra Noodles (Kae-dama)', price: 2.50 }
    ]
  },
  {
    id: '3',
    name: 'Premium Salmon Nigiri',
    description: 'Fresh Atlantic salmon over seasoned sushi rice. Served with wasabi and soy sauce.',
    price: 16.99,
    image: '/images/salmon_sushi_1785254835088.jpg',
    category: 'Japanese',
    addOns: [
      { id: 's1', name: 'Spicy Mayo Drizzle', price: 1.00 },
      { id: 's2', name: 'Extra Wasabi', price: 0.50 }
    ]
  },
  {
    id: '4',
    name: 'Iced Thai Tea',
    description: 'Authentic brewed Thai tea, sweetened and topped with creamy half and half.',
    price: 4.99,
    image: '/images/thai_tea_1785254844998.jpg',
    category: 'Drinks',
    addOns: [
      { id: 'd1', name: 'Boba Pearls', price: 1.00 },
      { id: 'd2', name: 'Oat Milk Substitute', price: 0.75 }
    ]
  }
];

export type MenuCategory = 'Thai' | 'National' | 'Appetizer' | 'Drink & Dessert';

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

const proteinAddOns: AddOn[] = [
  { id: 'add-chicken', name: 'Extra Chicken', price: 3.00 },
  { id: 'add-pork', name: 'Extra Pork', price: 3.00 },
  { id: 'add-beef', name: 'Extra Beef', price: 4.00 },
  { id: 'add-shrimp', name: 'Extra Shrimp', price: 4.00 },
  { id: 'add-egg', name: 'Fried Egg', price: 2.00 },
  { id: 'add-spicy', name: 'Make it Spicy (Free)', price: 0.00 }
];

const appetizerAddOns: AddOn[] = [
  { id: 'add-sauce', name: 'Extra Dipping Sauce', price: 0.50 }
];

const drinkAddOns: AddOn[] = [
  { id: 'add-boba', name: 'Boba Pearls', price: 1.00 },
  { id: 'add-lychee', name: 'Lychee Jelly', price: 1.00 }
];

export const menuData: MenuItem[] = [
  // National Dish
  { id: 'n1', name: 'PHO 🇻🇳', description: 'Beef broth noodles soup come with onion, green onions, jalapeno, lime and beans spout', price: 15.00, image: '/images/national_dish.jpg', category: 'National', addOns: proteinAddOns },
  { id: 'n2', name: 'DOISOT BIBIMBUB 🇰🇷', description: 'Rice top with carrot, shiitake, beans spout, cucumber, bokchoy and spicy gochugan sauce', price: 15.00, image: '/images/national_dish.jpg', category: 'National', addOns: proteinAddOns },
  { id: 'n3', name: 'BULGOGI 🇰🇷', description: 'Thinly sliced & marinated pork with sauce, scallions, onion and sesame on top rice', price: 15.00, image: '/images/national_dish.jpg', category: 'National', addOns: proteinAddOns },
  { id: 'n4', name: 'GANGNAM CRISPY CHICKEN 🇰🇷', description: 'Crispy chicken stir-fried with bell peppers, onions, garlic and our signature Korean - style sweet chili sauce', price: 15.00, image: '/images/national_dish.jpg', category: 'National', addOns: proteinAddOns },
  { id: 'n5', name: 'SHANGHAI SAUCE STIR-FRY 🇨🇳', description: 'Chicken stir- fry with scallion,carrot,ginger,bell pepper and savory shanghai house sauce', price: 15.00, image: '/images/national_dish.jpg', category: 'National', addOns: proteinAddOns },
  { id: 'n6', name: 'CASHEW CHICKEN 🇨🇳', description: 'Tender chicken stir-fried with roasted cashew, onion,bell pepper,scallion and our savory house sauce', price: 15.00, image: '/images/national_dish.jpg', category: 'National', addOns: proteinAddOns },
  { id: 'n7', name: 'BLACK PEPPER STIR-FRY 🇨🇳', description: 'Tender chicken stir-fry with onion, ginger,carrot,bell pepper and our savory black pepper sauce', price: 15.00, image: '/images/national_dish.jpg', category: 'National', addOns: proteinAddOns },
  { id: 'n8', name: 'MIX VEGETABLE STIR FRY 🇨🇳', description: 'Bokchoy,carrot,cabbage, mushroom onion and stir fry in our savory house sauce', price: 15.00, image: '/images/national_dish.jpg', category: 'National', addOns: proteinAddOns },
  { id: 'n9', name: 'SHANGHAI RED-WINE CHICKEN 🇨🇳', description: 'Tender chicken sautéed with onion, butter,bell pepper in signature red wine sauce', price: 15.00, image: '/images/national_dish.jpg', category: 'National', addOns: proteinAddOns },
  { id: 'n10', name: 'SWEET & SOUR 🇨🇳', description: 'Chicken,pork or beef stir fry with pineapple,cucumber,tomato,bell pepper onion,scallion and sweet & sour sauce', price: 15.00, image: '/images/national_dish.jpg', category: 'National', addOns: proteinAddOns },

  // Appetizers
  { id: 'a1', name: 'GYOZA', description: 'Pork, Chicken or Vegetable and ginger soy dip', price: 7.00, image: '/images/appetizer.jpg', category: 'Appetizer', addOns: appetizerAddOns },
  { id: 'a2', name: 'VEGGIE SPRING ROLL', description: 'Serve with house spicy mayo', price: 7.00, image: '/images/appetizer.jpg', category: 'Appetizer', addOns: appetizerAddOns },
  { id: 'a3', name: 'SHRIMP SHUMAI', description: 'Steamed shrimp dumplings and ginger soy dip', price: 8.00, image: '/images/appetizer.jpg', category: 'Appetizer', addOns: appetizerAddOns },
  { id: 'a4', name: 'THAI SOUTHWEST CHICKEN WING', description: 'Deep fry breaded thai style chicken wings', price: 8.00, image: '/images/appetizer.jpg', category: 'Appetizer', addOns: appetizerAddOns },
  { id: 'a5', name: 'WONTON SOUP', description: 'Ground pork, shrimp wrapped in wonton paper, in chicken broth', price: 9.00, image: '/images/appetizer.jpg', category: 'Appetizer', addOns: appetizerAddOns },
  { id: 'a6', name: 'SHRIMP SPRING NET ROLL', description: 'Shrimp wrapped in paper wrap with sweet sauce', price: 8.00, image: '/images/appetizer.jpg', category: 'Appetizer', addOns: appetizerAddOns },
  { id: 'a7', name: 'FRESH ROLL', description: 'Fresh rice paper rolls with shrimp, vegetables and noodles', price: 8.00, image: '/images/appetizer.jpg', category: 'Appetizer', addOns: appetizerAddOns },
  { id: 'a8', name: 'SPICY EDAMAME', description: 'Steamed soybeans tossed in spicy chili seasoning', price: 6.00, image: '/images/appetizer.jpg', category: 'Appetizer', addOns: appetizerAddOns },
  { id: 'a9', name: 'PORK BAO', description: 'Chinese style bun filled with BBQ pork steamed', price: 5.50, image: '/images/appetizer.jpg', category: 'Appetizer', addOns: appetizerAddOns },
  { id: 'a10', name: 'IKA GESO', description: 'Lightly fried squid tentacles with spicy mayo', price: 10.00, image: '/images/appetizer.jpg', category: 'Appetizer', addOns: appetizerAddOns },
  { id: 'a11', name: 'LUCKY WING', description: 'Breaded chicken wings mix with house Special sauce', price: 8.00, image: '/images/appetizer.jpg', category: 'Appetizer', addOns: appetizerAddOns },

  // Thai Dish
  { id: 't1', name: 'PAD THAI', description: 'Thin rice noodles, Egg, beans spout, scallions, stir-friedwith pad Thai sauce', price: 15.00, image: '/images/thai_dish.jpg', category: 'Thai', addOns: proteinAddOns },
  { id: 't2', name: 'PAD SEE EW', description: 'Wide rice noodles, egg, chinese broccoli, stir-friedin house special sauce', price: 15.00, image: '/images/thai_dish.jpg', category: 'Thai', addOns: proteinAddOns },
  { id: 't3', name: 'DRUNKEN NOODLE', description: 'Wide rice noodles, onions, red bell pepper, green bell pepper, thai basil and stir-fried in spicy sauce', price: 15.00, image: '/images/thai_dish.jpg', category: 'Thai', addOns: proteinAddOns },
  { id: 't4', name: 'KUA GAI', description: 'Chicken wok fried with wide rice noodles and egg served over a bed of lettuce, topped with scallions', price: 15.00, image: '/images/thai_dish.jpg', category: 'Thai', addOns: proteinAddOns },
  { id: 't5', name: 'MASSAMAN CURRY', description: 'Massaman curry paste, coconut milk, onion,potato, carrot', price: 15.00, image: '/images/thai_dish.jpg', category: 'Thai', addOns: proteinAddOns },
  { id: 't6', name: 'KAO SOI GAI', description: 'Northern-style Chicken curry broth, egg noodles,red onion and cilantro', price: 15.00, image: '/images/thai_dish.jpg', category: 'Thai', addOns: proteinAddOns },
  { id: 't7', name: 'THAI TRAIN FIRED RICE', description: 'Traditional Thai-Style fired rice cooked with vegetables,egg and choice protien', price: 15.00, image: '/images/thai_dish.jpg', category: 'Thai', addOns: proteinAddOns },
  { id: 't8', name: 'GREEN CURRY', description: 'Green curry paste, coconut milk, bell pepper, pea & carrot and Thai basil leaves', price: 15.00, image: '/images/thai_dish.jpg', category: 'Thai', addOns: proteinAddOns },

  // Drinks and Desserts
  { id: 'd1', name: 'COKE', description: 'Soft Drink', price: 3.00, image: '/images/drink_dessert.jpg', category: 'Drink & Dessert' },
  { id: 'd2', name: 'COKE ZERO', description: 'Soft Drink', price: 3.00, image: '/images/drink_dessert.jpg', category: 'Drink & Dessert' },
  { id: 'd3', name: 'DIET COKE', description: 'Soft Drink', price: 3.00, image: '/images/drink_dessert.jpg', category: 'Drink & Dessert' },
  { id: 'd4', name: 'SPRITE', description: 'Soft Drink', price: 3.00, image: '/images/drink_dessert.jpg', category: 'Drink & Dessert' },
  { id: 'd5', name: 'THAI ICE TEA', description: 'Tea', price: 3.00, image: '/images/drink_dessert.jpg', category: 'Drink & Dessert', addOns: drinkAddOns },
  { id: 'd6', name: 'THAI ICE COFFEE', description: 'Tea', price: 3.00, image: '/images/drink_dessert.jpg', category: 'Drink & Dessert', addOns: drinkAddOns },
  { id: 'd7', name: 'STRAWBERRY RAMUNE', description: 'Flavored Ramune', price: 3.00, image: '/images/drink_dessert.jpg', category: 'Drink & Dessert' },
  { id: 'd8', name: 'MELON RAMUNE', description: 'Flavored Ramune', price: 3.00, image: '/images/drink_dessert.jpg', category: 'Drink & Dessert' },
  { id: 'd9', name: 'LYCHEE RAMUNE', description: 'Flavored Ramune', price: 3.00, image: '/images/drink_dessert.jpg', category: 'Drink & Dessert' },
  { id: 'd10', name: 'COCONUT PUDDING', description: 'Silky coconut pudding with a rich creamy texture', price: 5.00, image: '/images/drink_dessert.jpg', category: 'Drink & Dessert' },
  { id: 'd11', name: 'MANGO STICKY', description: 'Fresh mango served with sweet coconut sticky rice', price: 7.00, image: '/images/drink_dessert.jpg', category: 'Drink & Dessert' },
  { id: 'd12', name: 'MOCHI ICE', description: 'Chewy Japanese mochi filled with creamy ice cream', price: 6.00, image: '/images/drink_dessert.jpg', category: 'Drink & Dessert' },
  { id: 'd13', name: 'THAI ICE', description: 'Refreshing Thai-style shaved ice with sweet toppings', price: 1.00, image: '/images/drink_dessert.jpg', category: 'Drink & Dessert' }
];

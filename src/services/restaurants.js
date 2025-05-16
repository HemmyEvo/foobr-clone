// src/services.js
export const fetchRestaurants = async () => {
    // In a real app, this would be an API call
    return [
      { 
        id: 1, 
        name: "Chicken Republic", 
        deliveryTime: "15-25 min", 
        area: "Takie, Ogbomosho", 
        image: '/chicken-repu', 
        logo: 'chicken-republic.svg', 
        rating: 4.8,
        minOrder: 10.00
      },
      { 
        id: 2,
        name: "Bitemore", 
        deliveryTime: "20-30 min", 
        area: "Takie, Ogbomosho", 
        logo: 'Bitemore-icon.svg', 
        rating: 4.6,
        minOrder: 8.50
      },
      { 
        id: 3,
        name: "Brent Restaurant", 
        deliveryTime: "10-20 min", 
        area: "Isale General, Ogbomosho", 
        logo: '/logos/brent.svg', 
        rating: 4.9,
        minOrder: 12.00
      },
      { 
        id: 4,
        name: "Perozona", 
        deliveryTime: "25-35 min", 
        area: "Sabo, Ogbomosho", 
        logo: '/logos/perozona.svg', 
        rating: 4.7,
        minOrder: 15.00
      },
      { 
        id: 5,
        name: "Item 7", 
        deliveryTime: "15-25 min", 
        area: "Sabo, Ogbomosho", 
        logo: '/logos/item7.svg', 
        rating: 4.5,
        minOrder: 7.00
      },
      { 
        id: 6,
        name: "Danjuma Restaurant", 
        deliveryTime: "30-40 min", 
        area: "Isale General, Ogbomosho", 
        logo: '/logos/danjuma.svg', 
        rating: 4.4,
        minOrder: 9.00
      },
      { 
        id: 7,
        name: "Tasty Bites", 
        deliveryTime: "20-30 min", 
        area: "Takie, Ogbomosho", 
        logo: '/logos/tasty-bites.svg', 
        rating: 4.3,
        minOrder: 10.00
      },
      { 
        id: 8,
        name: "Spice Garden", 
        deliveryTime: "25-35 min", 
        area: "Oke-Ado, Ogbomosho", 
        logo: '/logos/spice-garden.svg', 
        rating: 4.6,
        minOrder: 12.00
      },
      { 
        id: 9,
        name: "Golden Fork", 
        deliveryTime: "15-25 min", 
        area: "Sabo, Ogbomosho", 
        logo: '/logos/golden-fork.svg', 
        rating: 4.7,
        minOrder: 8.00
      },
      { 
        id: 10,
        name: "Nigerian Delight", 
        deliveryTime: "30-45 min", 
        area: "Isale General, Ogbomosho", 
        logo: '/logos/nigerian-delight.svg', 
        rating: 4.5,
        minOrder: 10.00
      },
      { 
        id: 11,
        name: "Suya Spot", 
        deliveryTime: "20-30 min", 
        area: "Takie, Ogbomosho", 
        logo: '/logos/suya-spot.svg', 
        rating: 4.8,
        minOrder: 6.00
      },
      { 
        id: 12,
        name: "Pounded Palace", 
        deliveryTime: "25-40 min", 
        area: "Oke-Ado, Ogbomosho", 
        logo: '/logos/pounded-palace.svg', 
        rating: 4.4,
        minOrder: 12.00
      },
      { 
        id: 13,
        name: "Amala Express", 
        deliveryTime: "20-35 min", 
        area: "Sabo, Ogbomosho", 
        logo: '/logos/amala-express.svg', 
        rating: 4.6,
        minOrder: 9.00
      },
      { 
        id: 14,
        name: "Pepper Soup Joint", 
        deliveryTime: "15-25 min", 
        area: "Isale General, Ogbomosho", 
        logo: '/logos/pepper-soup-joint.svg', 
        rating: 4.3,
        minOrder: 7.00
      },
      { 
        id: 15,
        name: "Ewa Agoyin Hub", 
        deliveryTime: "20-30 min", 
        area: "Takie, Ogbomosho", 
        logo: '/logos/ewa-agoyin.svg', 
        rating: 4.7,
        minOrder: 5.00
      },
      { 
        id: 16,
        name: "Jollof Junction", 
        deliveryTime: "15-25 min", 
        area: "Oke-Ado, Ogbomosho", 
        logo: '/logos/jollof-junction.svg', 
        rating: 4.5,
        minOrder: 8.00
      },
      { 
        id: 17,
        name: "Mama Put", 
        deliveryTime: "20-35 min", 
        area: "Sabo, Ogbomosho", 
        logo: '/logos/mama-put.svg', 
        rating: 4.4,
        minOrder: 6.00
      },
      { 
        id: 18,
        name: "Fisherman's Wharf", 
        deliveryTime: "30-45 min", 
        area: "Isale General, Ogbomosho", 
        logo: '/logos/fishermans-wharf.svg', 
        rating: 4.6,
        minOrder: 15.00
      },
      { 
        id: 19,
        name: "Burger King", 
        deliveryTime: "15-25 min", 
        area: "Takie, Ogbomosho", 
        logo: '/logos/burger-king.svg', 
        rating: 4.2,
        minOrder: 10.00
      },
      { 
        id: 20,
        name: "Pizza Palace", 
        deliveryTime: "25-40 min", 
        area: "Oke-Ado, Ogbomosho", 
        logo: '/logos/pizza-palace.svg', 
        rating: 4.7,
        minOrder: 12.00
      },
      { 
        id: 21,
        name: "Chicken Lovers", 
        deliveryTime: "20-30 min", 
        area: "Sabo, Ogbomosho", 
        logo: '/logos/chicken-lovers.svg', 
        rating: 4.5,
        minOrder: 9.00
      },
      { 
        id: 22,
        name: "The Oriental", 
        deliveryTime: "30-45 min", 
        area: "Isale General, Ogbomosho", 
        logo: '/logos/the-oriental.svg', 
        rating: 4.8,
        minOrder: 15.00
      },
      { 
        id: 23,
        name: "Tasty Shawarma", 
        deliveryTime: "15-25 min", 
        area: "Takie, Ogbomosho", 
        logo: '/logos/tasty-shawarma.svg', 
        rating: 4.6,
        minOrder: 7.00
      },
      { 
        id: 24,
        name: "Kilishi Corner", 
        deliveryTime: "10-20 min", 
        area: "Oke-Ado, Ogbomosho", 
        logo: '/logos/kilishi-corner.svg', 
        rating: 4.4,
        minOrder: 5.00
      },
      { 
        id: 25,
        name: "Mr. Biggs", 
        deliveryTime: "20-30 min", 
        area: "Sabo, Ogbomosho", 
        logo: '/logos/mr-biggs.svg', 
        rating: 4.3,
        minOrder: 8.00
      },
      { 
        id: 26,
        name: "Tantalizers", 
        deliveryTime: "15-25 min", 
        area: "Isale General, Ogbomosho", 
        logo: '/logos/tantalizers.svg', 
        rating: 4.2,
        minOrder: 7.00
      },
      { 
        id: 27,
        name: "Sweet Sensation", 
        deliveryTime: "20-35 min", 
        area: "Takie, Ogbomosho", 
        logo: '/logos/sweet-sensation.svg', 
        rating: 4.5,
        minOrder: 6.00
      },
      { 
        id: 28,
        name: "Crust & Cream", 
        deliveryTime: "25-40 min", 
        area: "Oke-Ado, Ogbomosho", 
        logo: '/logos/crust-cream.svg', 
        rating: 4.7,
        minOrder: 10.00
      },
      { 
        id: 29,
        name: "Cold Stone Creamery", 
        deliveryTime: "30-45 min", 
        area: "Sabo, Ogbomosho", 
        logo: '/logos/cold-stone.svg', 
        rating: 4.6,
        minOrder: 8.00
      },
      { 
        id: 30,
        name: "The Place", 
        deliveryTime: "20-30 min", 
        area: "Isale General, Ogbomosho", 
        logo: '/logos/the-place.svg', 
        rating: 4.4,
        minOrder: 12.00
      },
      { 
        id: 31,
        name: "Domino's Pizza", 
        deliveryTime: "25-40 min", 
        area: "Takie, Ogbomosho", 
        logo: '/logos/dominos.svg', 
        rating: 4.7,
        minOrder: 15.00
      },
      { 
        id: 32,
        name: "KFC", 
        deliveryTime: "20-30 min", 
        area: "Oke-Ado, Ogbomosho", 
        logo: '/logos/kfc.svg', 
        rating: 4.5,
        minOrder: 10.00
      }
    ];
  };
  
  export const fetchRestaurantById = async (id) => {
    // Mock data - in real app would fetch from API
    const restaurants = {
      1: {
        id: 1,
        name: "Chicken Republic",
        rating: 4.5,
        deliveryTime: "20-30 min",
        minOrder: 10.00,
        image: "/Item 7 edited.svg",
        menu: [
          { id: 1, name: "Fried Chicken Meal", description: "Crispy fried chicken with fries and drink", price: 12.99, category: "Meals" },
          { id: 2, name: "Jollof Rice", description: "Spicy jollof rice with chicken", price: 10.50, category: "Meals" },
          { id: 3, name: "Pepper Soup", description: "Spicy pepper soup with assorted meat", price: 8.75, category: "Soups" },
          { id: 4, name: "Chicken Shawarma", description: "Wrap with chicken, veggies and sauce", price: 7.99, category: "Snacks" },
          { id: 5, name: "Beef Suya", description: "Spicy grilled beef skewers", price: 9.25, category: "Snacks" },
          { id: 6, name: "Chapman Drink", description: "Refreshing Nigerian cocktail", price: 4.50, category: "Drinks" }
        ]
      },
      2: {
        id: 2,
        name: "Bitemore",
        rating: 4.6,
        deliveryTime: "20-30 min",
        minOrder: 8.50,
        image: "/Item 7 edited.svg",
        menu: [
          { id: 1, name: "Bitemore Special", description: "Grilled chicken with plantain and coleslaw", price: 14.99, category: "Meals" },
          { id: 2, name: "Fried Rice Special", description: "Fried rice with mixed meat and vegetables", price: 11.50, category: "Meals" },
          { id: 3, name: "Goat Meat Pepper Soup", description: "Spicy goat meat pepper soup", price: 9.75, category: "Soups" },
          { id: 4, name: "Spring Rolls", description: "Crispy vegetable spring rolls", price: 6.99, category: "Snacks" },
          { id: 5, name: "Fruit Juice", description: "Freshly squeezed fruit juice", price: 3.50, category: "Drinks" }
        ]
      },
      3: {
        id: 3,
        name: "Brent Restaurant",
        rating: 4.9,
        deliveryTime: "10-20 min",
        minOrder: 12.00,
        image: "/b",
        menu: [
          { id: 1, name: "Brent Special Rice", description: "Special rice with assorted meat", price: 15.99, category: "Meals" },
          { id: 2, name: "Ofada Rice", description: "Local ofada rice with special sauce", price: 12.50, category: "Meals" },
          { id: 3, name: "Egusi Soup", description: "Melon soup with assorted meat", price: 10.75, category: "Soups" },
          { id: 4, name: "Puff Puff", description: "Sweet fried dough balls", price: 3.99, category: "Snacks" },
          { id: 5, name: "Zobo Drink", description: "Refreshing hibiscus drink", price: 2.50, category: "Drinks" }
        ]
      },
      4: {
        id: 4,
        name: "Perozona",
        rating: 4.7,
        deliveryTime: "25-35 min",
        minOrder: 15.00,
        image: "/pero",
        menu: [
          { id: 1, name: "Perozona Special Pizza", description: "Large pizza with 5 toppings", price: 18.99, category: "Meals" },
          { id: 2, name: "Spaghetti Bolognese", description: "Pasta with rich meat sauce", price: 14.50, category: "Meals" },
          { id: 3, name: "Garlic Bread", description: "Toasted bread with garlic butter", price: 5.75, category: "Sides" },
          { id: 4, name: "Ice Cream Sundae", description: "Vanilla ice cream with toppings", price: 6.99, category: "Desserts" },
          { id: 5, name: "Soft Drink", description: "Choice of soda", price: 2.50, category: "Drinks" }
        ]
      },
      5: {
        id: 5,
        name: "Item 7",
        rating: 4.5,
        deliveryTime: "15-25 min",
        minOrder: 7.00,
        image: "/i",
        menu: [
          { id: 1, name: "Item 7 Special", description: "Special dish with rice and chicken", price: 10.99, category: "Meals" },
          { id: 2, name: "Beef Stew", description: "Rich beef stew with potatoes", price: 8.50, category: "Meals" },
          { id: 3, name: "Vegetable Soup", description: "Healthy vegetable soup", price: 7.75, category: "Soups" },
          { id: 4, name: "Meat Pie", description: "Flaky pastry with meat filling", price: 3.99, category: "Snacks" },
          { id: 5, name: "Mineral Water", description: "Bottled water", price: 1.50, category: "Drinks" }
        ]
      },
      6: {
        id: 6,
        name: "Danjuma Restaurant",
        rating: 4.4,
        deliveryTime: "30-40 min",
        minOrder: 9.00,
        image: "/dan",
        menu: [
          { id: 1, name: "Danjuma Special", description: "Rice with fried plantain and fish", price: 11.99, category: "Meals" },
          { id: 2, name: "Moi Moi", description: "Steamed bean pudding", price: 5.50, category: "Sides" },
          { id: 3, name: "Okra Soup", description: "Fresh okra soup with assorted meat", price: 8.75, category: "Soups" },
          { id: 4, name: "Doughnut", description: "Sweet fried dough", price: 2.99, category: "Snacks" },
          { id: 5, name: "Malt Drink", description: "Non-alcoholic malt beverage", price: 2.50, category: "Drinks" }
        ]
      },
      7: {
        id: 7,
        name: "Tasty Bites",
        rating: 4.3,
        deliveryTime: "20-30 min",
        minOrder: 10.00,
        image: "/tasty-b",
        menu: [
          { id: 1, name: "Tasty Bites Combo", description: "Rice, chicken, and salad", price: 12.99, category: "Meals" },
          { id: 2, name: "Beans and Plantain", description: "Stewed beans with fried plantain", price: 8.50, category: "Meals" },
          { id: 3, name: "Vegetable Salad", description: "Fresh vegetable salad", price: 6.75, category: "Sides" },
          { id: 4, name: "Sausage Roll", description: "Pastry with sausage filling", price: 4.99, category: "Snacks" },
          { id: 5, name: "Fruit Salad", description: "Mixed fresh fruits", price: 5.50, category: "Desserts" }
        ]
      },
      8: {
        id: 8,
        name: "Spice Garden",
        rating: 4.6,
        deliveryTime: "25-35 min",
        minOrder: 12.00,
        image: "/spice-ga",
        menu: [
          { id: 1, name: "Spicy Chicken Wings", description: "Hot and spicy chicken wings", price: 13.99, category: "Meals" },
          { id: 2, name: "Curry Rice", description: "Rice with curry sauce and vegetables", price: 11.50, category: "Meals" },
          { id: 3, name: "Peppered Snail", description: "Spicy grilled snail", price: 14.75, category: "Appetizers" },
          { id: 4, name: "Fried Yam", description: "Crispy fried yam slices", price: 5.99, category: "Sides" },
          { id: 5, name: "Pineapple Juice", description: "Fresh pineapple juice", price: 4.50, category: "Drinks" }
        ]
      },
      9: {
        id: 9,
        name: "Golden Fork",
        rating: 4.7,
        deliveryTime: "15-25 min",
        minOrder: 8.00,
        image: "/golden-",
        menu: [
          { id: 1, name: "Golden Special", description: "Jollof rice with grilled fish", price: 14.99, category: "Meals" },
          { id: 2, name: "Amala with Ewedu", description: "Traditional yam flour with jute leaves soup", price: 10.50, category: "Meals" },
          { id: 3, name: "Goat Meat Stew", description: "Rich goat meat stew", price: 12.75, category: "Sides" },
          { id: 4, name: "Chin Chin", description: "Sweet crunchy snack", price: 3.99, category: "Snacks" },
          { id: 5, name: "Tigernut Drink", description: "Traditional tigernut milk", price: 3.50, category: "Drinks" }
        ]
      },
      10: {
        id: 10,
        name: "Nigerian Delight",
        rating: 4.5,
        deliveryTime: "30-45 min",
        minOrder: 10.00,
        image: "/nigerian-del",
        menu: [
          { id: 1, name: "Nigerian Platter", description: "Assorted Nigerian dishes", price: 16.99, category: "Meals" },
          { id: 2, name: "Pounded Yam with Egusi", description: "Traditional pounded yam with melon soup", price: 13.50, category: "Meals" },
          { id: 3, name: "Fisherman Soup", description: "Rich seafood soup", price: 15.75, category: "Soups" },
          { id: 4, name: "Boli with Fish", description: "Roasted plantain with grilled fish", price: 9.99, category: "Snacks" },
          { id: 5, name: "Palm Wine", description: "Traditional palm wine", price: 7.50, category: "Drinks" }
        ]
      }
      // Additional restaurants can be added following the same pattern
    };
    
    return restaurants[id] || null;
  };
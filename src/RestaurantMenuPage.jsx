// src/pages/RestaurantMenuPage.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRestaurantById } from './services/restaurants';
import { Star, Clock, ShoppingCart, Plus, Minus, X } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3 }
  }
};

const RestaurantMenuPage = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const loadRestaurant = async () => {
      try {
        const data = await fetchRestaurantById(id);
        if (!data) {
          throw new Error('Restaurant not found');
        }
        setRestaurant(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadRestaurant();
  }, [id]);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === itemId);
      
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(item =>
          item.id === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      
      return prevCart.filter(item => item.id !== itemId);
    });
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
  };

  const generateOrderId = () => {
    return `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  };

  const handleCheckout = () => {
    const newOrderId = generateOrderId();
    setOrderId(newOrderId);
    // In a real app, you would send the order to your backend here
    console.log('Order submitted:', { orderId: newOrderId, items: cart, total: calculateTotal() });
    
    // Reset cart after a delay to show the order confirmation
    setTimeout(() => {
      setCart([]);
      setOrderId(null);
    }, 3000);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        Error loading restaurant: {error}
      </div>
    );
  }

  if (!restaurant) {
    return <div className="p-8 text-center">Restaurant not found</div>;
  }

  const categories = [...new Set(restaurant.menu.map(item => item.category))];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="w-16 h-16 rounded-full overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${restaurant.image})` }}
                whileHover={{ scale: 1.05 }}
              />
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-white">{restaurant.name}</h1>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                  <span className="text-white ml-1">{restaurant.rating}</span>
                  <span className="text-white/80 ml-4 flex items-center">
                    <Clock className="w-4 h-4 mr-1" /> {restaurant.deliveryTime}
                  </span>
                </div>
              </div>
            </motion.div>

            {categories.map(category => (
              <motion.div 
                key={category} 
                className="mb-8"
                variants={fadeIn}
              >
                <h2 className="text-xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
                  {category}
                </h2>
                <div className="space-y-4">
                  {restaurant.menu
                    .filter(item => item.category === category)
                    .map((item, index) => (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        custom={index}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex justify-between items-center border border-white/10 hover:bg-white/20 transition"
                        whileHover={{ scale: 1.01 }}
                      >
                        <div className="flex-1">
                          <h3 className="font-medium text-white">{item.name}</h3>
                          <p className="text-sm text-white/60">{item.description}</p>
                          <p className="text-white mt-1">${item.price.toFixed(2)}</p>
                        </div>
                        <button 
                          onClick={() => addToCart(item)}
                          className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm transition flex items-center gap-1"
                          
                        >
                          <Plus className="w-4 h-4" /> Add
                        </button>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="md:w-1/3">
            <motion.div 
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 sticky top-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" /> Your Order
                </h2>
                {cart.length > 0 && (
                  <button 
                    onClick={() => setCart([])}
                    className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1"
                  >
                    <X className="w-3 h-3" /> Clear
                  </button>
                )}
              </div>
              
              {orderId ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Order Placed!</h3>
                  <p className="text-white/80 mb-4">Your order ID is:</p>
                  <p className="font-mono bg-white/10 px-3 py-2 rounded-lg text-white mb-4">{orderId}</p>
                  <p className="text-sm text-white/60">Estimated delivery: {restaurant.deliveryTime}</p>
                </motion.div>
              ) : cart.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <ShoppingCart className="w-12 h-12 text-white/30 mx-auto mb-4" />
                  <p className="text-white/60 text-sm">Your cart is empty</p>
                  <p className="text-white/40 text-xs mt-2">Add items to get started</p>
                </motion.div>
              ) : (
                <motion.div layout>
                  <div className="space-y-3 mb-4 max-h-64 overflow-y-auto pr-2">
                    <AnimatePresence>
                      {cart.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex justify-between items-center text-sm bg-white/5 rounded-lg p-3"
                        >
                          <div className="flex-1">
                            <div className="font-medium text-white">{item.name}</div>
                            <div className="text-white/60">${item.price.toFixed(2)} each</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-white w-6 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => addToCart(item)}
                              className="w-6 h-6 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="ml-4 text-white font-medium">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between items-center text-white mb-2">
                      <span>Subtotal</span>
                      <span>${calculateTotal()}</span>
                    </div>
                    <div className="flex justify-between items-center text-white/60 text-sm mb-4">
                      <span>Delivery Fee</span>
                      <span>$2.50</span>
                    </div>
                    <div className="flex justify-between font-medium text-white mb-4 border-t border-white/20 pt-2">
                      <span>Total</span>
                      <span>${(parseFloat(calculateTotal()) + 2.50).toFixed(2)}</span>
                    </div>
                    <motion.button 
                      onClick={handleCheckout}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-full transition font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Checkout
                    </motion.button>
                    <p className="text-xs text-white/50 mt-3 text-center">
                      Minimum order: ${restaurant.minOrder.toFixed(2)}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RestaurantMenuPage;
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Clock, Zap, Smartphone, Wallet, Utensils, Pizza, Drumstick, Star, LocateFixed } from 'lucide-react';
import { motion } from 'framer-motion';
import RestaurantsPage from './RestaurantsPage';
import RestaurantMenuPage from './RestaurantMenuPage';
import OrderHistoryPage from './History';
import ContactPage from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// FoodDrop Component
const FoodDrop = ({ imgSrc, altText, initialPos, size, delay, rippleDelay }) => {
  const sizeClasses = {
    xs: 'w-12 h-12',
    sm: 'w-14 h-14',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };
  
  const bgSize = {
    xs: 'w-20 h-20',
    sm: 'w-20 h-20',
    md: 'w-24 h-24',
    lg: 'w-28 h-28'
  };
  console.log(initialPos.x, initialPos.y);
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: [0, -15 - Math.random() * 10, 0],
        opacity: 1,
        transition: {
          y: {
            repeat: Infinity,
            duration: 3 + Math.random() * 2,
            ease: "easeInOut",
            delay
          }
        }
      }}
      className={`absolute `}
      whileHover={{ scale: 1.2, zIndex: 10 }}
      whileTap={{ scale: 0.9 }}
      style={{ left: initialPos.x, top: initialPos.y }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="relative">
        {/* Water drop background */}
        <motion.div
          className={`absolute -top-2 -left-2 ${bgSize[size]} rounded-[50%] bg-white/10 backdrop-blur-sm`}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
            transition: {
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay
            }
          }}
        />
        
        {/* Food image */}
        <motion.div
          className={`${sizeClasses[size]} rounded-full overflow-hidden border-2 border-white/30 shadow-lg cursor-pointer`}
        >
          <img 
            src={imgSrc} 
            alt={altText}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </motion.div>
        
        {/* Ripple effect */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: 1.5,
            opacity: 0,
            transition: {
              repeat: Infinity,
              duration: 3,
              delay: rippleDelay
            }
          }}
          className="absolute inset-0 rounded-full border border-white/20 pointer-events-none"
        />
        
        {/* Splash effect on hover */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{
            scale: 1.5,
            opacity: [0.6, 0],
            transition: { duration: 0.6 }
          }}
          className="absolute inset-0 rounded-full bg-white/30 pointer-events-none"
        />
      </div>
    </motion.div>
  );
};

const HomePage = () => {
  const features = [
    {
      title: "Lightning Delivery",
      description: "Get meals in 30 minutes or less",
      icon: <Zap className="w-6 h-6" />,
      bgColor: "from-orange-500/20 to-orange-600/20"
    },
    {
      title: "Smart Ordering",
      description: "Easy-to-use interface",
      icon: <Smartphone className="w-6 h-6" />,
      bgColor: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "Affordable Meals",
      description: "Delicious meals that fit your budget",
      icon: <Wallet className="w-6 h-6" />,
      bgColor: "from-green-500/20 to-green-600/20"
    }
  ];

  const popularRestaurants = [
    { name: "Chicken Republic", deliveryTime: "15-25 min", area: "Takie, Ogbomosho", cuisine: '/Chicken republic- edited icon.svg', rating: "4.8" },
    { name: "Bitemore", deliveryTime: "20-30 min", area: "Takie, Ogbomosho", cuisine: '/Bitemore-icon.svg', rating: "4.6" },
    { name: "Brent", deliveryTime: "10-20 min", area: "", cuisine: 'Brent-icon.svg', rating: "4.9" },
    { name: "Perozona", deliveryTime: "25-35 min", area: "", cuisine: '/Perozona.svg', rating: "4.7" },
    { name: "Item 7", deliveryTime: "15-25 min", area: "Sabo, Ogbomosho", cuisine: '/Item 7 edited.svg', rating: "4.5" },
    { name: "Danjuma", deliveryTime: "30-40 min", area: "Isale General, Ogbomoso", cuisine: '/Danjuma.svg', rating: "4.4" } 
  ];

  const processSteps = [
    { 
      title: "Browse", 
      description: "Discover local favorites", 
      icon: <Utensils className="w-5 h-5" />
    },
    { 
      title: "Order", 
      description: "Select your meal", 
      icon: <Smartphone className="w-5 h-5" />
    },
    { 
      title: "Track", 
      description: "Real-time updates", 
      icon: <Clock className="w-5 h-5" />
    },
    { 
      title: "Enjoy", 
      description: "Delivered fresh", 
      icon: <Drumstick className="w-5 h-5" />
    }
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-cover bg-fixed bg-center">
      {/* Backdrop overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
          {/* Background water drop particles (subtle animation) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -20, opacity: 0 }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.6, 0.3],
                  transition: {
                    duration: 4 + Math.random() * 3,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
                className="absolute rounded-full bg-white/10 backdrop-blur-xs"
                style={{
                  width: `${5 + Math.random() * 10}px`,
                  height: `${5 + Math.random() * 10}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8 } }
            }}
            className="glass-container p-6 sm:p-8 rounded-2xl md:rounded-3xl backdrop-blur-sm"
            whileHover={{ scale: 1.005 }}
          >
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
              {/* Text Content */}
              <div className="lg:w-1/2 z-10">
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                    Gourmet meals
                  </span> delivered to your doorstep
                </motion.h1>
                
                <motion.p 
                  className="text-base md:text-lg text-white/80 mb-6 md:mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  You do the reading, while we deliver the food to your doorstep 
                </motion.p>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/restaurants" 
                    className="inline-flex items-center px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-lg md:rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Order Now 
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
              
              {/* Animated Food Drops */}
              <div className="lg:w-1/2 absolute right-5 bottom-4  w-1/2 h-64 sm:h-80 md:h-96 mt-8 lg:mt-0">
                <FoodDrop 
                  imgSrc="/Chicken republic- edited icon.svg"
                  altText="Burger"
                  initialPos={{ x: '55%', y: '10%' }}
                  size="md"
                  delay={0}
                  rippleDelay={0.5}
                />
                
                <FoodDrop 
                  imgSrc="/Danjuma.svg"
                  altText="Sushi"
                  initialPos={{ x: '80%', y: '40%' }}
                  size="sm"
                  delay={0.3}
                  rippleDelay={0.8}
                />
                
                <FoodDrop 
                  imgSrc="/Perozona.svg"
                  altText="Pizza"
                  initialPos={{ x: '55%', y: '90%' }}
                  size="lg"
                  delay={0.6}
                  rippleDelay={1.1}
                />
                
                <FoodDrop 
                  imgSrc="/Bitemore-icon.svg"
                  altText="Chicken"
                  initialPos={{ x: '80%', y: '80%' }}
                  size="xs"
                  delay={0.9}
                  rippleDelay={1.4}
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              },
              hidden: { opacity: 0 }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { value: "30min", label: "Avg Delivery", icon: <Clock className="w-5 h-5" /> },
              { value: "500+", label: "Restaurants", icon: <Utensils className="w-5 h-5" /> },
              { value: "98%", label: "Satisfaction", icon: <Star className="w-5 h-5" /> },
              { value: "₦", label: "Great Prices", icon: <Wallet className="w-5 h-5" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="glass-container rounded-full p-6 text-center"
              >
                <div className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                  {stat.icon} {stat.value}
                </div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">Why Choose Us</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Premium food delivery service designed for your convenience
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              },
              hidden: { opacity: 0 }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className={`glass-container p-6 rounded-2xl bg-gradient-to-br ${feature.bgColor}`}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 text-orange-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* How It Works */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 py-12 bg-white/5 backdrop-blur-md border-t border-b border-white/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">How It Works</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Get your favorite meals in just a few simple steps
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              },
              hidden: { opacity: 0 }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.03 }}
                className="glass-container rounded-lg p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500/20 backdrop-blur-md flex items-center justify-center mx-auto mb-4 text-orange-400">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                <p className="text-sm text-white/80">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Popular Restaurants */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex justify-between items-center mb-8"
          >
            <h2 className="text-3xl font-bold text-white">Popular Restaurants</h2>
            <Link 
              to="/restaurants" 
              className="text-orange-400 hover:text-orange-300 flex items-center gap-1"
            >
              View All 
            </Link>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              },
              hidden: { opacity: 0 }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {popularRestaurants.map((restaurant, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <Link 
                  to={`/restaurant/${index+1}`}
                  className="glass-container hover:bg-white/5 transition-all duration-300 rounded-2xl overflow-hidden block h-full"
                >
                  <div className="h-48 bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="w-full h-full"
                    >
                      <img
                        src={restaurant.cuisine}
                        alt={`${restaurant.name} cuisine`}
                        className="w-full h-full object-cover object-center"  
                      />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-white">{restaurant.name}</h3>
                      <span className="bg-gray-700 text-yellow-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400" /> {restaurant.rating}
                      </span>
                    </div>
                    <div className="flex justify-between mt-4 text-sm text-gray-300">
                      <span className="flex items-center gap-1">
                        <LocateFixed className="w-4 h-4" /> {restaurant.area}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {restaurant.deliveryTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        .glass-container {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
        }
        .glass-icon {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[url('/bg2.jpg')] bg-cover bg-center bg-fixed">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/restaurant/:id" element={<RestaurantMenuPage />} />
          <Route path="/history" element={<OrderHistoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
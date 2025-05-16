// src/pages/RestaurantsPage.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, LocateFixed, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { fetchRestaurants } from './services/restaurants';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const RestaurantsPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        const data = await fetchRestaurants();
        setRestaurants(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadRestaurants();
  }, []);

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
        Error loading restaurants: {error}
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-8"
        >
          Available Restaurants
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <motion.div
              key={restaurant.id}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link 
                to={`/restaurant/${restaurant.id}`}
                className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:bg-white/20 transition border border-white/20 block"
              >
                <div className="h-48 bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center relative overflow-hidden">
                  <motion.img
                    src={restaurant.logo}
                    alt={`${restaurant.name} logo`}
                    className="w-32 h-32 object-contain"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black/10"
                    whileHover={{ opacity: 0 }}
                  />
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
        </div>
      </div>
    </motion.div>
  );
};

export default RestaurantsPage;
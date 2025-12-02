'use client';

import React, { useState } from 'react';
import { Zap, BarChart, Terminal, CheckCircle2, Star } from 'lucide-react';

// --- Product Data ---
const AVAILABLE_PRODUCTS = [
  {
    id: 'nexus_pro',
    name: 'Nexus Pro Analytics',
    description: 'Real-time data engine for enterprise-level reporting and AI forecasting.',
    icon: <BarChart className="w-8 h-8 text-blue-500" />,
    rating: 4.8,
    features: ['Unlimited Projects', 'Custom Dashboards', 'API Access']
  },
  {
    id: 'forge_ci',
    name: 'Forge CI/CD Pipeline',
    description: 'Automated, lightning-fast deployment pipelines with instant rollback support.',
    icon: <Terminal className="w-8 h-8 text-purple-500" />,
    rating: 4.5,
    features: ['500 Build Minutes', 'Docker & K8s Support', 'Parallel Testing']
  },
  {
    id: 'aegis_guard',
    name: 'Aegis Security Suite',
    description: 'Zero-trust security and compliance tooling for cloud infrastructure.',
    icon: <Zap className="w-8 h-8 text-emerald-500" />,
    rating: 4.9,
    features: ['DDOS Protection', 'Audit Logs', 'SOC2 Compliance']
  }
];

// --- ProductCard Component ---
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-slate-900 border border-white/10 rounded-xl p-6 flex flex-col hover:border-indigo-500/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        {product.icon}
        <div className="flex items-center text-yellow-400 text-sm">
          <Star className="w-4 h-4 fill-current mr-1" />
          <span>{product.rating}</span>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
      <p className="text-slate-400 text-sm mb-4 flex-grow">{product.description}</p>

      <ul className="space-y-2 mb-6">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center text-slate-300 text-sm">
            <CheckCircle2 className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-4 border-t border-white/5">
        <div className="flex justify-between items-center mb-3">
          {/* price removed intentionally */}
          <span className="text-xs text-slate-500">Per Month</span>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

// --- ProductPage Component (Container) ---
const ProductPage = () => {
  // State to hold items in the cart
  const [cart, setCart] = useState([]);

  // Function to handle adding a product to the cart
  const handleAddToCart = (productToAdd) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productToAdd.id);

      if (existingItem) {
        // If product exists, increment quantity
        return prevCart.map(item =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If product is new, add it with quantity 1
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      }
    });
  };

  // Calculate total items (prices removed as requested)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="py-24 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Our Developer Suite</h1>
          <p className="text-xl text-slate-400">Explore the tools that accelerate modern software teams.</p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {AVAILABLE_PRODUCTS.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <hr className="border-t border-white/10 mb-16" />


      </div>
    </div>
  );
};

export default ProductPage;
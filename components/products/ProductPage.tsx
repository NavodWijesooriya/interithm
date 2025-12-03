'use client';

import React, { useState } from 'react';
import { Zap, BarChart, Terminal, CheckCircle2, Star } from 'lucide-react';
import { PRODUCTS } from '../HomeProducts';

// --- Product Data (No change needed here for the request) ---
const AVAILABLE_PRODUCTS = [
  {
    id: 'freidea_pos',
    name: 'Freidea Pos',
    image: '/assets/products/freidea-pos-thumbnail.png',
    description: 'Real-time data engine for enterprise-level reporting and AI forecasting.',
    icon: <BarChart className="w-8 h-8 text-blue-500" />,
    rating: 4.8,
    features: ['Unlimited Projects', 'Custom Dashboards', 'API Access']
  },
  {
    id: 'payroll_expert',
    name: 'Payroll Expert',
    image: '/assets/products/payroll-expert-thumbnail.png', // added image
    description: 'Automated, lightning-fast deployment pipelines with instant rollback support.',
    icon: <Terminal className="w-8 h-8 text-purple-500" />,
    rating: 4.5,
    features: ['500 Build Minutes', 'Docker & K8s Support', 'Parallel Testing']
  },
  {
    id: 'aegis_guard',
    name: 'Sinhala KeyHelp',
    image: '/assets/products/sinhala-keyhelp-thumbnail.png', // added image
    description: 'Zero-trust security and compliance tooling for cloud infrastructure.',
    icon: <Zap className="w-8 h-8 text-emerald-500" />,
    rating: 4.9,
    features: ['DDOS Protection', 'Audit Logs', 'SOC2 Compliance']
  },
];

// --- ProductCard Component (Changes applied here) ---
const ProductCard = ({ product, onAddToCart }) => {
  // find matching meta (color/icon) from shared PRODUCTS
  const meta = PRODUCTS.find(p => p.id === product.id) || {};
  const color = meta.color || 'from-indigo-500 to-indigo-400';
  const metaIcon = meta.icon || product.icon;

  return (
    // Reduced padding: p-6 -> p-4
    <div className="bg-slate-900 border border-white/10 rounded-lg p-4 flex flex-col hover:border-indigo-500/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        {/* gradient icon badge to match Products page */}
        <div className={`inline-block p-2 rounded-lg bg-gradient-to-br ${color} mb-0 text-white shadow-lg`}>
          {metaIcon}
        </div>

        <div className="flex items-center text-yellow-400 text-xs">
          <Star className="w-3 h-3 fill-current mr-1" />
          <span>{product.rating}</span>
        </div>
      </div>

      {/* Render product image if available, Reduced height: h-40 -> h-32 */}
      {product.image && (
        <img
          src={product.image}
          alt={`${product.name} thumbnail`}
          className="w-full h-32 object-cover rounded-md mb-3"
        />
      )}

      {/* Reduced font size: text-xl -> text-lg */}
      <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
      <p className="text-slate-400 text-xs mb-3 flex-grow">{product.description}</p>

      <ul className="space-y-1 mb-4">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center text-slate-300 text-xs">
            <CheckCircle2 className="w-3 h-3 text-indigo-400 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Price/Details section, removed price calculation elements */}
      <div className="mt-auto pt-3 border-t border-white/5">
        <button
          onClick={() => onAddToCart(product)}
          className="w-full py-2 text-sm bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
        >
          View Details
        </button>
      </div>
    </div>
  );
};


const ProductPage = () => {

  const [cart, setCart] = useState([]);

  
  const handleAddToCart = (productToAdd) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productToAdd.id);

      if (existingItem) {
  
        return prevCart.map(item =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
      
        return [...prevCart, { ...productToAdd, quantity: 1 }];
      }
    });
  };


  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="py-16 bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Reduced font size: text-3xl md:text-4xl -> text-2xl md:text-3xl */}
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 p-4 m-4">Our Products For Customers Services</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm">Explore the tools that accelerate modern software teams.</p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {AVAILABLE_PRODUCTS.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <hr className="border-t border-white/10 mb-12" />


      </div>
    </div>
  );
};

export default ProductPage;
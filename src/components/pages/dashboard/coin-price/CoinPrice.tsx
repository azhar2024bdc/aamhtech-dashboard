
"use client"

import React, { useState } from 'react';

const CoinPrice = () => {
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    if (amount.trim()) {
      console.log('Setting coin price to:', amount);
      // Add your submission logic here
      alert(`Coin price set to ${amount} MAD`);
    }
  };

  const handleKeyPress = (e:React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Coin Price</h1>
        
        {/* Form */}
        <div className="space-y-6">
          {/* Label */}
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-3">
              Set amount per coin
            </label>
            
            {/* Input Field */}
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="0.00"
              step="0.01"
              min="0"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 placeholder-gray-400"
            />
          </div>
          
          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-emerald-400 hover:bg-emerald-500 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Set amount
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinPrice;

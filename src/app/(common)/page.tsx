/* eslint-disable @typescript-eslint/no-explicit-any */


"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HomePage = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [isYearPickerOpen, setIsYearPickerOpen] = useState(false);

  const yearlyData = {
    2024: {
      totalEarning: 1000,
      totalServiceProvider: 60,
      totalCustomer: 200,
      monthlyData: [
        { month: 'Jan', value: 45 },
        { month: 'Feb', value: 78 },
        { month: 'Mar', value: 82 },
        { month: 'Apr', value: 65 },
        { month: 'May', value: 55 },
        { month: 'Jun', value: 80 },
        { month: 'Jul', value: 90 },
        { month: 'Aug', value: 75 },
        { month: 'Sep', value: 85 },
        { month: 'Oct', value: 70 },
        { month: 'Nov', value: 60 },
        { month: 'Dec', value: 72 }
      ]
    },
    2023: {
      totalEarning: 850,
      totalServiceProvider: 45,
      totalCustomer: 175,
      monthlyData: [
        { month: 'Jan', value: 35 },
        { month: 'Feb', value: 65 },
        { month: 'Mar', value: 70 },
        { month: 'Apr', value: 55 },
        { month: 'May', value: 45 },
        { month: 'Jun', value: 68 },
        { month: 'Jul', value: 75 },
        { month: 'Aug', value: 62 },
        { month: 'Sep', value: 70 },
        { month: 'Oct', value: 58 },
        { month: 'Nov', value: 48 },
        { month: 'Dec', value: 60 }
      ]
    },
    2022: {
      totalEarning: 720,
      totalServiceProvider: 38,
      totalCustomer: 150,
      monthlyData: [
        { month: 'Jan', value: 28 },
        { month: 'Feb', value: 52 },
        { month: 'Mar', value: 58 },
        { month: 'Apr', value: 45 },
        { month: 'May', value: 38 },
        { month: 'Jun', value: 55 },
        { month: 'Jul', value: 62 },
        { month: 'Aug', value: 50 },
        { month: 'Sep', value: 58 },
        { month: 'Oct', value: 48 },
        { month: 'Nov', value: 40 },
        { month: 'Dec', value: 52 }
      ]
    }
  };

  const currentData = yearlyData[selectedYear as keyof typeof yearlyData];
  const availableYears = Object.keys(yearlyData).map(Number).sort((a, b) => b - a);

  const maxValue = Math.max(...currentData.monthlyData.map(item => item.value));

  const handleYearSelect = (year:number) => {
    setSelectedYear(year);
    setIsYearPickerOpen(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="">
        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Earning */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Total Earning</div>
            <div className="text-2xl font-bold text-gray-900">
              {currentData.totalEarning.toLocaleString()} MAD
            </div>
          </div>

          {/* Total Service Provider */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Total Service Provider</div>
            <div className="text-2xl font-bold text-gray-900">
              {currentData.totalServiceProvider}
            </div>
          </div>

          {/* Total Customer */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-sm text-gray-600 mb-2">Total Customer</div>
            <div className="text-2xl font-bold text-gray-900">
              {currentData.totalCustomer}
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Total Earning</h2>
            
            {/* Custom Year Picker */}
            <div className="relative">
              <button
                onClick={() => setIsYearPickerOpen(!isYearPickerOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <span className="text-sm font-medium">{selectedYear}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
              
              {isYearPickerOpen && (
                <div className="absolute right-0 mt-1 w-24 bg-white border border-gray-300 rounded-md shadow-lg z-20">
                  {availableYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => handleYearSelect(year)}
                      className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-50 first:rounded-t-md last:rounded-b-md ${
                        year === selectedYear ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mb-4">
            <span className="text-xs text-gray-500">
              Total over {currentData.totalEarning} MAD
            </span>
          </div>

          {/* Chart Container with Y-axis */}
          <div className="flex">
            {/* Y-axis labels */}
            <div className="flex flex-col justify-between h-64 text-xs text-gray-500 pr-4 py-2">
              <span>100</span>
              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>
            </div>
            
            {/* Bar Chart */}
            <div className="flex-1 overflow-x-auto">
              <div className="flex items-end justify-between h-64 px-4 min-w-full sm:min-w-[600px]">
   
                {currentData.monthlyData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center" style={{ minWidth: '40px' }}>
                    <div
                      className="bg-emerald-400 rounded-t-sm relative group cursor-pointer hover:bg-emerald-500 transition-colors"
                      style={{
                        width: '32px',
                        height: `${(item.value / maxValue) * 200}px`,
                        minHeight: '20px'
                      }}
                    >
                      {/* Tooltip on hover */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        {item.value} MAD
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 mt-2 font-medium">
                      {item.month}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close year picker */}
      {isYearPickerOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setIsYearPickerOpen(false)}
        />
      )}
    </div>
  );
};

export default HomePage;


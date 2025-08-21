"use client";

import Image from 'next/image';
import { useState } from 'react';

interface Purchase {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
  price: string;
  status: string;
  image: string;
}

const CustomerProfile = () => {
  const [activeTab, setActiveTab] = useState('Pending');

  // Mock purchase data organized by status
  const purchaseData: Record<string, Purchase[]> = {
    'Pending': [
      {
        id: 1,
        title: "Cleaning Service",
        date: "25 April 25, 2024, 4:30 PM",
        category: "Category: Cleaning",
        description: "Complete house cleaning with professional staff and eco-friendly products.",
        price: "25.00",
        status: "Pending",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=200&fit=crop"
      },
      {
        id: 2,
        title: "Cleaning Service", 
        date: "24 April 24, 2024, 2:15 PM",
        category: "Category: Cleaning",
        description: "Deep cleaning service for homes and offices with attention to detail.",
        price: "35.00",
        status: "Pending",
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=200&fit=crop"
      },
      {
        id: 3,
        title: "Cleaning Service",
        date: "23 April 23, 2024, 10:45 AM", 
        category: "Category: Cleaning",
        description: "Professional cleaning service with flexible scheduling options.",
        price: "45.00",
        status: "Pending",
        image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=300&h=200&fit=crop"
      }
    ],
    'In Progress': [
      {
        id: 4,
        title: "Cleaning Service",
        date: "22 April 22, 2024, 9:30 AM",
        category: "Category: Cleaning", 
        description: "Residential cleaning with organic and safe cleaning products.",
        price: "30.00",
        status: "In Progress",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop"
      },
      {
        id: 5,
        title: "Cleaning Service",
        date: "21 April 21, 2024, 3:20 PM",
        category: "Category: Cleaning",
        description: "Commercial cleaning service for businesses and retail spaces.",
        price: "50.00", 
        status: "In Progress",
        image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=300&h=200&fit=crop"
      },
      {
        id: 6,
        title: "Cleaning Service",
        date: "20 April 20, 2024, 1:10 PM",
        category: "Category: Cleaning",
        description: "Move-in/move-out cleaning service with comprehensive coverage.",
        price: "60.00",
        status: "In Progress", 
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=200&fit=crop"
      }
    ],
    'Complete': [
      {
        id: 7,
        title: "Cleaning Service",
        date: "19 April 19, 2024, 11:45 AM",
        category: "Category: Cleaning",
        description: "Weekly cleaning service with consistent quality and reliability.",
        price: "25.00",
        status: "Complete",
        image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=300&h=200&fit=crop"
      },
      {
        id: 8,
        title: "Cleaning Service", 
        date: "18 April 18, 2024, 4:55 PM",
        category: "Category: Cleaning",
        description: "Emergency cleaning service available 24/7 for urgent needs.",
        price: "40.00",
        status: "Complete",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop"
      },
      {
        id: 9,
        title: "Cleaning Service",
        date: "17 April 17, 2024, 8:30 AM",
        category: "Category: Cleaning", 
        description: "Specialized cleaning for post-construction and renovation cleanup.",
        price: "55.00",
        status: "Complete",
        image: "https://images.unsplash.com/photo-1581578017426-be0ba2e5eb27?w=300&h=200&fit=crop"
      }
    ],
    'Cancelled': [
      {
        id: 10,
        title: "Cleaning Service",
        date: "16 April 16, 2024, 2:20 PM",
        category: "Category: Cleaning",
        description: "Professional office cleaning with sanitization protocols.",
        price: "35.00",
        status: "Cancelled",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=200&fit=crop"
      }
    ]
  };

  const tabs = ['Pending', 'In Progress', 'Complete', 'Cancelled'];
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'text-yellow-600 bg-yellow-100';
      case 'In Progress': return 'text-blue-600 bg-blue-100';
      case 'Complete': return 'text-green-600 bg-green-100';
      case 'Cancelled': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const currentPurchases = purchaseData[activeTab as keyof typeof purchaseData] || [];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="">
        {/* Profile Section */}
        <div className="text-center mb-12">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-6">
            <Image
              width={150}
              height={150}
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              alt="Alex John"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
          
          {/* Profile Info */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Alex John</h1>
          <p className="text-gray-600 text-lg">Customer</p>
        </div>

        {/* Purchase History Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Purchase history</h2>
          
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-emerald-400 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          {/* Purchase Grid */}
          {currentPurchases.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPurchases.map((purchase) => (
                <div key={purchase.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  {/* Product Image */}
                  <div className="h-48 bg-gray-200">
                    <Image
                      width={300}    
                      height={200}
                      src={purchase.image}
                      alt={purchase.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Product Content */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 flex-1">{purchase.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(purchase.status)}`}>
                        {purchase.status}
                      </span>
                    </div>
                    
                    <p className="text-emerald-600 text-sm mb-1">{purchase.category}</p>
                    <p className="text-gray-500 text-xs mb-3">{purchase.date}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{purchase.description}</p>
                    
                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">${purchase.price}</span>
                      <button className="bg-emerald-400 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No {activeTab.toLowerCase()} orders</h3>
              <p className="text-gray-500">You don&lsquo;t have any {activeTab.toLowerCase()} orders at the moment.</p>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {tabs.map((tab) => (
            <div key={tab} className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {purchaseData[tab as keyof typeof purchaseData]?.length || 0}
              </div>
              <div className="text-sm text-gray-600">{tab}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const SellerProfile = () => {
  const router = useRouter();
  const products = [
    {
      id: 1,
      title: "Cleaning Service",
      category: "Category: Cleaning",
      description:
        "Complete house cleaning with professional staff and eco-friendly products.",
      price: "15.00",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      title: "Cleaning Service",
      category: "Category: Cleaning",
      description:
        "Deep cleaning service for homes and offices with attention to detail.",
      price: "25.00",
      image:
        "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      title: "Cleaning Service",
      category: "Category: Cleaning",
      description:
        "Professional cleaning service with flexible scheduling options.",
      price: "20.00",
      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=300&h=200&fit=crop",
    },
    {
      id: 4,
      title: "Cleaning Service",
      category: "Category: Cleaning",
      description:
        "Residential cleaning with organic and safe cleaning products.",
      price: "18.00",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop",
    },
    {
      id: 5,
      title: "Cleaning Service",
      category: "Category: Cleaning",
      description:
        "Commercial cleaning service for businesses and retail spaces.",
      price: "30.00",
      image:
        "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=300&h=200&fit=crop",
    },
    {
      id: 6,
      title: "Cleaning Service",
      category: "Category: Cleaning",
      description:
        "Move-in/move-out cleaning service with comprehensive coverage.",
      price: "35.00",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=300&h=200&fit=crop",
    },
    {
      id: 7,
      title: "Cleaning Service",
      category: "Category: Cleaning",
      description:
        "Weekly cleaning service with consistent quality and reliability.",
      price: "22.00",
      image:
        "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=300&h=200&fit=crop",
    },
    {
      id: 8,
      title: "Cleaning Service",
      category: "Category: Cleaning",
      description:
        "Emergency cleaning service available 24/7 for urgent needs.",
      price: "40.00",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
    },
    {
      id: 9,
      title: "Cleaning Service",
      category: "Category: Cleaning",
      description:
        "Specialized cleaning for post-construction and renovation cleanup.",
      price: "45.00",
      image:
        "https://images.unsplash.com/photo-1581578017426-be0ba2e5eb27?w=300&h=200&fit=crop",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6">
            <Image
              height={100}
              width={100}
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              alt="Alex John"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Alex John</h1>
          <p className="text-gray-600 text-lg">Seller</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Listed Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-gray-200">
                  <Image
                    height={100}
                    width={100}
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {product.title}
                  </h3>
                  <p className="text-emerald-600 text-sm mb-2">
                    {product.category}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => router.push(`/services/${product.id}`)}
                      className="bg-emerald-400 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;

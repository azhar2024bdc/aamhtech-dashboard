"use client";

import { Star, ArrowLeft } from "lucide-react";
import Image from "next/image";

const CleaningServiceDetail = () => {
  // Mock reviews data
  const reviews = [
    {
      id: 1,
      name: "Sarah Chen",
      rating: 5,
      date: "2 days ago",
      comment:
        "Absolutely fantastic service! The team was professional, thorough, and left my home spotless. Highly recommend for anyone looking for reliable cleaning.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      rating: 5,
      date: "1 week ago",
      comment:
        "Outstanding work! They arrived on time, used eco-friendly products, and paid attention to every detail. Will definitely book again.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Emily Johnson",
      rating: 4,
      date: "2 weeks ago",
      comment:
        "Great service overall. The cleaning was thorough and the staff was friendly. Only minor issue was they arrived 15 minutes late.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "David Kim",
      rating: 5,
      date: "3 weeks ago",
      comment:
        "Exceptional cleaning service! They transformed my apartment and were very respectful of my belongings. Excellent value for money.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      rating: 5,
      date: "1 month ago",
      comment:
        "Professional team with great attention to detail. They cleaned areas I didn't even think of. Very satisfied with the results.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "James Wilson",
      rating: 4,
      date: "1 month ago",
      comment:
        "Good cleaning service with reasonable prices. The team was efficient and completed the job within the estimated time frame.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 7,
      name: "Maria Garcia",
      rating: 5,
      date: "2 months ago",
      comment:
        "Amazing service! They went above and beyond my expectations. My house has never been cleaner. Highly professional team.",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 8,
      name: "Robert Brown",
      rating: 4,
      date: "2 months ago",
      comment:
        "Reliable cleaning service with consistent quality. The team is always punctual and does a thorough job every time.",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face",
    },
    {
      id: 9,
      name: "Amanda Davis",
      rating: 5,
      date: "3 months ago",
      comment:
        "Outstanding experience! The cleaning was meticulous and the staff was incredibly friendly and professional. Will use again!",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=40&h=40&fit=crop&crop=face",
    },
  ];

  const serviceFeatures = [
    "Deep Cleaning Kit",
    "Professional staff with 5+ years experience",
    "Eco-friendly cleaning products",
    "Flexible scheduling options",
    "100% satisfaction guarantee",
  ];

  const serviceVariants = [
    {
      title: "Basic Cleaning Kit",
      description: "Essential cleaning for small spaces up to 500 sq ft",
      price: "25",
      features: [
        "Basic cleaning supplies",
        "1-2 hours service",
        "Living room & kitchen",
      ],
    },
    {
      title: "Standard Cleaning Kit",
      description: "Complete cleaning for medium spaces up to 1000 sq ft",
      price: "45",
      features: [
        "Premium cleaning supplies",
        "3-4 hours service",
        "All rooms included",
        "Bathroom deep clean",
      ],
    },
    {
      title: "Premium Cleaning Kit",
      description: "Comprehensive cleaning for large spaces over 1000 sq ft",
      price: "75",
      features: [
        "Professional grade supplies",
        "5-6 hours service",
        "All rooms & extras",
        "Appliance cleaning",
        "Window cleaning",
      ],
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 bg-gray-900">
        <Image
          height={400}
          width={1200}
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=400&fit=crop"
          alt="Cleaning Service"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Cleaning Service</h1>
        </div>
        <button className="absolute top-4 left-4 text-white hover:text-gray-300 transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="mx-auto p-6">
        {/* Service Info */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Cleaning Service
            </h2>
            <div className="flex items-center gap-1">
              {renderStars(Math.round(averageRating))}
              <span className="text-sm text-gray-600 ml-1">
                ({reviews.length} reviews)
              </span>
            </div>
          </div>

          <div className="prose max-w-none text-gray-700 mb-6">
            <p>
              Experience professional cleaning services that transform your
              space into a spotless sanctuary. Our experienced team uses
              eco-friendly products and proven techniques to deliver exceptional
              results for homes and offices of all sizes.
            </p>
            <p>
              We understand that every space is unique, which is why we offer
              customizable cleaning solutions tailored to your specific needs.
              From regular maintenance cleaning to deep cleaning sessions, our
              services are designed to save you time while maintaining the
              highest standards of cleanliness.
            </p>
            <p>
              Our commitment to excellence means using only the best cleaning
              products and equipment, ensuring your space is not only clean but
              also safe for your family and pets. With flexible scheduling and
              competitive pricing, maintaining a clean environment has never
              been easier.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              What&#39;s Included:
            </h3>
            <ul className="space-y-2">
              {serviceFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Price: 50 MAD
          </h2>
          <p className="text-gray-600 mb-6">
            Select Variants of these services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceVariants.map((variant, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:border-emerald-400 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {variant.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {variant.description}
                </p>
                <div className="text-2xl font-bold text-emerald-600 mb-4">
                  ${variant.price}
                </div>
                <ul className="space-y-2 mb-6">
                  {variant.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-emerald-400 hover:bg-emerald-500 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Reviews</h2>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {renderStars(Math.round(averageRating))}
              </div>
              <span className="text-sm text-gray-600">
                {averageRating.toFixed(1)} out of 5 ({reviews.length} reviews)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    height={40}
                    width={40}
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{review.name}</h4>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-xs text-gray-500">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors">
              Load More Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningServiceDetail;

"use client";

import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

// Define type for errors state
interface CategoryErrors {
  category?: string;
}

// Simple validation function
const validateCategory = (value: string): CategoryErrors => {
  const errors: CategoryErrors = {};
  
  if (!value || value.trim().length === 0) {
    errors.category = "Category name is required";
  } else if (value.trim().length < 2) {
    errors.category = "Category name must be at least 2 characters";
  } else if (value.trim().length > 50) {
    errors.category = "Category name must be less than 50 characters";
  } else if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
    errors.category = "Category name can only contain letters and spaces";
  }
  
  return errors;
};

const AddCategory = () => {
  const [categories, setCategories] = useState([
    'Cleaning',
    'Health',
    'IT',
    'Sales',
    'Marketing'
  ]);
  
  const [categoryInput, setCategoryInput] = useState('');
  const [errors, setErrors] = useState<CategoryErrors>({});
  const [touched, setTouched] = useState(false);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCategoryInput(value);
    
    if (touched) {
      const validationErrors = validateCategory(value);
      setErrors(validationErrors);
    }
  };


  const handleBlur = () => {
    setTouched(true);
    const validationErrors = validateCategory(categoryInput);
    setErrors(validationErrors);
  };


  const removeCategory = (indexToRemove: number) => {
    setCategories(categories.filter((_, index) => index !== indexToRemove));
  };


  const handleAddCategory = () => {
    const validationErrors = validateCategory(categoryInput);
    setErrors(validationErrors);
    setTouched(true);

    if (Object.keys(validationErrors).length === 0) {
      const trimmedCategory = categoryInput.trim();
      

      if (categories.some(cat => cat.toLowerCase() === trimmedCategory.toLowerCase())) {
        setErrors({ category: "Category already exists" });
        return;
      }

      setCategories([...categories, trimmedCategory]);
      setCategoryInput('');
      setErrors({});
      setTouched(false);
      

      console.log('Category added:', trimmedCategory);
    }
  };


  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddCategory();
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Add Category</h1>
    
        </div>

   
        <div className="mb-8">
          <h2 className="text-sm font-medium text-gray-700 mb-4">All categories</h2>
          

          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 shadow-sm"
              >
                <span>{category}</span>
                <button
                  onClick={() => removeCategory(index)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>


        <div className="space-y-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Enter Category
            </label>
            

            <div className="space-y-2">
              <input
                type="text"
                id="category"
                value={categoryInput}
                onChange={handleInputChange}
                onBlur={handleBlur}
                onKeyPress={handleKeyPress}
                placeholder="Write category..."
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                  errors.category 
                    ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 focus:ring-emerald-500 focus:border-emerald-500'
                } text-gray-900 placeholder-gray-400`}
              />
              
       
              {errors.category && (
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                  {errors.category}
                </p>
              )}
            </div>
          </div>


          <button
            onClick={handleAddCategory}
            disabled={!!errors.category || !categoryInput.trim()}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              !!errors.category || !categoryInput.trim()
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-emerald-400 hover:bg-emerald-500 text-white focus:ring-emerald-500'
            }`}
          >
            <Plus className="w-4 h-4" />
            Add Category
          </button>
        </div>

        {/* Form Status */}
        {categories.length > 0 && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-700">
              Total categories: <span className="font-semibold">{categories.length}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCategory;

import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Tittle from "../components/Tittle";
import ProductIteam from "../components/ProductIteam";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState(products);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [showMobileSort, setShowMobileSort] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [activeFilters, setActiveFilters] = useState(0);

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handlePriceChange = (e, type) => {
    const value = parseInt(e.target.value);
    if (type === "min") {
      setPriceRange([value, priceRange[1]]);
    } else {
      setPriceRange([priceRange[0], value]);
    }
  };

  const clearFilters = () => {
    setCategory([]);
    setSubCategory([]);
    setPriceRange([0, 1000]);
    setSortType("relevant");
  };

  const applyFilter = () => {
    let productCopy = products.slice();
    let activeFilterCount = 0;

    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
      activeFilterCount += category.length;
    }
    
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
      activeFilterCount += subCategory.length;
    }

    // Price range filter
    productCopy = productCopy.filter(
      (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );
    
    if (priceRange[0] > 0 || priceRange[1] < 1000) {
      activeFilterCount += 1;
    }

    setActiveFilters(activeFilterCount);
    setFilterProduct(productCopy);
  };

  const sortProduct = () => {
    let fpcopy = [...filterProduct]; // Use a shallow copy

    switch (sortType) {
      case "low-high":
        setFilterProduct(fpcopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProduct(fpcopy.sort((a, b) => b.price - a.price));
        break;
      case "newest":
        setFilterProduct(fpcopy.sort((a, b) => b.date - a.date));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, priceRange, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Collection Header */}
      <div className="bg-white py-6 px-4 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Tittle text1={"SHOP"} text2={"COLLECTION"} />
            <div className="hidden md:flex items-center gap-1">
              <span className="text-gray-500 text-sm">Home</span>
              <span className="text-gray-500">›</span>
              <span className="text-gray-800 text-sm font-medium">Collection</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-between mt-4 gap-2">
            <p className="text-sm text-gray-600">{filterProduct.length} products found</p>
            
            {/* Mobile filter & sort buttons */}
            <div className="flex md:hidden w-full gap-2 mt-2">
              <button 
                onClick={() => setShowFilter(!showFilter)}
                className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 px-4 rounded-md text-sm font-medium"
              >
                <span>Filters</span>
                {activeFilters > 0 && (
                  <span className="bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {activeFilters}
                  </span>
                )}
                <img 
                  className={`h-3 transition-transform ${showFilter ? "rotate-180" : ""}`} 
                  src={assets.dropdown_icon} 
                  alt="filters" 
                />
              </button>
              
              <button 
                onClick={() => setShowMobileSort(!showMobileSort)}
                className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 px-4 rounded-md text-sm font-medium"
              >
                <span>Sort By</span>
                <img 
                  className={`h-3 transition-transform ${showMobileSort ? "rotate-180" : ""}`} 
                  src={assets.dropdown_icon} 
                  alt="sort" 
                />
              </button>
            </div>
            
            {/* Mobile sort dropdown */}
            {showMobileSort && (
              <div className="w-full md:hidden bg-white border border-gray-200 rounded-md p-3 shadow-md mt-1">
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input 
                      type="radio" 
                      name="mobileSort" 
                      checked={sortType === "relevant"} 
                      onChange={() => setSortType("relevant")}
                    />
                    <span>Relevance</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input 
                      type="radio" 
                      name="mobileSort" 
                      checked={sortType === "low-high"} 
                      onChange={() => setSortType("low-high")}
                    />
                    <span>Price: Low to High</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input 
                      type="radio" 
                      name="mobileSort" 
                      checked={sortType === "high-low"} 
                      onChange={() => setSortType("high-low")}
                    />
                    <span>Price: High to Low</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input 
                      type="radio" 
                      name="mobileSort" 
                      checked={sortType === "newest"} 
                      onChange={() => setSortType("newest")}
                    />
                    <span>Newest First</span>
                  </label>
                </div>
              </div>
            )}
            
            {/* Desktop Sort */}
            <div className="hidden md:block">
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="border border-gray-300 rounded-md text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="relevant">Sort by: Relevance</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter sidebar */}
          <div className={`md:w-64 bg-white rounded-lg shadow-sm overflow-hidden ${showFilter ? "block" : "hidden md:block"}`}>
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Filters</h3>
                {activeFilters > 0 && (
                  <button 
                    onClick={clearFilters}
                    className="text-indigo-600 text-sm hover:text-indigo-800 font-medium"
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>
            
            {/* Categories */}
            <div className="p-4 border-b border-gray-100">
              <h4 className="font-medium mb-3">Categories</h4>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="form-checkbox h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500" 
                    value={"Men"} 
                    checked={category.includes("Men")}
                    onChange={toggleCategory} 
                  />
                  <span>Men</span>
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="form-checkbox h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500" 
                    value={"Women"} 
                    checked={category.includes("Women")}
                    onChange={toggleCategory} 
                  />
                  <span>Women</span>
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="form-checkbox h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500" 
                    value={"Kids"} 
                    checked={category.includes("Kids")}
                    onChange={toggleCategory} 
                  />
                  <span>Kids</span>
                </label>
              </div>
            </div>
            
            {/* Type */}
            <div className="p-4 border-b border-gray-100">
              <h4 className="font-medium mb-3">Product Type</h4>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="form-checkbox h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500" 
                    value={"Topwear"} 
                    checked={subCategory.includes("Topwear")}
                    onChange={toggleSubCategory} 
                  />
                  <span>Topwear</span>
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="form-checkbox h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500" 
                    value={"Bottomwear"} 
                    checked={subCategory.includes("Bottomwear")}
                    onChange={toggleSubCategory} 
                  />
                  <span>Bottomwear</span>
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="form-checkbox h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500" 
                    value={"Winterwear"} 
                    checked={subCategory.includes("Winterwear")}
                    onChange={toggleSubCategory} 
                  />
                  <span>Winterwear</span>
                </label>
              </div>
            </div>
            
            {/* Price Range */}
            <div className="p-4">
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="flex justify-between mb-2">
                <span className="text-xs text-gray-500">${priceRange[0]}</span>
                <span className="text-xs text-gray-500">${priceRange[1]}</span>
              </div>
              <div className="mb-4 flex flex-col gap-4">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e, "min")}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e, "max")}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="number"
                  min="0"
                  max={priceRange[1]}
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e, "min")}
                  className="w-1/2 px-2 py-1 border border-gray-300 rounded-md text-sm"
                  placeholder="Min"
                />
                <input
                  type="number"
                  min={priceRange[0]}
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e, "max")}
                  className="w-1/2 px-2 py-1 border border-gray-300 rounded-md text-sm"
                  placeholder="Max"
                />
              </div>
            </div>
          </div>
          
          {/* Products grid */}
          <div className="flex-1">
            {filterProduct.length === 0 ? (
              <div className="flex flex-col items-center justify-center bg-white rounded-lg p-10 text-center">
                <img src={assets.search_icon} alt="No products" className="w-16 h-16 mb-4 opacity-30" />
                <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try changing your filters or search term</p>
                <button 
                  onClick={clearFilters}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filterProduct.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <ProductIteam
                      image={item.image}
                      name={item.name}
                      price={item.price}
                      id={item._id}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

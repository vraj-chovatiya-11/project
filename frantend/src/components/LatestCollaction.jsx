import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Tittle from './Tittle';
import ProductIteam from './ProductIteam';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const LatestCollection = () => {
  const { products, currancy } = useContext(ShopContext);
  const [latestCollection, setLatestCollection] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 4;

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestCollection(products.slice(0, 12));
    }
  }, [products]);

  const pageCount = Math.ceil(latestCollection.length / productsPerPage);
  
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev === pageCount - 1 ? 0 : prev + 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? pageCount - 1 : prev - 1));
  };

  const displayedProducts = latestCollection.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-3">
            <Tittle text1="LATEST" text2="COLLECTION" />
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-sm text-gray-500">
            Discover our newest arrivals and trending styles for this season
          </p>
        </div>
        
        <div className="relative">
          <div className="flex items-center justify-center">
            <button 
              className="absolute left-0 sm:left-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md text-gray-700 hover:bg-gray-50 transition-all duration-200 transform hover:-translate-x-1"
              onClick={handlePrevPage}
              aria-label="Previous page"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mx-auto px-10 sm:px-16 md:px-4">
              {displayedProducts.map((item) => (
                <div key={item._id} className="transform transition-transform duration-300 hover:-translate-y-2">
                  <ProductIteam
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    currancy={currancy}
                  />
                </div>  
              ))}
            </div>
            
            <button 
              className="absolute right-0 sm:right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md text-gray-700 hover:bg-gray-50 transition-all duration-200 transform hover:translate-x-1"
              onClick={handleNextPage}
              aria-label="Next page"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button 
              key={index}
              className={`mx-1 transition-all duration-300 focus:outline-none ${
                currentPage === index 
                  ? 'w-6 h-2 bg-gray-800 rounded-sm' 
                  : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
              }`}
              onClick={() => setCurrentPage(index)}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestCollection;
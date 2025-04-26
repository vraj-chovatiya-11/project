import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Tittle from './Tittle';
import ProductIteam from './ProductIteam';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import '../styles/latestCollection.css';

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
    <section className="latest-collection">
      <div className="container">
        <div className="collection-header">
          <Tittle text1="LATEST" text2="COLLECTION" />
          <p className="collection-description">
            Discover our newest arrivals and trending styles
          </p>
        </div>
        
        <div className="collection-showcase">
          <button 
            className="nav-button prev-button" 
            onClick={handlePrevPage}
            aria-label="Previous page"
          >
            <FiChevronLeft />
          </button>
          
          <div className="collection-grid">
            {displayedProducts.map((item) => (
              <ProductIteam
                key={item._id}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
                currancy={currancy}
              />
            ))}
          </div>
          
          <button 
            className="nav-button next-button" 
            onClick={handleNextPage}
            aria-label="Next page"
          >
            <FiChevronRight />
          </button>
        </div>
        
        <div className="pagination-dots">
          {Array.from({ length: pageCount }).map((_, index) => (
            <span 
              key={index} 
              className={`pagination-dot ${currentPage === index ? 'active' : ''}`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestCollection;
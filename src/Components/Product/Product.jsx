import React from 'react';
import './Product.css';
import { product_list } from '../../data';

const Product = ({ category }) => {
  return (
    <div>
      <div className="product">
        <div className="product-items">
          {product_list.map(({ name, image, price, category: productCategory }, index) => {
            if (category === "All" || category === productCategory) {
              return (
                <div key={index} className='item'>
                  <img src={image} alt={`${name}-img`} />
                  <div className="info">
                    <h4>{name}</h4>
                    <p>${price}</p>
                    <button>Shop</button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;

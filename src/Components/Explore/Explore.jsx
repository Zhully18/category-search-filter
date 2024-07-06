import React from 'react';
import './Explore.css';
import {product_category_list} from '../../data'

const Explore = ({ category, setCategory }) => {
  return (
    <div className="explore_menu">
      <h1>Explore our products</h1>
      <div className="explore_menu_list">
        {product_category_list.map((item, index) => {
          return (
            <div
              onClick={() => setCategory((prev) => (prev === item.product_name ? "All" : item.product_name))}
              key={index}
              className= "explore_menu_list_item">
              <div className={category === item.product_name ? "active" : ""}>
              <div className="name">
                <p>{item.product_name}</p>
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;

import React from 'react';

import './inventory-item.styles.scss';

const InventoryItem = ({ id, name, price, imageUrl }) => (
  <div className="inventory-item">
    <div 
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="inventory-footer">
      <span className="name">{ name }</span>
      <span className="price">{ price }</span>
    </div>
  </div>
);

export default InventoryItem;
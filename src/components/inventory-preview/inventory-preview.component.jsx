import React from 'react';

import InventoryItem from '../inventory-item/inventory-item.component';

import './inventory-preview.styles.scss';

const InventoryPreview = ({ title, items }) => (
  <div className="inventory-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <InventoryItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default InventoryPreview;
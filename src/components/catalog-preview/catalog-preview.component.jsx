import React from 'react';

import CatalogItem from '../catalog-item/catalog-item.component';

import './catalog-preview.styles.scss';

const CatalogPreview = ({ title, items }) => (
  <div className="catalog-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CatalogItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default CatalogPreview;
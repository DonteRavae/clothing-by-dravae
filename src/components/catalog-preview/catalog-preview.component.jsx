//React
import React from 'react';
import { withRouter } from 'react-router-dom';
//Components
import CatalogItem from '../catalog-item/catalog-item.component';
//Styles
import './catalog-preview.styles.scss';

const CatalogPreview = ({ title, items, match, history, routeName }) => (
  <div className="catalog-preview">
    <h1 className="title" onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CatalogItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default withRouter(CatalogPreview);
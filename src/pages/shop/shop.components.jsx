import React from 'react';
import { Route } from 'react-router-dom';

import CatalogOverview from '../../components/catalog-overview/catalog-overview.component';
import CatalogSectionPage from '../catalog-section/catalog-section.component';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CatalogOverview} />
    <Route path={`${match.path}/:catalogId`} component={CatalogSectionPage} />
  </div>
);


export default ShopPage;
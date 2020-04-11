import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import CatalogPreview from '../catalog-preview/catalog-preview.component';

import { selectCatalogForPreview } from '../../redux/shop/shop.selectors';

import './catalog-overview.styles.scss';

const CatalogOverview = ({ catalog }) => (
  <div className="catalog-overview">
        {
          catalog.map(({id, ...othercatalogProps}) => (
            <CatalogPreview key={id} {...othercatalogProps} />
          ))
        }
  </div>
);

const mapStateToProps = createStructuredSelector({
  catalog: selectCatalogForPreview
});

export default connect(mapStateToProps)(CatalogOverview);

import React from 'react';
import { connect } from 'react-redux';

import { selectCatalogSection } from '../../redux/shop/shop.selectors';

import CatalogItem from '../../components/catalog-item/catalog-item.component';

import './catalog-section.styles.scss';

const CatalogSectionPage = ({ catalogSection }) => {
  const { title, items } = catalogSection;
  return (
    <div className="catalog-section">
      <h2 className="title">{title}</h2>
      <div className="section-items">
        {items.map(section => <CatalogItem key={section.id} item={section} />)}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  catalogSection: selectCatalogSection(ownProps.match.params.catalogId)(state)
})

export default connect(mapStateToProps)(CatalogSectionPage);
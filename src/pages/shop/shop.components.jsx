import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CatalogOverview from '../../components/catalog-overview/catalog-overview.component';
import CatalogSectionPage from '../catalog-section/catalog-section.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { firestore, convertCatalogSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCatalog } from '../../redux/shop/shop.actions';

const CatalogOverviewWithSpinner = WithSpinner(CatalogOverview);
const CatalogSectionPageWithSpinner = WithSpinner(CatalogSectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCatalog } = this.props;
    const CatalogRef = firestore.collection('catalog');
    
    this.unsubscribeFromSnapshot = CatalogRef.get().then(snapshot => {
      const catalogMap = convertCatalogSnapshotToMap(snapshot);
      updateCatalog(catalogMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route 
          exact 
          path={`${match.path}`} 
          render={ props => (<CatalogOverviewWithSpinner isLoading={loading} {...props} />) } 
        />
        <Route 
          path={`${match.path}/:catalogId`} 
          render={ props => (<CatalogSectionPageWithSpinner isLoading={loading} {...props} />) } 
        />
      </div>
    );
  }
} 


const mapDispatchToProps = dispatch => ({
  updateCatalog: catalogMap => dispatch(updateCatalog(catalogMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
import React from 'react';

import SHOP_DATA from './shop.data';

import InventoryPreview from '../../components/inventory-preview/inventory-preview.component';

export default class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: SHOP_DATA
    }
  }

  render() {
    const {inventory} = this.state;
    return (
      <div className="shop-page">
        {
          inventory.map(({id, ...otherInventoryProps}) => (
            <InventoryPreview key={id} {...otherInventoryProps} />
          ))
        }
      </div>
    );
  }
}
import React from 'react';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.action';

import './inventory-item.styles.scss';

const InventoryItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  
  return (
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
    <CustomButton onClick={() => addItem(item)} inverted>Add To Cart</CustomButton>
  </div>
)};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null, 
  mapDispatchToProps
)(InventoryItem);
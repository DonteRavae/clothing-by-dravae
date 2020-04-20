import ShopActionTypes from './shop.types';

export const updateCatalog = (catalogMap) => ({
  type: ShopActionTypes.UPDATE_CATALOG,
  payload: catalogMap 
});
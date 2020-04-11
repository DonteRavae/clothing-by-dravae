import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCatalog = createSelector(
  [selectShop],
  shop => shop.catalog
);

export const selectCatalogForPreview = createSelector(
  [selectCatalog],
  catalog => Object.keys(catalog).map(key => catalog[key])
)

export const selectCatalogSection = catalogUrlParam => createSelector(
  [selectCatalog],
  catalog => catalog[catalogUrlParam]
)
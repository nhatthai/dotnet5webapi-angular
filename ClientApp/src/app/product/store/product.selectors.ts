import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductState, ProductAdapter } from './product.states';

export const {
  selectAll: _selectAllProduct,
  selectTotal: _selectProductTotal
} = ProductAdapter.getSelectors();

export const selectProductState = createFeatureSelector<ProductState>('Products');

export const selectAllProduct = createSelector(
  selectProductState,
  _selectAllProduct
);

export const selectProductError = createSelector(
  selectProductState,
  (state: ProductState): boolean => state.error
);

export const selectProductLoading = createSelector(
  selectProductState,
  (state: ProductState): boolean => state.loading
);


export const selectProductTotal = createSelector(
  selectProductState,
  (state: ProductState): number => state.total
);
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Product } from '../core/models/product';

export interface ProductState extends EntityState<Product> {
  error: boolean;
  loading: boolean;
  total: number;
}

export const ProductAdapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product: Product) => product.productId
});

export const initialProductState: ProductState = ProductAdapter.getInitialState({
  error: false,
  loading: true,
  total: 0,
});

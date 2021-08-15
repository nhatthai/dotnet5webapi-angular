import { initialProductState, ProductState, ProductAdapter } from './product.states';
import { ProductAction, ProductActionTypes } from './product.actions';

export function productReducer(state = initialProductState, action: ProductAction): ProductState {
  switch (action.type) {

    case ProductActionTypes.Loading: {
      return { ...state, loading: true };
    }

    case ProductActionTypes.LoadSuccess: {
      return ProductAdapter.setAll(action.payload.results, {
        ...state,
        error: false,
        loading: false,
        total: action.payload.total
      });
    }

    case ProductActionTypes.LoadFailure: {
      return ProductAdapter.removeAll({
        ...state,
        error: true,
        loading: false,
        total: 0
      });
    }

    case ProductActionTypes.CreateProduct: {
      return ProductAdapter.addOne(action.product, {
        ...state,
        loading: false,
        product: action.product
      });
    }

    case ProductActionTypes.UpdateProduct: {
      return ProductAdapter.updateOne({ id: action.product.productId, changes: action.product }, {
        ...state,
        loading: false,
        product: action.product
      });
    }

    case ProductActionTypes.DeleteProduct: {
      return ProductAdapter.removeOne(action.productId, {
        ...state,
        error: false,
        loading: false
      });
    }

    default:
      return state;
  }
}
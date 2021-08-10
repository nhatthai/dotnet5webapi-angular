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

    default:
      return state;
  }
}
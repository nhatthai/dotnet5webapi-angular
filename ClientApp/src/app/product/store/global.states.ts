import { ProductState, initialProductState } from './product.states';

export interface GlobalState {
  cusip: ProductState
}

export const initialGlobalState: GlobalState = {
  cusip: initialProductState
};
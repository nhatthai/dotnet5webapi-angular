import { Action } from '@ngrx/store';
import { ProductParams } from '../core/models/product-params';
import { ProductResponse } from '../core/models/product-response';

export enum ProductActionTypes {
  Loading = '[Product] Loading',
  LoadSuccess = '[Product] LoadSuccess',
  LoadFailure = '[Product] LoadFailure'
}

export class ProductLoadAction implements Action {
  public readonly type = ProductActionTypes.Loading;
  constructor(public payload: ProductParams) {}
}

export class ProductLoadSuccessAction implements Action {
  public readonly type = ProductActionTypes.LoadSuccess;
  constructor(public payload: ProductResponse) {}
}

export class ProductLoadFailAction implements Action {
  public readonly type = ProductActionTypes.LoadFailure;
  constructor(public error: any) {}
}

export type ProductAction = ProductLoadAction | ProductLoadSuccessAction | ProductLoadFailAction;
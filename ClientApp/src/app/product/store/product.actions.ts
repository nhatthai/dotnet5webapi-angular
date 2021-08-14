import { Action } from '@ngrx/store';
import { ProductParams } from '../core/models/product-params';
import { ProductResponse, CommonResponse } from '../core/models/product-response';

export enum ProductActionTypes {
  Loading = '[Product] Loading',
  LoadSuccess = '[Product] LoadSuccess',
  LoadFailure = '[Product] LoadFailure',
  UpdateProduct = '[Product] UpdateProduct',
  DeleteProduct = '[Product] Delete Product',
  CreateProduct = '[Product] Create Product',
  CommonLoadSuccess = 'Common LoadSuccess'
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

export class ProductUpdateAction implements Action {
  public readonly type = ProductActionTypes.UpdateProduct;
  constructor(public product: any) {}
}

export class ProductDeleteAction implements Action {
  public readonly type = ProductActionTypes.DeleteProduct;
  constructor(public productId: string) {}
}

export class ProductCreateAction implements Action {
  public readonly type = ProductActionTypes.CreateProduct;
  constructor(public product: any) {}
}

export class CommonLoadSuccessAction implements Action {
  public readonly type = ProductActionTypes.CommonLoadSuccess;
  constructor(public payload: CommonResponse) {}
}

export type ProductAction = ProductLoadAction | ProductLoadSuccessAction | ProductLoadFailAction
  | ProductUpdateAction | ProductDeleteAction | ProductCreateAction | CommonLoadSuccessAction;
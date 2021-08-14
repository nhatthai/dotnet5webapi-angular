import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import {
  ProductActionTypes, ProductLoadAction,
  ProductLoadFailAction, ProductUpdateAction,
  ProductDeleteAction, ProductCreateAction,
  ProductLoadSuccessAction, CommonLoadSuccessAction
} from './product.actions';
import { ProductService } from "../services/product.service";
import { ProductParams } from '../core/models/product-params';
import { ProductResponse, CommonResponse} from '../core/models/product-response';
import { Product } from '../core/models/product';

@Injectable()
export class ProductEffects {
  constructor(private service: ProductService, private actions$: Actions) { }

  @Effect()
  public loadProducts$ = this.actions$
    .pipe(ofType<ProductLoadAction>(ProductActionTypes.Loading),
      map(action => action.payload),
      switchMap((params: ProductParams) =>
        this.service.getProducts(params).pipe(
          map((response: ProductResponse) => new ProductLoadSuccessAction(response)),
          catchError((error) => of(new ProductLoadFailAction(error)))
        )
      )
    );

  @Effect()
  public deleteProduct$ = this.actions$
    .pipe(ofType<ProductDeleteAction>(ProductActionTypes.DeleteProduct),
      map(action => action.productId),
      switchMap((productId: string) =>
        this.service.deleteProduct(productId).pipe(
          map((response: CommonResponse) => new CommonLoadSuccessAction(response)),
          catchError((error) => of(new ProductLoadFailAction(error)))
        )
      )
  );

  @Effect()
  public createProduct$ = this.actions$
    .pipe(ofType<ProductCreateAction>(ProductActionTypes.CreateProduct),
      map(action => action.product),
      switchMap((product: Product) =>
        this.service.createProduct(product).pipe(
          //map((response: ProductResponse) => new ProductLoadSuccessAction(response)),
          catchError((error) => of(new ProductLoadFailAction(error)))
        )
      )
  );

  @Effect()
  public updateProduct$ = this.actions$
    .pipe(ofType<ProductUpdateAction>(ProductActionTypes.UpdateProduct),
      map(action => action.product),
      switchMap((product: Product) =>
        this.service.updateProduct(product).pipe(
          map((response: ProductResponse) => new ProductLoadSuccessAction(response)),
          catchError((error) => of(new ProductLoadFailAction(error)))
        )
      )
  );
}
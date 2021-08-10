import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ProductActionTypes, ProductLoadAction, ProductLoadSuccessAction, ProductLoadFailAction } from './product.actions';
import { ProductService } from "../services/product.service";
import { ProductParams } from '../core/models/product-params';
import { ProductResponse } from '../core/models/product-response';

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
}
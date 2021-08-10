
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppMaterialModule } from '../material.module';
import { ProductTableComponent } from './component/product-table/product-table.component';
import { productReducer } from './store/product.reducers';
import { ProductEffects } from './store/product.effects';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    ProductTableComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    FormsModule,
    StoreModule.forFeature('Products', productReducer),
    EffectsModule.forFeature([ProductEffects])
  ],
  providers: [ProductService],
  bootstrap: [],
  exports: [ProductTableComponent]
})
export class ProductModule { }
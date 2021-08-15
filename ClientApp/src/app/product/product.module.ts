
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppMaterialModule } from '../material.module';
import { ProductTableComponent } from './component/product-table/product-table.component';
import { productReducer } from './store/product.reducers';
import { ProductEffects } from './store/product.effects';
import { ProductService } from './services/product.service';
import { ProductDialogComponent } from './component/product-dialog/product-dialog.component';

@NgModule({
  declarations: [
    ProductDialogComponent,
    ProductTableComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('Products', productReducer),
    EffectsModule.forFeature([ProductEffects])
  ],
  providers: [ProductService],
  bootstrap: [],
  exports: [ProductTableComponent]
})
export class ProductModule { }
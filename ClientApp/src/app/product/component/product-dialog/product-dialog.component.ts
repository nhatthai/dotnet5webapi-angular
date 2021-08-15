import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Product } from '../../core/models/product';
import { ProductUpdateAction, ProductCreateAction } from '../../store/product.actions';
import { Store } from '@ngrx/store';
import { GlobalState } from '../../store/global.states';


@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css'],
  providers: [{provide: MatFormFieldControl, useExisting: ProductDialogComponent}]
})
export class ProductDialogComponent implements OnInit {

  form: FormGroup;
  productName = new FormControl('', [Validators.required]);
  code = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required]);
  quantity = new FormControl('', [Validators.required]);

  constructor(
    public store: Store<GlobalState>,
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private formBuilder: FormBuilder) {
      this.form = this.createForm(data);
    }

  ngOnInit() {
    this.form = this.formBuilder.group({
      productId: [this.data?.productId],
      productName:  [this.data?.productName, [Validators.required]],
      code: [this.data?.code, [Validators.required]],
      price:  [this.data?.price, [Validators.required]],
      quantity:  [this.data?.quantity, [Validators.required]],
    });
  }

  private createForm(data: any): FormGroup {
		return new FormGroup({
      productId: new FormControl(),
			productName: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.pattern("[1-9]\d{9}")]),
      quantity: new FormControl('', [Validators.required, Validators.pattern("[1-9]\d{9}")])
		});
	}

  submitForm() {
    var message = this.getErrorMessage();

    if (message === '')
    {
      // create product
      if (this.form?.get('productId')?.value === null) {
        this.store.dispatch(new ProductCreateAction(this.form?.value));
      }
      // update product
      else {
        this.store.dispatch(new ProductUpdateAction(this.form?.value));
      }
      this.dialogRef.close();
    }
  }

  getErrorMessage() {
    let form = this.form;

    if (form.get('productName')?.hasError('required')) {
      return 'You must enter a value';
    }

    if (form.get('code')?.hasError('required')) {
      return 'You must enter a value';
    }

    if (form.get('price')?.hasError('required')) {
      return 'You must enter a value';
    }

    if (form.get('quantity')?.hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }
}

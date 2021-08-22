import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { _isNumberValue } from '@angular/cdk/coercion';
import { Store } from '@ngrx/store';
import { Product } from '../../core/models/product';
import { ProductUpdateAction, ProductCreateAction } from '../../store/product.actions';
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
      price:  [this.data?.price, [Validators.required, Validators.pattern("[1-9]\\d{9}")]],
      quantity:  [this.data?.quantity, [Validators.required, Validators.pattern("[1-9]\\d{9}")]],
    });
  }

  private createForm(data: any): FormGroup {
		return new FormGroup({
      productId: new FormControl(),
			productName: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.pattern("[1-9]\\d{9}")]),
      quantity: new FormControl('', [Validators.required, Validators.pattern("[1-9]\\d{9}")])
		});
	}

  submitForm() {
    var message = this.validateFrom();
    if (message === '') {
      if(this.form?.get('productId')?.value === null) {
        this.store.dispatch(new ProductCreateAction(this.form?.value));
      } else {
        this.store.dispatch(new ProductUpdateAction(this.form?.value));
      }
      this.dialogRef.close();
    }
  }

  validateFrom() {
    var errorMessage = this.getErrorMessage('producName') + this.getErrorMessage('code') +
      this.getErrorMessage('price') + this.getErrorMessage('quality');

    return errorMessage;
  }

  getErrorMessage(fieldName: string) {
    let form = this.form;

    if (form.get(fieldName)?.hasError('required')) {
      return 'You must enter a value';
    }

    if(fieldName == 'price') {
      if (!_isNumberValue(form.get('price')?.value)) {
        return 'Price should be number';
      }
      // todo: remove mat-form-field-invalid
    }

    if(fieldName == 'quantity') {
      if(!_isNumberValue(form.get('quantity')?.value)) {
        return 'Quantity should be number';
      }
    }

    return '';
  }
}

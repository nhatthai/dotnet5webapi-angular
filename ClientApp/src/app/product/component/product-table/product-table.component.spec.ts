import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthModule } from '@auth0/auth0-angular';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatSortModule } from '@angular/material/sort';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { environment as env } from '../../../../environments/environment';
import { ProductTableComponent } from './product-table.component';


describe('ProductTableComponent', () => {
  let component: ProductTableComponent;
  let fixture: ComponentFixture<ProductTableComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductTableComponent],
      providers: [Store],
      imports: [
        MatSortModule,
        StoreModule.forRoot({}),
        AuthModule.forRoot({
          domain: env.auth.domain,
          clientId: env.auth.clientId,
          redirectUri: env.auth.redirectUri
        }),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from '../core/models/product';
import { ProductParams } from '../core/models/product-params';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseAPIURL: string;

  constructor(public httpClient: HttpClient) {
    this.baseAPIURL = env.baseAPIUrl;
  }

  public getProducts(params: ProductParams): Observable<any> {
    let token = localStorage.getItem('access_token');
    let httpHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    let httpParams = new HttpParams()
      .set('PageIndex', params.pageIndex)
      .set('PageSize', params.pageSize)
      .set('Search', params.search)
      .set('SortDirection', params.sortDirection)
      .set('SortField', params.sortField);

    return this.httpClient.get<Product[]>(`${this.baseAPIURL}/product`, {params: httpParams, headers: httpHeaders}).pipe();
  }

  public createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.baseAPIURL}/product`, product).pipe();
  }

  public updateProduct(product: Product): Observable<any> {
    return this.httpClient.put<Product>(`${this.baseAPIURL}/product/${product.productId}`, product).pipe();
  }

  public deleteProduct(productId:string): Observable<any> {
    return this.httpClient.delete(`${this.baseAPIURL}/product/${productId}`).pipe();
  }
}
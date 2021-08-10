import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
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
    var httpParams = new HttpParams()
      .set('PageIndex', params.pageIndex)
      .set('PageSize', params.pageSize)
      .set('Search', params.search)
      .set('SortDirection', params.sortDirection)
      .set('SortField', params.sortField);

    return this.httpClient.get<Product[]>(`${this.baseAPIURL}/product`, {params: httpParams}).pipe();
  }
}

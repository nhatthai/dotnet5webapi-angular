import { Product } from './product';

export interface ProductResponse {
  total: number,
  results: Product[]
}

export interface CommonResponse {
  message: string,
  code: string
}

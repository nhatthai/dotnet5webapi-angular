import { Product } from './product';

export interface ProductResponse {
  total: number,
  results: Product[]
}
export interface ProductParams {
  search: string;
  sortDirection: 'asc' | 'desc' | '';
  sortField: string | '';
  pageIndex: number;
  pageSize: number;
}

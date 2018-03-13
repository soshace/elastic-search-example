export interface CustomerEntry {
  id: number,
  'account_name': string,
  'phone': string,
  'city': string,
  'country': string,
  'email': string,
  'address': string,
  'secondary_address': string,
  'firstname': string,
  'lastname': string
}

export interface PaginatedEntries<T> {
  total: number;
  data: T;
}

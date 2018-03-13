import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CustomerEntry, PaginatedEntries} from '../../../types/api';
import {ConstantsService} from '../services/constants.service';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient, private constants: ConstantsService) {
  }

  public getCustomers(page: number, limit: number, searchQuery: string) {
    return new Promise<PaginatedEntries<CustomerEntry[]>>(resolve => this.http.get<CustomerEntry[]>(`${this.constants.apiService}/api/customers?page=${page}&limit=${limit}&search=${searchQuery}`,
      {
        observe: 'response'
      }
    ).subscribe(
      res => resolve({
        total: +res.headers.get(this.constants.queryTotalCountParameter),
        data: res.body
      })
    ))
  }
}

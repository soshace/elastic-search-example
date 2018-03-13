import {Injectable} from '@angular/core';

@Injectable()
export class ConstantsService {
  public apiService = 'http://localhost:8001';
  public totalEntries = 50;
  public queryTotalCountParameter = 'x-total-count';
}

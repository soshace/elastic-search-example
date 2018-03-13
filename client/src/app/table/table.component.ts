import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service'
import {CustomerEntry} from '../../../types/api';
import {ConstantsService} from '../services/constants.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  private retrieveData() {
    this.api.getCustomers(this.currentPage - 1, this.itemsPerPage, this.searchQuery)
      .then(customers => {
        this.customers = customers.data;
        this.totalCount = customers.total;
      });
  }

  private setGridSettings() {
    this.itemsPerPage = this.constants.totalEntries;
  }

  constructor(private api: ApiService, private constants: ConstantsService) {
  }

  public ngOnInit() {
    this.setGridSettings();

    this.retrieveData();
  }

  public switchPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.retrieveData();
  }

  public executeSearch() {
    this.retrieveData();
  }

  public currentPage = 1;
  public totalCount = 0;
  public itemsPerPage = 0;
  public searchQuery = '';
  public customers = [] as CustomerEntry[];
}

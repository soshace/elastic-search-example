import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TableComponent} from './table/table.component';
import {ApiService} from './services/api.service';
import {ConstantsService} from './services/constants.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [
    ApiService,
    ConstantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

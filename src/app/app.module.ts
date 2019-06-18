import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxDatatableModule, BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

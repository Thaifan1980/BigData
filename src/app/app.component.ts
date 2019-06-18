import { Component } from '@angular/core';
import { companyData } from '../assets/data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'BigData';
  public data = {
    rows: [],
    columns: []
  }

  constructor(){
    this.initData();
  }

  public initData() {
    this.data.rows = [...companyData.rows];
    this.data.columns = [...companyData.columns];
  }
}

import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  columnDefs: ColDef[] = [
    { field: 'Id' },
    { field: 'Name' },
    { field: 'Years Of Experience' },
    { field: 'Tech Stack'},
    { field: 'Company'},
    { field: 'Status'},
    { field: 'Actions'}
  ]; 

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  constructor() { }

  ngOnInit() {
  }

}

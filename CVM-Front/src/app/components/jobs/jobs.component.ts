import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Client,Jobs } from '../../Services/NSWAG';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  providers: [Client]
})
export class JobsComponent implements OnInit {

  columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'name' },
    { field: 'yearsOfExperience' },
    { field: 'status'}
  ]; 
  rowData: Jobs[] = [];
  constructor(private readonly _client: Client) { }

  ngOnInit() {
    this.getAllJobs();
  }

  getAllJobs(){
    this._client.jobsAll().subscribe(jobs =>
      this.rowData = jobs
    );
  }
}

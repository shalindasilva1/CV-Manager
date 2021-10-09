import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Client,Jobs } from '../../Services/NSWAG';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  providers: [Client]
})
export class JobsComponent implements OnInit {

  public dataSource: MatTableDataSource<Jobs> = new MatTableDataSource<Jobs>();
  displayedColumns: string[] = ['id', 'name', 'yearsOfExperience', 'status'];
  constructor(private readonly _client: Client) { }

  ngOnInit() {
    this.getAllJobs();
  }

  getAllJobs(){
    this._client.jobsAll().subscribe(jobs =>
      this.dataSource = new MatTableDataSource<Jobs>(jobs)
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

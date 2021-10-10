import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnDefinition } from 'src/app/shared/ColumnDefinition';
import { Client, Jobs, Companies, Skills } from '../../Services/NSWAG';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  providers: [Client],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])]
})
export class JobsComponent implements OnInit {

  public dataSource: MatTableDataSource<Jobs> = new MatTableDataSource<Jobs>();
  public displayedColumnsObject: ColumnDefinition[] = [
    { id: 'id', name: 'ID' },
    { id: 'name', name: 'Name' },
    { id: 'yearsOfExperience', name: 'Years Of Experience' },
    { id: 'status', name: 'Status' }];
  public displayedColumns: string[] = this.displayedColumnsObject.map(c => c.id!).concat(['action']);
  public company: Companies = new Companies();
  public techStack: Skills[] = [];

  constructor(private readonly _client: Client) { }

  ngOnInit() {
    this.getAllJobs();
  }

  getAllJobs() {
    this._client.jobsAll().subscribe(jobs =>
      this.dataSource = new MatTableDataSource<Jobs>(jobs)
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  toggleRow(element: Jobs) {
    if (element.id && !element.expanded) {
      let Id = element.id;
      this._client.jobsGET(Id).subscribe(detailedJob => {
        this.company = detailedJob.company!
        this.techStack = detailedJob.techStack!
      });
    }
    element.expanded = !element.expanded
  }
}

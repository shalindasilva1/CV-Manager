import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  providers: [],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])]
})
export class JobsComponent implements OnInit {
  dataSource: any[] = [];
  public displayedColumns: string[] = ['id', 'designation', 'description', 'salaryRatio', 'employment', 'location', 'action'];
  //jobs!: import("d:/Repo/CV-Manager/CVM-Front/src/app/Services/SWAGGER/generated-services/index").JobDtoListResult;
  constructor(
    public dialog: MatDialog,
    //private jobsService: JobsService
  ) { }

  ngOnInit() {
    this.getAllJobs();
  }

  getAllJobs() {
    // this.jobsService.apiJobsGet().subscribe(
    //   (data) => {
    //     this.jobs = data; // Assign the fetched jobs to the local array
    //   },
    //   (error) => {
    //     console.error('Error fetching jobs:', error);
    //   }
    // );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  toggleRow() {
   
  }

  deleteJob() {
    
  }

  openAddJobForm() {
    
  }
}

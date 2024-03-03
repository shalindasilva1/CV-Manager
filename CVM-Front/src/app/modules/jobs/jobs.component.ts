import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobDto, JobDtoListResult, JobsService } from 'src/app/Services/SWAGGER';


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
  public dataSource: JobDto[] | null | undefined;
  public displayedColumns: string[] = ['designation', 'description', 'salaryRatio', 'employment', 'location', 'action'];
  public jobs!: JobDtoListResult
  constructor(
    public dialog: MatDialog,
    private jobsService: JobsService
  ) { }

  ngOnInit() {
    this.getAllJobs();
  }

  getAllJobs() {
    this.jobsService.apiJobsGet().subscribe(
      (data) => {
        if (data && data.data) { // Check if data and data.data are not null or undefined
          this.jobs = data;
          this.dataSource = this.jobs.data;
        }
      },
      (error) => {
        console.error('Error fetching jobs:', error);
      }
    );
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

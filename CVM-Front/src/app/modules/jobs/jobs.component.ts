import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobDto, JobDtoListResult, JobsService } from 'src/app/Services/SWAGGER';
import { JobAddComponent } from './job-add/job-add.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class JobsComponent implements OnInit {

  dataSource: JobDto[] = [];
  displayedColumns: string[] = ['designation', 'description', 'salaryRatio', 'employment', 'location', 'action'];
  jobs: JobDtoListResult | undefined;

  constructor(
    public dialog: MatDialog,
    private jobsService: JobsService
  ) { }

  ngOnInit() {
    this.getAllJobs();
  }

  async getAllJobs() {
    try {
      const data = await this.jobsService.apiJobsGet().toPromise();
      if (data && data.data) {
        this.jobs = data;
        this.dataSource = data.data.map((item: any) => item as JobDto);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  openAddForm() {
    const dialogRef = this.dialog.open(JobAddComponent, {
      width: '500px',
      data: {} 
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllJobs();
    });
  }

  async deleteJob(jobId: number) {
    try {
      await this.jobsService.apiJobsIdDelete(jobId).toPromise();

      this.dataSource = this.dataSource.filter(job => job.id !== jobId);

      console.log('Job deleted successfully');
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  }

}

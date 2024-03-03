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
    // Open the dialog to add a new job
    const dialogRef = this.dialog.open(JobAddComponent, {
      width: '500px', // You can adjust the width as per your requirement
      data: {} // You can pass data to the dialog if needed
    });

    // Subscribe to the dialog's afterClosed event to handle the result
    dialogRef.afterClosed().subscribe(result => {
      // Handle the result if needed
    });
  }
}

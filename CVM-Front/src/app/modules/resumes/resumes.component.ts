import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CvDto, CvsService, JobDtoListResult, JobsService } from 'src/app/Services/SWAGGER';
import { TableColumn } from '../shared/mati-table/interfaces/TableColumn';
import { MatDialog } from '@angular/material/dialog';
import { ResumesAddComponent } from './resumes-add/resumes-add.component';

@Component({
  selector: 'app-resumes',
  templateUrl: './resumes.component.html',
  styleUrls: ['./resumes.component.scss']
})
export class ResumesComponent implements OnInit {
  cvs: JobDtoListResult | undefined;
  dataSource!: MatTableDataSource<CvDto>;
  //displayedColumns: string[] = ['fileName','action'];
  displayedColumns: TableColumn[] = [
    { name: 'id', alias: 'ID' },
    { name: 'fileName', alias: 'CV Name' },
    { name: 'contentType', alias: 'Content Type' },
    { name: 'originalFileName', alias: 'File Name' },
    { name: 'action', alias: 'Actions' }
  ]
  constructor(
    private dialog: MatDialog,
    private cvsService: CvsService
    ) { }

  ngOnInit() {
    this.getAllCVs();
  }

  async getAllCVs() {
    try {
      const data = await this.cvsService.apiCvsGet().toPromise();
      if (data && data.data) {
        this.cvs = data;
        this.dataSource = new MatTableDataSource<CvDto>(data.data);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  }

  updateEvent(cv: CvDto) {
    // const dialogRef = this.dialog.open(JobAddComponent, {
    //   width: '500px',
    //   data: { jobData: job }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.getAllJobs();
    // });
  }

  openAddForm() {
    const dialogRef = this.dialog.open(ResumesAddComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllCVs();
    });
  }
  

  async deleteEvent(cv: CvDto) {
    try {
      var cvId = cv.id!;
      await this.cvsService.apiCvsIdDelete(cvId).toPromise();

      this.dataSource.data = this.dataSource.data.filter(job => job.id !== cvId);

      console.log('Job deleted successfully');
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  }
}

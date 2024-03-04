import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobDto, JobsService, Location, NatureOfEmployment } from 'src/app/Services/SWAGGER';
import { UserManagementService } from 'src/app/Services/user-management/user-management.service';

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.scss']
})
export class JobAddComponent implements OnInit {
  public enumKeys: string[] = [];
  public addJobForm: any;
  public employmentTypes: NatureOfEmployment[] = Object.values(NatureOfEmployment);
  public locations: Location[] = Object.values(Location);
  public loginUser: any;
  public loading: boolean = false;
  public successMessage: string | null = null;

  constructor(
    private dialogRef: MatDialogRef<JobAddComponent>,
    private jobsService: JobsService,
    private formBuilder: UntypedFormBuilder,
    private userManagementService: UserManagementService,
    @Inject(MAT_DIALOG_DATA) public data: { jobData: JobDto }
  ) {}

  ngOnInit() {
    this.addJobForm = this.formBuilder.group({
      designation: '',
      description: '',
      startSalary: 0,
      endSalary: 0,
      natureOfEmployment: NatureOfEmployment,
      location: Location
    });

    if (this.data && this.data.jobData) {
      const job = this.data.jobData;
      this.addJobForm.patchValue({
        designation: job.designation,
        description: job.description,
        startSalary: job.startSalary,
        endSalary: job.endSalary,
        natureOfEmployment: job.employment,
        location: job.location
      });
    }
    this.loginUser = this.userManagementService.getUser();
  }

  async addJob() {
    try {
      this.loading = true; 

      const jobDto: JobDto = {
        designation: this.addJobForm.get('designation').value,
        description: this.addJobForm.get('description').value,
        startSalary: this.addJobForm.get('startSalary').value,
        endSalary: this.addJobForm.get('endSalary').value,
        employment: this.addJobForm.get('natureOfEmployment').value,
        location: this.addJobForm.get('location').value,
        createdBy: this.loginUser.id
      };
      if(this.data && this.data.jobData && this.data.jobData.id){
        jobDto.id = this.data.jobData.id;
        const result = await this.jobsService.apiJobsIdPut(this.data.jobData.id, jobDto).toPromise();
        this.successMessage = 'Job updated successfully!';
        console.log('Job updated successfully:', result);
      }else{
        const result = await this.jobsService.apiJobsPost(jobDto).toPromise();
        this.successMessage = 'New Job added successfully!';
        console.log('Job added successfully:', result);
      }
      
    } catch (error) {
      console.error('Error adding job:', error);
    } finally {
      this.loading = false;
    }
  }


}

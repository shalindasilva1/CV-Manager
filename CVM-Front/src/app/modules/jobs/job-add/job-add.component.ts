import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
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
  public addJobForm = new FormGroup({
    designation: new FormControl('', Validators.required),
    description: new FormControl(''),
    startSalary: new FormControl(0),
    endSalary: new FormControl(0),
    natureOfEmployment: new FormControl(NatureOfEmployment.FullTime),
    location: new FormControl(Location.Onsite)
  });
  public employmentTypes: NatureOfEmployment[] = Object.values(NatureOfEmployment);
  public locations: Location[] = Object.values(Location);
  public loginUser: any;
  public loading: boolean = false;
  public successMessage: string | null = null;

  constructor(
    private jobsService: JobsService,
    private userManagementService: UserManagementService,
    @Inject(MAT_DIALOG_DATA) public data: { jobData: JobDto }
  ) {}

  ngOnInit() {
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
        designation: this.addJobForm.controls.designation.value,
        description: this.addJobForm.controls.description.value,
        startSalary: this.addJobForm.controls.startSalary.value ?? undefined,
        endSalary: this.addJobForm.controls.endSalary.value ?? undefined,
        employment: this.addJobForm.controls.natureOfEmployment.value ?? NatureOfEmployment.FullTime,
        location: this.addJobForm.controls.location.value ?? Location.Onsite,
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

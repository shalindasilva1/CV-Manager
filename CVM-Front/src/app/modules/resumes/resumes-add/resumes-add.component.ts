import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CvDto, CvsService } from 'src/app/Services/SWAGGER';
import { UserManagementService } from 'src/app/Services/user-management/user-management.service';

@Component({
  selector: 'app-cv-add',
  templateUrl: './resumes-add.component.html',
  styleUrls: ['./resumes-add.component.scss']
})

export class ResumesAddComponent implements OnInit {
  addCVForm = new FormGroup({
    fileName: new FormControl('', Validators.required),
    cvFile: new FormControl(null, Validators.required)
  });
  loading = false;
  successMessage = '';
  loginUser: any;

  constructor(
    private cvsService: CvsService,
    private userManagementService: UserManagementService,
    @Inject(MAT_DIALOG_DATA) public data: { cvData: CvDto }
    ) {}

  ngOnInit(): void {
    if (this.data && this.data.cvData) {
      const job = this.data.cvData;
      this.addCVForm.patchValue({
        fileName : this.data.cvData.candidateName,
      });
    }
    this.loginUser = this.userManagementService.getUser();
  }
  
  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }

  async addCV() {
    try {
      this.loading = true;
      if (this.addCVForm.valid){
        const fileName = this.addCVForm.controls.fileName.value?.toString();
        const file = this.addCVForm.controls.cvFile.value! as Blob;
        if(this.data && this.data.cvData && this.data.cvData.id){
          const result = await this.cvsService.apiCvsIdPut(this.data.cvData.id, fileName, '', '', new Date(Date.now()).toISOString(), new Date(Date.now()).toISOString(), this.loginUser.id, '', 1, file).toPromise();
          this.successMessage = 'New Job added successfully!';
          console.log('Job added successfully:', result);
        }else{
          const result = await this.cvsService.apiCvsPost(fileName, '', '', 0, new Date(Date.now()).toISOString(), new Date(Date.now()).toISOString(), this.loginUser.id, '',1, file).toPromise();
          this.successMessage = 'New Job added successfully!';
          console.log('Job added successfully:', result);
        }
      }
    } catch (error) {
      console.error('Error adding job:', error);
    } finally {
      this.loading = false;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CvsService } from 'src/app/Services/SWAGGER';
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
    private userManagementService: UserManagementService
    ) {}

  ngOnInit(): void {
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
        const result = await this.cvsService.apiCvsPost(fileName, '', '', 0, new Date(Date.now()).toISOString(), new Date(Date.now()).toISOString(), this.loginUser.id, '',1, file).toPromise();
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

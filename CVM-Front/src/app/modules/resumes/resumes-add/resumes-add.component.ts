import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ResumesAddComponent>
  ) {}

  ngOnInit(): void {
  }

  addCV(): void {
    this.addCVForm;
    debugger;
  }
  
  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }
}

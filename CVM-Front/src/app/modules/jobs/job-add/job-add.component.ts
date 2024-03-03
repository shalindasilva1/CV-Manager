import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/shared/dialog-data';

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.scss']
})
export class JobAddComponent implements OnInit {
  public enumKeys: string[] = [];
  public addJobForm: any;

  constructor(
    private dialogRef: MatDialogRef<JobAddComponent>,
    private formBuilder: UntypedFormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {
    this.addJobForm = this.formBuilder.group({
      designation: '',
      yearsOfExperience: '',
      status: '',
      company: '',
      techStack: ''
    });
  }

  addJob() {
    
  }

  onKey($event: any) {
    
  }
}

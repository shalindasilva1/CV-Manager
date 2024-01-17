import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, UntypedFormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client, Companies, Jobs, Skills, Status } from 'src/app/Services/NSWAG';
import { DialogData } from 'src/app/shared/dialog-data';
import { FileType2LabelMapping } from 'src/app/shared/LabelMappings';

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.scss']
})
export class JobAddComponent implements OnInit {
  public statuses = Status;
  public FileType2LabelMapping = FileType2LabelMapping;
  public enumKeys: string[] = [];
  public companies: Companies[] = [];
  public skills: Skills[] = [];
  public addJobForm: any;

  constructor(
    private dialogRef: MatDialogRef<JobAddComponent>,
    private readonly _client: Client,
    private formBuilder: UntypedFormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }

  ngOnInit() {
    this.addJobForm = this.formBuilder.group({
      name: '',
      yearsOfExperience: '',
      status: '',
      company: '',
      techStack: ''
    });
    this.enumKeys = Object.keys(this.statuses);
    this.getAllCompanies();
    this.getAllSkills();

  }

  getAllCompanies() {
    this._client.companiesAll().subscribe(companies =>
      this.companies = companies
    );
  }

  getAllSkills() {
    this._client.skillsAll().subscribe(skills =>
      this.skills = skills
    );
  }

  addJob() {
    this._client.jobsPOST(new Jobs(this.addJobForm.value)).subscribe(result =>
      console.log(result)
    );
  }
}

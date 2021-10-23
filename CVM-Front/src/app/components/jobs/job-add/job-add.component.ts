import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client, Companies, Status } from 'src/app/Services/NSWAG';
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
  constructor(
    private dialogRef: MatDialogRef<JobAddComponent>,
    private readonly _client: Client,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
    this.enumKeys = Object.keys(this.statuses);
    this.getAllJobs();
  }

  getAllJobs() {
    this._client.companiesAll().subscribe(companies =>
      this.companies = companies
    );
  }

}

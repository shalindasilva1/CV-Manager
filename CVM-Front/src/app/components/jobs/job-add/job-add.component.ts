import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Status } from 'src/app/Services/NSWAG';
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
  constructor(
    private dialogRef: MatDialogRef<JobAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
    this.enumKeys = Object.keys(this.statuses);
  }

}

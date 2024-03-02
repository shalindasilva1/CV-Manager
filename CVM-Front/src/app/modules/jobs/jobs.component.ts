import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  providers: [],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])]
})
export class JobsComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'yearsOfExperience', 'status', 'action'];
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getAllJobs();
  }

  getAllJobs() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  toggleRow() {
   
  }

  deleteJob() {
    
  }

  openAddJobForm() {
    
  }
}

import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mati-table',
  templateUrl: './mati-table.component.html',
  styleUrls: ['./mati-table.component.scss']
})
export class MatiTableComponent {
  @Input() dataSource!: MatTableDataSource<any>;
  @Input() displayedColumns: string[] = [];
  @Input() columnClasses: { [key: string]: string } = {};
  @Input() actionButtons: { [key: string]: { tooltip: string, click: Function, icon: string } } = {};

  getColumnClass(column: string): string {
    return this.columnClasses[column] || '';
  }

  getActionButtonKeys(): string[] {
    return Object.keys(this.actionButtons);
  }
}


import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from './interfaces/TableColumn';

@Component({
  selector: 'app-mati-table',
  templateUrl: './mati-table.component.html',
  styleUrls: ['./mati-table.component.scss']
})
export class MatiTableComponent {
  @Input() dataSource!: MatTableDataSource<any>;
  @Input() displayedColumns: TableColumn[] = [];
  @Input() columnClasses: { [key: string]: string } = {};
  @Input() actionButtons: { [key: string]: { tooltip: string, click: Function, icon: string } } = {};

  getActionButtonKeys(): string[] {
    return Object.keys(this.actionButtons);
  }

  getColumnNames(): string[] {
    return this.displayedColumns.map(column => column.name);
  }

  getColumnClass(column: TableColumn): string {
    return column.class || '';
  }
}


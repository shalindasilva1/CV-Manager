import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatiTableComponent } from './mati-table/mati-table.component';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTooltipModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatChipsModule,
  MatDialogModule,
  MatButtonModule,
  MatSelectModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [
    CommonModule, 
    ...materialModules,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule, 
    ...materialModules, 
    ConfirmationDialogComponent,
    ReactiveFormsModule,
    MatiTableComponent,
  ],
  declarations: [
    ConfirmationDialogComponent,
    MatiTableComponent
  ]
})
export class SharedModule {}

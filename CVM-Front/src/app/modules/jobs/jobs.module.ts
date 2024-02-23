import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { JobsComponent } from './jobs.component';
import { SharedModule } from '../shared/shared.module';
import { JobAddComponent } from './job-add/job-add.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    JobsComponent,
    JobAddComponent
  ],
  exports: [JobsComponent],
})
export class JobsModule {}

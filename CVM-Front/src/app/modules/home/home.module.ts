import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

import { SkillCountsComponent } from './cards/skill-counts/skill-counts.component'
import { OngoingJobsComponent } from './cards/ongoing-jobs/ongoing-jobs.component';
import { MonthlyPerformanceComponent } from './cards/monthly-performance/monthly-performance.component'
import { JobCountsComponent } from './cards/job-counts/job-counts.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    SkillCountsComponent,
    OngoingJobsComponent,
    MonthlyPerformanceComponent,
    JobCountsComponent
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule {}

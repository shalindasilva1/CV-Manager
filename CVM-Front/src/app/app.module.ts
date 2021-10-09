import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ResumesComponent } from './components/resumes/resumes.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { JobCountsComponent } from './components/home/cards/job-counts/job-counts.component';
import { MonthlyPerformanceComponent } from './components/home/cards/monthly-performance/monthly-performance.component';
import { OngoingJobsComponent } from './components/home/cards/ongoing-jobs/ongoing-jobs.component';
import { SkillCountsComponent } from './components/home/cards/skill-counts/skill-counts.component';
import { HttpClientModule } from '@angular/common/http';
import { API_BASE_URL } from './Services/NSWAG';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    JobCountsComponent,
    MonthlyPerformanceComponent,
    OngoingJobsComponent,
    SkillCountsComponent,
    JobsComponent,
    ResumesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('news-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    materialModules,
  ],
  providers: [
    {
      provide: API_BASE_URL,
      useValue: environment.apiRoot
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

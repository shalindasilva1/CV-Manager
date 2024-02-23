import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { API_BASE_URL } from './Services/NSWAG';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './modules/home/home.module';
import { JobsModule } from './modules/jobs/jobs.module';
import { ResumesModule } from './modules/resumes/resumes.module';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
  ],
  imports: [
    HomeModule,
    JobsModule,
    ResumesModule,
    SharedModule,
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
    FormsModule
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

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
import { FormsModule } from '@angular/forms';
import { HomeModule } from './modules/home/home.module';
import { JobsModule } from './modules/jobs/jobs.module';
import { ResumesModule } from './modules/resumes/resumes.module';
import { SharedModule } from './modules/shared/shared.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { LoginComponent } from './modules/authentication/login/login.component';
import { BASE_PATH } from './Services/SWAGGER';

@NgModule({
  declarations: [
    LoginComponent,
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
  providers: [{ provide: BASE_PATH, useValue: 'http://localhost:44392' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

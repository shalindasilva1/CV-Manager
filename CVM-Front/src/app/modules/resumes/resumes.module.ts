import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ResumesComponent } from './resumes.component';
import { SharedModule } from '../shared/shared.module';
import { ResumesAddComponent } from './resumes-add/resumes-add.component';

@NgModule({
  imports: [
    CommonModule, 
    SharedModule
  ],
  declarations: [
    ResumesAddComponent,
    ResumesComponent
  ],
  exports: [
    ResumesComponent
  ],
})
export class ResumesModule {}

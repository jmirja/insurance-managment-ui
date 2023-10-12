import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  exports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
})
export class SharedModule {}

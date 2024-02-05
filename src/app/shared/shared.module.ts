import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_RIPPLE_GLOBAL_OPTIONS,
  RippleGlobalOptions,
} from '@angular/material/core';
import { LoaderComponent } from './loader/loader.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

const globalRippleConfig: RippleGlobalOptions = {
  disabled: false,
  animation: {
    enterDuration: 300,
    exitDuration: 1000,
  },
  terminateOnPointerUp: true,
};

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [LoaderComponent, ConfirmationDialogComponent],
  exports: [CommonModule, RouterModule, MaterialModule, FormsModule, ReactiveFormsModule, LoaderComponent, ConfirmationDialogComponent],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig },
  ],
})
export class SharedModule { }

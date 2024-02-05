import { NgModule } from '@angular/core';
import { BanksComponent } from './banks.component';
import { NewBankDialogComponent } from './dialogs/new-bank-dialog/new-bank-dialog.component';
import { EditBankDialogComponent } from './dialogs/edit-bank-dialog/edit-bank-dialog.component';
import { SharedModule } from '@shared/shared.module';
import { BanksRoutingModule } from './banks-routing.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [BanksComponent, NewBankDialogComponent, EditBankDialogComponent],
  imports: [BanksRoutingModule, SharedModule],
  exports: [BanksComponent, NewBankDialogComponent, EditBankDialogComponent],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
//   providers: [
//     { provide: MAT_DIALOG_DATA, useValue: {} },
//     { provide: MatDialogRef, useValue: {} }
// ]
})
export class BanksModule { }

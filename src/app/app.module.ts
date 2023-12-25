import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './blocks/root/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';
import { SharedModule } from './shared/shared.module';
import { BlocksModule } from './blocks/blocks.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BanksComponent } from './banks/banks.component';
import { NewBankDialogComponent } from './banks/dialogs/new-bank-dialog/new-bank-dialog.component';
import { EditBankDialogComponent } from './banks/dialogs/edit-bank-dialog/edit-bank-dialog.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    DashboardComponent,
    BanksComponent,
    NewBankDialogComponent,
    EditBankDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    SharedModule,
    BlocksModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

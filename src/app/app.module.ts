import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './blocks/root/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { BlocksModule } from './blocks/blocks.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BanksComponent } from './banks/banks.component';

@NgModule({
  declarations: [ DashboardComponent, BanksComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    BlocksModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

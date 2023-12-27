import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocksRoutingModule } from './blocks-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './root/app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, SidenavComponent],
  imports: [CommonModule, BlocksRoutingModule, SharedModule, ],
  exports: [AppComponent, HeaderComponent, FooterComponent, SidenavComponent],
})
export class BlocksModule {}

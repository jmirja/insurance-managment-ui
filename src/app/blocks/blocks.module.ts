import { NgModule } from '@angular/core';

import { BlocksRoutingModule } from './blocks-routing.module';
import { AppComponent } from './root/app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, SidenavComponent],
  imports: [BlocksRoutingModule, SharedModule],
  exports: [AppComponent, HeaderComponent, FooterComponent, SidenavComponent],
})
export class BlocksModule { }

import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { AuthComponent } from './auth.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [AuthRoutingModule, SharedModule],
})
export class AuthModule { }

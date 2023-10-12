import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../core/consts';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  public todayDate: Date = new Date();
  public routers: typeof routes = routes;

  constructor(private service: AuthService, private router: Router) {}

  public sendLoginForm(): void {
    this.service.login();

    this.router.navigate([this.routers.DASHBOARD]).then();
  }

  public sendSignForm(): void {
    this.service.sign();

    this.router.navigate([this.routers.DASHBOARD]).then();
  }
}

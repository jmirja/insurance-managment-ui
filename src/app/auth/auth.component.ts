import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../core/consts';
import { AuthService } from '../core/auth/auth.service';
import { IRequestUserRegister } from '../core/models/request/IRequestUserRegister';
import { IRequestUserLogin } from '../core/models/request/IRequestUserLogin';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public todayDate: Date = new Date();
  public routers: typeof routes = routes;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      console.log(this.authService.isLoggedIn);
    }
  }

  public sendLoginForm($event: any) {
    const request: IRequestUserLogin = {
      UserName: $event.userName,
      Password: $event.password,
    };
    this.authService.login(request).then((res: any) => {
      if (res != null) {
        this.authService.storeToken(res.Token);
        this.authService.userSubject.next(res.UserName);
        this.router.navigate([this.routers.DASHBOARD]);
      }
    });
  }

  public sendRegisterForm($event: any): void {
    const request: IRequestUserRegister = {
      FullName: $event.fullName,
      Email: $event.email,
      UserName: $event.userName,
      Password: $event.password,
    };
    this.authService.register(request);
    this.router.navigate([this.routers.LOGIN]).then();
  }
}

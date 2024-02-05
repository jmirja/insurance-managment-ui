import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { IRequestUserLogin } from '@core/models/request/IRequestUserLogin';
import { IRequestUserRegister } from '@core/models/request/IRequestUserRegister';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public todayDate: Date = new Date();
  isProcessing = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

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
      }
    });
  }

  public sendRegisterForm($event: any): void {
    const request: IRequestUserRegister = {
      FullName: $event.fullname,
      UserName: $event.username,
      Email: $event.email,
      Password: $event.password,
    };
    this.authService.register(request);
  }
}


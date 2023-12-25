import { Injectable } from '@angular/core';

import { IUser } from '../models';
import { CoreApiService } from '../services/core-api.service';
import { TokenStorageService } from './token-storage.service';
import { LogService } from '../services/log.service';
import { IRequestUserRegister } from '../models/request/IRequestUserRegister';
import { IRequestUserLogin } from '../models/request/IRequestUserLogin';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { routes } from '@core/consts';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInStatus: boolean = false;
  private apiUrl = '/api/auth/';
  private redirectUrlAfterLogin = '';

  private loggedIn = new BehaviorSubject<boolean>(false);

  public userSubject = new Subject<string>();
  public user: string = '';
  public routers: typeof routes = routes;

  constructor(
    private coreApiService: CoreApiService,
    private tokenStorage: TokenStorageService,
    private logService: LogService,
    private router: Router
  ) {}

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  storeToken(token: string) {
    this.tokenStorage.setToken(token);
  }

  getToken() {
    this.tokenStorage.getToken();
  }

  // isLoggedIn(): boolean {
  //   return !!this.tokenStorage.getToken();
  // }

  set redirectUrl(url: string) {
    this.redirectUrlAfterLogin = url;
  }

  public signIn(): void {
    localStorage.setItem('token', 'token');
  }

  public logOut() {
    this.tokenStorage.removeToken();
    this.loggedIn.next(false);
  }

  public getUser(): string {
    return this.user;
  }

  public register(request: IRequestUserRegister) {
    return this.coreApiService
      .register(request)
      .then((result: any) => {
        return result;
      })
      .catch((err: any) => {});
  }

  public login(request: IRequestUserLogin) {
    return this.coreApiService
      .login(request)
      .then((result: any) => {
        if (result) {
          result.UserName = this.user = request.UserName;
          this.loggedIn.next(true);
        }
        return result;
      })
      .catch((err: any) => {});
  }
}

import { Injectable } from '@angular/core';

import { IUser } from '../models';
import { CoreApiService } from '../services/core-api.service';
import { TokenStorageService } from './token-storage.service';
import { LogService } from '../services/log.service';
import { IRequestUserRegister } from '../models/request/IRequestUserRegister';
import { IRequestUserLogin } from '../models/request/IRequestUserLogin';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInStatus: boolean = false;
  private apiUrl = '/api/auth/';
  private redirectUrlAfterLogin = '';

  public userSubject = new Subject<any>();
  public user: string = '';

  constructor(
    private coreApiService: CoreApiService,
    private tokenStorage: TokenStorageService,
    private logService: LogService
  ) {}

  storeToken(token: string) {
    this.tokenStorage.setToken(token);
  }

  getToken() {
    this.tokenStorage.getToken();
  }

  isLoggedIn(): boolean {
    return !!this.tokenStorage.getToken();
  }

  set redirectUrl(url: string) {
    this.redirectUrlAfterLogin = url;
  }

  public signIn(): void {
    localStorage.setItem('token', 'token');
  }

  public signOut() {
    this.tokenStorage.removeToken();
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
        if(result) {
          result.userName  = this.user = request.UserName;
          this.getUser();
        }
        return result;
      })
      .catch((err: any) => {});
  }
}

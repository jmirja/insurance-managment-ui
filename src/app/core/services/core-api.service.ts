import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IRequestUserLogin } from '../models/request/IRequestUserLogin';
import { IRequestUserRegister } from '../models/request/IRequestUserRegister';
import { IRequestBank } from '../models/request/IRequestBank';

@Injectable({
  providedIn: 'root',
})
export class CoreApiService {
  url = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  getRequestToAPI(method: string): any {
    let path = this.getMethodCategory(method) + '/' + method;

    return this.http
      .get(this.url + path)
      .toPromise()
      .then((data: any) => {
        try {
          return data;
        } catch (error) {
          return null;
        }
      });
  }

  postRequestToAPI(category: string, method: string, param: any): any {
    let body = param;

    return this.http
      .post(this.url + category + '/' + method, body)
      .toPromise()
      .then((data: any) => {
        try {
          return data;
        } catch (error) {
          console.log(error);
          return null;
        }
      });
  }

  deleteRequestAPI(method: string, param: any): any {
    let path = this.getMethodCategory(method) + '/' + method;

    path += param;

    console.log(this.url + path);
    return this.http
      .delete(this.url + path)
      .toPromise()
      .then((data: any) => {
        try {
          return data;
        } catch (error) {
          return null;
        }
      });

  }

  getMethodCategory(method: string): string {
    let category: string = '';
    switch (method) {
      case 'Banks':
      case 'Update':
      case 'Create':
      case 'Delete?bankId=':
        category = 'Bank';
        break;
      case 'GetAllUser':
      case 'GetUserByLoginOrName':
      case 'Register':
      case 'UpdateUserDetails':
      case 'CheckPassword':
      case 'ChangePassword':
        category = 'User';
        break;
    }
    return category;
  }

  register(request: IRequestUserRegister) {
    if (request == null) return null;
    return this.postRequestToAPI('User', 'Register', request)
      .then((result: any) => {
        return result;
      })
      .catch((err: any) => {
        return null;
      });
  }

  login(request: IRequestUserLogin) {
    if (request == null) return null;
    return this.postRequestToAPI('User', 'Login', request)
      .then((result: any) => {
        return result;
      })
      .catch((err: any) => {
        return null;
      });
  }

  getBanks() {
    return this.getRequestToAPI('Banks')
      .then((result: any) => {
        return result;
      })
      .catch((err: any) => {
        return null;
      });
  }

  getBankById() {
    return this.getRequestToAPI('Banks')
      .then((result: any) => {
        return result;
      })
      .catch((err: any) => {
        return null;
      });
  }

  createBank(request: IRequestBank) {
    if (request == null) return null;
    return this.postRequestToAPI('Bank', 'Create', request)
      .then((result: any) => {
        return result;
      })
      .catch((err: any) => {
        return null;
      });
  }

  updateBank(request: IRequestBank) {
    if (request == null) return null;
    return this.postRequestToAPI('Bank', 'Update', request)
      .then((result: any) => {
        return result;
      })
      .catch((err: any) => {
        return null;
      });
  }

  deleteBank(bankId: number) {
    if (bankId == null || bankId == 0) return null;
    return this.deleteRequestAPI('Delete?bankId=', bankId)
      .then((result: any) => {
        return result;
      })
      .catch((err: any) => {
        return null;
      });
  }
}

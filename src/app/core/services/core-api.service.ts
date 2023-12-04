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

  constructor(private http: HttpClient, private router: Router) {}

  getRequestToAPI(method: string, param: any): any {
    let path = this.getMethodCategory(method) + '/' + param;

    return this.http
      .get(this.url + 'api/v1/' + path)
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
    // let category = this.getMethodCategory(method);
    let body = param;

    return this.http
      .post(this.url + 'api/v1/' + category + '/' + method, body)
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

  getMethodCategory(method: string): string {
    let category: string = '';
    switch (method) {
      case 'Bank':
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
      case 'GetSymbolGroup':
      case 'GetSymbolConfiguration':
      case 'AddNewSymbolConfiguration':
      case 'UpdateSymbolConfiguration':
      case 'UpdateSecurities':
        category = 'Symbol';
        break;
      case 'GetCurrency':
        category = 'Currency';
        break;
      case 'GetGroupConfiguration':
      case 'UpdateGroupConfiguration':
      case 'AddNewGroupConfiguration':
      case 'AddNewGroupConfiguration':
      case 'UpdateGroupSymbols':
      case 'UpdateGroupTypeSec':
        category = 'Group';
        break;
      case 'GetLastQuotes':
        category = 'Quotes';
        break;
      case 'GetAllTransactions':
      case 'GetTradeTransactionSummary':
      case 'GetClientOpenTrade':
      case 'GetClientCloseTrade':
      case 'TransactMarketOpen':
      case 'TransactPendingOpen':
      case 'TransactMarketModify':
      case 'TransactPendingModify':
      case 'TransactMarketClose':
      case 'TransactPendingClose':
      case 'GetTicketInfo':
        category = 'Transaction';
        break;
      case 'GetUserBalance':
      case 'GetClientBalanceOperations':
      case 'MultiGet':
      case 'CreateBalanceOperation':
        category = 'Balance';
        break;
      case 'GetFeederInfo':
        category = 'Feeder';
        break;
      case 'GetUserLogs':
      case 'GetLogs':
        category = 'Logs';
        break;
      case 'HolidaysGet':
      case 'RequestHolidayAdd':
      case 'RequestHolidayUpdate':
      case 'RequestHolidayDelete':
        category = 'Holidays';
        break;
      case 'GetMultiBalanceGUI':
        category = 'balance-gui-request-via-manager';
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
        console.log(err);
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
        console.log(err);
        return null;
      });
  }

  getBanks() {
    return this.getRequestToAPI('Bank', 'Banks')
      .then((result: any) => {
        return result;
      })
      .catch((err: any) => {
        console.log(err);
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
        console.log(err);
        return null;
      });
  }

  updateBank(request: IRequestBank) {
    if (request == null) return null;
    return this.postRequestToAPI('Bank', 'Create', request)
      .then((result: any) => {
        return result;
      })
      .catch((err: any) => {
        console.log(err);
        return null;
      });
  }
}

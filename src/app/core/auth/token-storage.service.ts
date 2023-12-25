import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TokenStorageService {
  TOKEN_KEY = "token";
  constructor() {}

  setToken(token: string) {
    if (!token) {
      return;
    }

    this.removeToken();
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  removeToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}

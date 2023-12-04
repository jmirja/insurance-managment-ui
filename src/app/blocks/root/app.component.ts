import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';
import { routes } from 'src/app/core/consts';
import { environment } from 'src/environments/environment';
import packageInfo from 'package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  clientName: string = environment.clientName.toLocaleLowerCase();
  title: string = environment.applicationName;
  version: string = packageInfo.version;

  public routers: typeof routes = routes;

  user: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.userSubject.subscribe((data) => {
      this.user = data.userName;
    });
  }

  logout() {
    this.authService.signOut();
    this.user = '';
    this.router.navigate([this.routers.LOGIN]);
  }

  ngOnDestroy(): void {
    this.authService.userSubject.unsubscribe();
  }
}

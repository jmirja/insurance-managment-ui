import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';
import { routes } from 'src/app/core/consts';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'insurance-managment';
  public routers: typeof routes = routes;

  user!: User;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.user = this.auth.getUser();
  }

  logout() {
    this.router.navigate([this.routers.LOGIN]);
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth/auth.service';
import { routes } from '@core/constants';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  public routers: typeof routes = routes;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}

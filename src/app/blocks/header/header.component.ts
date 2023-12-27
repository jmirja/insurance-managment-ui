import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectorRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { routes } from 'src/app/core/consts';
import { Router } from '@angular/router';
import { AuthService } from '@core/auth/auth.service';
import { Observable } from 'rxjs';
import { MatSidenav} from '@angular/material/sidenav'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  public routers: typeof routes = routes;

  @Input()
  user: string = '';
  @Output()
  logoutEvent = new EventEmitter<any>();
  @Output() toggleEvent: EventEmitter<any> = new EventEmitter();

  constructor(
    private cDRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private authService: AuthService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => cDRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
    // this.authService.userSubject.subscribe((res) => {
    //   this.user = res;
    // });

  }

  toggleSidebar() {
    this.toggleEvent.emit();
  }

  public logout(): void {
    this.logoutEvent.emit();
  }

  // toggle() {
  //   this.sidenav.toggle();
  // }
  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}

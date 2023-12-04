import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { routes } from 'src/app/core/consts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  @Input()
  user: string = '';

  @Output()
  logoutEvent = new EventEmitter<any>();
  public routers: typeof routes = routes;
  constructor(private cDRef: ChangeDetectorRef, private media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => cDRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  public logout(): void {
    this.logoutEvent.emit();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}

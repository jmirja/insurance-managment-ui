import { NgModule, Optional, SkipSelf } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHeaderInterceptorService } from './interceptors/auth-header-interceptor.service';
import { HttpErrorInterceptorService } from './interceptors/http-error-interceptor.service';
import { throwIfAlreadyLoaded } from './utils/module-import-guard';
import { SharedModule } from '@shared/shared.module';
@NgModule({
  declarations: [],
  imports: [CoreRoutingModule, SharedModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

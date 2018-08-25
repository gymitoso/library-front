import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpErrorResponse, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../shared/auth/auth.service';

@Injectable()
export class AuthExpiredInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private injector: Injector
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).catch(
      (err: HttpErrorResponse) => {
        if (this.router.url !== '/login' && err.status === 401) {
          const authService: AuthService = this.injector.get(AuthService);
          authService.logout();
          this.router.navigate(['/login']);
        }
        return Observable.throw(err);
      }
    );
  }

}

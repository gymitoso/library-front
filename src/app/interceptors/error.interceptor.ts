import { Router } from '@angular/router';
import { ErrorHandler, Injectable, Injector } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private router: Router;

  constructor(private injector: Injector) {

  }

  handleError(error) {
    console.log(error);
  }
}

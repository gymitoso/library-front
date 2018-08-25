import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthExpiredInterceptor } from './interceptors/auth-expired.interceptor';
import { GlobalErrorHandler } from './interceptors/error.interceptor';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { LoginModule } from './login/login.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingModule,
    SharedModule,
    LoginModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true,
      deps: [
        Injector
      ]
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
      deps: [
        Injector
      ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

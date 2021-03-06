import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule
} from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ToastyModule } from 'ng2-toasty';
import { Ng2Webstorage } from 'ngx-webstorage';

import {
  VersionComponent,
  ApiService,
  AuthService,
  UserService,
  UserRouteAccessService,
  NotificationService,
  SpinnerComponent
} from './';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    ToastyModule.forRoot(),
    Ng2Webstorage,
    HttpClientModule
  ],
  declarations: [
    VersionComponent,
    SpinnerComponent
  ],
  exports: [
    NgbModule,
    ToastyModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    VersionComponent,
    SpinnerComponent
  ],
  providers: [
    ApiService,
    AuthService,
    UserService,
    UserRouteAccessService,
    NotificationService
  ]
})
export class SharedModule { }

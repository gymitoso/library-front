import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { loginRoute } from './login.route';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(loginRoute),
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }

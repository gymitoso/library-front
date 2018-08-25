import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { AuthorComponent, AuthorListComponent, AuthorService } from './';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [AuthorComponent, AuthorListComponent],
  providers: [ AuthorService ]
})
export class AuthorModule { }

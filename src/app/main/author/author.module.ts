import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { AuthorComponent, AuthorListComponent } from './';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [AuthorComponent, AuthorListComponent]
})
export class AuthorModule { }

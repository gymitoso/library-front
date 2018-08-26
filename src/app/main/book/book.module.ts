import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { BookComponent, BookListComponent, BookService } from './';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ BookComponent, BookListComponent ],
  providers: [ BookService ]
})
export class BookModule { }

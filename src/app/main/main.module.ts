import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../shared/shared.module';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { NavbarComponent } from './layouts';
import { MainComponent } from './main';
import { mainRoute } from './main.route';

const ROUTES = [
  mainRoute
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthorModule,
    BookModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    MainComponent,
    NavbarComponent
  ],
  providers: [
  ]
})
export class MainModule { }

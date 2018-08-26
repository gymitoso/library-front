import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthorListComponent } from './author-list/author-list.component';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @ViewChild(AuthorListComponent) list: AuthorListComponent;

  constructor() { }

  ngOnInit() {
  }

  reloadList() {
    this.list.loadAuthors();
  }

}

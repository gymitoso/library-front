import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './book.service';
import { BookListComponent } from './book-list/book-list.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @ViewChild(BookListComponent) list: BookListComponent;

  private authorId;

  author = {};

  constructor(private bookService: BookService, private routerParam: ActivatedRoute) { }

  ngOnInit() {
    this.authorId = this.routerParam.snapshot.params['authorId'];
    this.loadAuthor();
  }

  loadAuthor() {
    this.bookService.getAuthor(this.authorId).subscribe(
      data => {
        this.author = data;
      },
      err => {

      }
    );
  }

  reloadList() {
    this.list.loadBooks();
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['id', 'title'];
  dataSource = new MatTableDataSource<any>();

  private authorId;

  loading = false;

  constructor(
    private bookService: BookService,
    private routerParam: ActivatedRoute
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.authorId = this.routerParam.snapshot.params['authorId'];
    this.loadBooks();
  }

  loadBooks() {
    this.loading = true;
    this.bookService.getAllBooks(this.authorId).subscribe(
      data => {
        this.dataSource.data = data;
        this.loading = false;
      },
      err => {
        this.loading = false;
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

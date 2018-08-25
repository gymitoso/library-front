import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { SpinnerService } from '../../../shared';
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

  constructor(
    private bookService: BookService,
    private routerParam: ActivatedRoute,
    public spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.authorId = this.routerParam.snapshot.params['authorId'];
    this.loadBooks();
  }

  loadBooks() {
    this.spinnerService.showSpinner(true);
    this.bookService.getAllBooks(this.authorId).subscribe(
      data => {
        this.dataSource.data = data;
        this.spinnerService.hideSpinner();
      },
      err => {
        this.spinnerService.hideSpinner();
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

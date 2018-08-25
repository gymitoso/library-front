import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { AuthorService } from '../author.service';
import { SpinnerService } from '../../../shared';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['id', 'firstName', 'lastName', 'book'];
  dataSource = new MatTableDataSource<any>();

  constructor(
    private authorService: AuthorService,
    public spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadAuthors();
  }

  loadAuthors() {
    this.spinnerService.showSpinner(true);
    this.authorService.getAllAuthors().subscribe(
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

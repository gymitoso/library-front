import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['id', 'firstName', 'lastName'];
  dataSource = new MatTableDataSource<any>();

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.data = [{firstName: "José", lastName: "Sarney", id: 1}, {firstName: "Gustavo", lastName: "Lima", id: 2}];
    });
  }

}

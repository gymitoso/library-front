import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';

import { BookService } from '../book.service';
import { NotificationService } from '../../../shared';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: [
    './book-list.component.css',
    '../../../../../node_modules/ng2-toasty/style-default.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class BookListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('booksFile') booksFile: ElementRef;

  displayedColumns = ['id', 'title'];
  dataSource = new MatTableDataSource<any>();

  private authorId;

  loading = false;

  constructor(
    private bookService: BookService,
    private routerParam: ActivatedRoute,
    private notification: NotificationService,
    private toastyService: ToastyService
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
        this.notification.notify(this.toastyService,
          'Server error',
          'Try again in a few moments',
          'error'
        );
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  fileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (file.type === 'text/plain' || file.type === 'application/json') {
          this.bookService.uploadBooksFile(file).subscribe(
            data => {
              this.notification.notify(this.toastyService,
                'File send',
                'The file was taken to process',
                'success'
              );
              setTimeout(this.loadBooks(), 1000);
            },
            err => {
              this.notification.notify(this.toastyService,
                'Server error',
                'Try again in a few moments',
                'error'
              );
            }
          );
        } else {
          this.notification.notify(this.toastyService,
            'Invalid file type',
            'Only json and txt are accepted',
            'error'
          );
        }
      };
    }
    this.booksFile.nativeElement.value = "";
  }


}

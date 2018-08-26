import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ToastyService } from 'ng2-toasty';

import { AuthorService } from '../author.service';
import { NotificationService } from '../../../shared';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: [
    './author-list.component.css',
    '../../../../../node_modules/ng2-toasty/style-default.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AuthorListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('authorsFile') authorsFile: ElementRef;

  displayedColumns = ['id', 'firstName', 'lastName', 'book'];
  dataSource = new MatTableDataSource<any>();

  loading = false;

  constructor(
    private authorService: AuthorService,
    private notification: NotificationService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadAuthors();
  }

  loadAuthors() {
    this.loading = true;
    this.authorService.getAllAuthors().subscribe(
      data => {
        this.dataSource.data = data;
        this.loading = false;
      },
      err => {
        this.notification.notify(this.toastyService,
          'Server error',
          'Try again in a few moments',
          'error'
        );
        this.loading = false;
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  fileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (file.type === 'text/plain' || file.type === 'application/json') {
          this.authorService.uploadAuthorsFile(file).subscribe(
            data => {
              this.notification.notify(this.toastyService,
                'File send',
                'The file was taken to process',
                'success'
              );
              setTimeout(this.loadAuthors(), 1000);
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
    this.authorsFile.nativeElement.value = '';
  }

}

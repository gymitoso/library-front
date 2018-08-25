import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../shared';

@Injectable()
export class BookService {

  constructor(
    private apiService: ApiService
  ) {}

  getAllBooks() {
    return this.apiService.get('/books');
  }

}

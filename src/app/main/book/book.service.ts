import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../shared';

@Injectable()
export class BookService {

  constructor(
    private apiService: ApiService
  ) {}

  getAllBooks(authorsId) {
    return this.apiService.get('/authors/' + authorsId + '/books');
  }

  getAuthor(authorsId) {
    return this.apiService.get('/authors/' + authorsId);
  }

}

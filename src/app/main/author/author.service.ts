import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../shared';

@Injectable()
export class AuthorService {

  constructor(
    private apiService: ApiService
  ) {}

  getAllAuthors() {
    return this.apiService.get('/authors');
  }

}

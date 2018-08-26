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

  uploadAuthorsFile(file) {
    const formdata: FormData = new FormData();
    formdata.append('authorsFile', file);

    return this.apiService.postFormData('/upload-authors-file', formdata, null, true);
  }

}

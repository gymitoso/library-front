import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SessionStorageService } from 'ngx-webstorage';

import { ApiService } from '../services/api.service';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private $sessionStorage: SessionStorageService
  ) {}

  getToken() {
    return this.$sessionStorage.retrieve('authenticationToken');
  }

  isAuthenticated(): boolean {
    if (this.getToken() && this.userService.getUser()) {
      return true;
    }
    return false;
  }

  login(credentials): Observable<any> {
    const data = {
        username: credentials.username,
        password: credentials.password
    };
    return this.apiService.post('/authenticate', data, null, true).map(authenticateSuccess.bind(this));

    function authenticateSuccess(resp) {
      if (resp && resp.token && resp.user) {
        this.storeAuthenticationToken(resp.token);
        this.userService.storeAuthenticationUser(resp.user);
        return true;
      }
      return false;
    }
  }

  storeAuthenticationToken(jwt) {
    this.$sessionStorage.store('authenticationToken', jwt);
  }

  logout(): Observable<any> {
    return new Observable((observer) => {
      this.$sessionStorage.clear('authenticationToken');
      this.$sessionStorage.clear('authenticationUser');
      observer.next(1);
      observer.complete();
      observer.unsubscribe();
    });
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SessionStorageService } from 'ngx-webstorage';

import { ApiService } from '../services/api.service';

@Injectable()
export class UserService {

  constructor(
    private apiService: ApiService,
    private $sessionStorage: SessionStorageService
  ) {}

  getUser() {
    return this.$sessionStorage.retrieve('authenticationUser');
  }

  storeAuthenticationUser(user) {
    this.$sessionStorage.store('authenticationUser', user);
  }

  hasAnyAuthority(authorities: string[]): boolean {
    const user = this.getUser();
    for (let i = 0; i < authorities.length; i++) {
      if (user.authorities.includes(authorities[i])) {
        return true;
      }
    }
    return false;
  }

  hasAuthority(authority: string): boolean {
    const user = this.getUser();
    if (user.authorities.includes(authority)) {
      return true;
    }
    return false;
  }

}

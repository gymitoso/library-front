import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, UserService } from '../../../shared';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [
      './navbar.css'
    ]
})
export class NavbarComponent implements OnInit {

    isNavbarCollapsed: boolean;

    user = {};

    constructor(
      private router: Router,
      private userService: UserService,
      private authService: AuthService
    ) {
      this.isNavbarCollapsed = true;
    }

    ngOnInit() {
      this.user = this.userService.getUser();
    }

    collapseNavbar() {
      this.isNavbarCollapsed = true;
    }

    logout() {
      this.collapseNavbar();
      this.authService.logout().subscribe(
        data => this.router.navigate(['login']),
        err => this.router.navigate(['login'])
      );
    }

    toggleNavbar() {
      this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastyService } from 'ng2-toasty';

import { AuthService, NotificationService } from '../shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    '../../../node_modules/ng2-toasty/style-default.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  credentials = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    private notification: NotificationService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }
  }

  login() {
    this.authService.login(this.credentials).subscribe(
      data => {
        if (data) {
          this.router.navigate(['/']);
        }
        this.notification.notify(
          this.toastyService,
          'Falha na Autenticação',
          'Credenciais inválidas',
          'error'
        );
      },
      err => {
        this.notification.notify(this.toastyService,
          'Erro no servidor',
          'Tente novamente em alguns instantes',
          'error'
        );
      }
    );
  }

}

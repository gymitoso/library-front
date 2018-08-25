import { Component } from '@angular/core';
import { SpinnerService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public spinnerService: SpinnerService) {}

}

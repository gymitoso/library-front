import {Component, Input, OnDestroy, Inject, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: [
        './spinner.component.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class SpinnerComponent implements OnDestroy {
    @Input() isSpinnerVisible = false;

    constructor() {
    }

    ngOnDestroy() {

    }

}

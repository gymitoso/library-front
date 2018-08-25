import { Injectable } from '@angular/core';


@Injectable()
export class SpinnerService {

  private isSpinnerVisible = false;
  private isLoadingVisible = true;

  public isVisible(): boolean {
    return this.isSpinnerVisible;
  }

  public isLoading(): boolean {
    return this.isLoadingVisible;
  }

  public hideSpinner() {
    this.isSpinnerVisible = false;
  }

  public showSpinner(isLoading: boolean) {
    this.isSpinnerVisible = true;
    this.isLoadingVisible = isLoading;
  }

}

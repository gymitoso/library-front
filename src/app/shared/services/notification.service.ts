import { Injectable } from '@angular/core';
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';

@Injectable()
export class NotificationService {

  constructor() { }
  position = 'bottom-right';
  title: string;
  showClose = true;
  theme = 'default';
  closeOther = true;

  notify(t: ToastyService, title: string, msg: string, type, timeout = 3000) {
    if (this.closeOther) {
      t.clearAll();
    }
    const toastOptions: ToastOptions = {
      title: title,
      msg: msg,
      showClose: this.closeOther,
      timeout: timeout,
      theme: this.theme,
      onAdd: (toast: ToastData) => {
        /* added */
      },
      onRemove: (toast: ToastData) => {
        /* removed */
      }
    };
    switch (type) {
      case 'default': t.default(toastOptions); break;
      case 'info': t.info(toastOptions); break;
      case 'success': t.success(toastOptions); break;
      case 'wait': t.wait(toastOptions); break;
      case 'error': t.error(toastOptions); break;
      case 'warning': t.warning(toastOptions); break;
    }
  }


}

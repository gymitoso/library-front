import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest} from '@angular/common/http';
import { SessionStorageService } from 'ngx-webstorage';
import { ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    private sessionStorage: SessionStorageService
  ) {}

  /*
   *@desc function to set the header in every request
   *
  */
  private setHeaders(header: Map<string, string>): HttpHeaders {

    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    const token = this.sessionStorage.retrieve('authenticationToken');
    if (!!token) {
      headersConfig['Authorization'] = 'Bearer ' + token;
    }

    if (header) {
      header.forEach((value, key) => {
        headersConfig[key] = value;
      });
    }

    return new HttpHeaders(headersConfig);
  }

  private formatErrors(error: any) {
    return Observable.throw(error);
  }

  get(path: string, header?: Map<string, string> ): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, {headers: this.setHeaders(header)})
    .catch(this.formatErrors)
    .map((res: HttpResponse<Response>) => res);
  }

  put(path: string, body: Object = {}, header?: Map<string, string>): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      {headers: this.setHeaders(header)}
    )
    .catch(this.formatErrors)
    .map((res: HttpResponse<Response>) => res);
  }

  post(path: string, body: Object = {}, header?: Map<string, string>): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      {headers: this.setHeaders(header)}
    )
    .catch(this.formatErrors)
    .map((res: HttpResponse<Response>) => res);
  }

  delete(path, header?: Map<string, string>): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`,
      {headers: this.setHeaders(header)}
    )
    .catch(this.formatErrors)
    .map((res: HttpResponse<Response>) => res);
  }

}

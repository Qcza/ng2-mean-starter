import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
  constructor (private http: Http) {  }

  private domain = 'http://localhost:3000';

  // // Custom services
  // private customUrl = this.domain + '/custom';
  // getCustom(): Observable<any> {
  //   let headers = new Headers({'Auth': 'basic'});
  //   let options = new RequestOptions({headers: headers});
  //   return this.http.get(this.customUrl , options).map(this.extractData).catch(this.handleError);
  // }

  // getCustoms (id:string): Observable<any> {
  //   let headers = new Headers({'Auth': 'basic'});
  //   let options = new RequestOptions({headers: headers});
  //   return this.http.get(this.customUrl  + '/' +id, options).map(this.extractData).catch(this.handleError);
  // }

  // postCustom (custom:any): Observable<any> {
  //   let body = JSON.stringify(custom);
  //   let headers = new Headers({'Content-type': 'application/json', 'Auth': 'basic'});
  //   let options = new RequestOptions({headers: headers});
  //   return this.http.post(this.customUrl, body, options).map(this.extractData).catch(this.handleError);
  // }

  // putCustom (custom:any): Observable<any> {
  //   let body = JSON.stringify(custom);
  //   let headers = new Headers({'Content-type': 'application/json', 'Auth': 'basic'});
  //   let options = new RequestOptions({headers: headers});
  //   return this.http.put(this.customUrl+'/'+custom.id, body, options).map(this.extractData).catch(this.handleError);
  // }

  // deleteCustom(custom:any): Observable<any> {
  //   let headers = new Headers({'Auth': 'basic'});
  //   let options = new RequestOptions({headers: headers});
  //   return this.http.delete(this.customUrl+'/'+custom.id, options).map(this.extractData).catch(this.handleError);
  // }

  // Helpers
  private extractData(res:Response) {
    let body = res.json();
    return body || {  };
  }
  private handleError (error:any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.message}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
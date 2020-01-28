import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { OauthService } from '../oauth/oauth.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationInterceptorService {

  constructor(private oauth: OauthService) { }
  // TODO handle missing token and expired
   intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(req);
  }

  handleRefresh(request, next) {
    return this.oauth.getToken().subscribe(token => {
      // TODO call oauth service token then pass next.handle and set localstorage

      return next;
    }, err => console.log(err));
  }

  // TODO: create functions to check missed and expired token
  isTokenInClientBrowser() {
    const token = localStorage.getItem('ochra-token');
    return token;
  }
}

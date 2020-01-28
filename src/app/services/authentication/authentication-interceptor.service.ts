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
    const token = localStorage.getItem('ochra-token');
    return next.handle(req);
  }

  handleRefresh(request, next) {
    return this.oauth.getToken().subscribe(token => {
      return next;
    }, err => console.log(err));
  }

  isTokenInClientBrowser() {
    const token = localStorage.getItem('ochra-token');
    return token;
  }
}

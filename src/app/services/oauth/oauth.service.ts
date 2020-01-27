import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OauthService {
  private AUTH_API_ENDPONT = 'https://auth.ochre.io/oauth2/token';
  constructor(private http: HttpClient) { }

  getToken() {
    const params = new HttpParams();
    params.set('client_id', '1010101010');
    params.set('client_secret', 'MUyRPryMKtGgvllvu5ftjxmDQkfF9U5Yn7Lg1oA0THWjRT1a4E')
    params.set('grant_type', 'client_credentials');
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: '*/*',

    });
    return this.http.post(this.AUTH_API_ENDPONT, params.toString, { headers });
  }
}

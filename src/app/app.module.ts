import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReleasesListComponent } from './components/releases-list/releases-list.component';
import { ReleaseService } from './services/release/release.service';
import { OauthService } from './services/oauth/oauth.service';
import { AppRoutingModule } from './app.routing';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthenticationInterceptorService } from './services/authentication/authentication-interceptor.service';
import { ReleaseComponent } from './components/release/release.component';

@NgModule({
  declarations: [
    AppComponent,
    ReleasesListComponent,
    ReleaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ReleaseService,
    OauthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

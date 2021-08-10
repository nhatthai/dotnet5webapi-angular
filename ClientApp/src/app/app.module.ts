import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './material.module';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { LoginButtonComponent } from '../components/login-button/login-button.component';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { HomeComponent } from '../components/home/home.component';
import { ProductModule } from './product/product.module';
import { ProductEffects } from './product/store/product.effects';
import { productReducer } from './product/store/product.reducers'
import { environment as env } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginButtonComponent,
    UserProfileComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProductModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,

    // add and initialize AuthModule
    AuthModule.forRoot({
      domain: env.auth.domain,
      clientId: env.auth.clientId,
      redirectUri: env.auth.redirectUri
    }),

    EffectsModule.forRoot([ProductEffects]),
    StoreModule.forRoot(productReducer),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutComponent } from './components/about/about.component';
import { ListingsComponent } from './components/listings/listings.component';
import { MyListingsComponent } from './components/my-listings/my-listings.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { CreateListingComponent } from './components/create-listing/create-listing.component';
import { Dog } from './models/dog.model';
import { DogComponent } from './components/dog/dog.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    WelcomeComponent,
    AboutComponent,
    ListingsComponent,
    MyListingsComponent,
    LogInComponent,
    CreateListingComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

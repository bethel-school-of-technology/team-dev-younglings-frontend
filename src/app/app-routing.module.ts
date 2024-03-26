import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ListingsComponent } from './components/listings/listings.component';
import { CreateListingComponent } from './components/create-listing/create-listing.component';
import { MyListingsComponent } from './components/my-listings/my-listings.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { DogComponent } from './components/dog/dog.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'create-listing', component: CreateListingComponent },
  { path: 'my-listings', component: MyListingsComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'dog/:id', component: DogComponent },
  { path: 'edit/:id', component: EditListingComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', redirectTo: '/welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

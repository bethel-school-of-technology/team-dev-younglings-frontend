import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent {
  constructor(private router: Router) {}

  redirectToCreateListing(): void {
    this.router.navigate(['/create-listing']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.css']
})
export class CreateListingComponent {
  constructor(private router: Router, private dogService: DogService) {}

  goBack(): void {
    this.router.navigate(['/my-listings']);
  }

  submitListing(form: any): void {
    if (form.valid) {
      const formData = form.value;
      this.dogService.createDogListing(formData).subscribe(
        response => {
          console.log('Dog listing created successfully:', response);
          this.goBack();
        },
        error => {
          console.error('Error creating dog listing:', error);
        }
      );
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }
}
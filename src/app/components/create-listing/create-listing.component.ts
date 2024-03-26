import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.css']
})
export class CreateListingComponent {
  formData: any = {};
  selectedFile: File | null = null;

  constructor(private router: Router, private dogService: DogService) {}

  submitListing(): void {
    const formData = new FormData();
    formData.append('name', this.formData.name);
    formData.append('breed', this.formData.breed);
    formData.append('age', this.formData.age);
    formData.append('price', this.formData.price);
    formData.append('disability', this.formData.disability ?? false);
    formData.append('gender', this.formData.gender);
    
    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }
  
    if (this.formData.allergies) {
      formData.append('allergies', this.formData.allergies);
    }
    
    this.dogService.createDogListing(formData).subscribe(
      response => {
        console.log('Listing created successfully:', response);
        this.dogService.redirectToMyListings();
        alert('Listing created successfully!');
      },
      error => {
        console.error('Error creating listing:', error);
      }
    );
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
}
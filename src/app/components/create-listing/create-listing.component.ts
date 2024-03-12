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
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const imgBlob = reader.result as ArrayBuffer;
        const imgFile = new Blob([new Uint8Array(imgBlob)], { type: 'image/jpeg' });
        const formData = new FormData();
        formData.append('image', imgFile, this.selectedFile?.name);

        this.dogService.createDogListing({...this.formData, image: this.selectedFile?.name}).subscribe(
          response => {
            console.log('Listing created successfully:', response);
            this.dogService.redirectToMyListings();
            alert('Listing created successfully!');
          },
          error => {
            console.error('Error creating listing:', error);
          }
        );
      };
      reader.readAsArrayBuffer(this.selectedFile);
    } else {
      this.dogService.createDogListing(this.formData).subscribe(
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
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
}
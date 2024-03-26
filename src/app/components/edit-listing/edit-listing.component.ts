import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dog } from 'src/app//models/dog.model';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent {
  selectedFile: File | null = null;
  dog!: Dog;

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.dogService.getDogInfo(id).subscribe(
      (dog: Dog) => {
        this.dog = dog;
      },
      error => {
        console.error('Error fetching dog details:', error);
      }
    );
  }

  updateDog(): void {
    this.dogService.editDogInfo(this.dog).subscribe(
      () => {
        console.log('Dog details updated successfully');
      },
      error => {
        console.error('Error updating dog details:', error);
      }
    );
  }

  onImageSelected(event: any): void {
    const file: File = event.target.files[0];
    this.selectedFile = file;
  }
}
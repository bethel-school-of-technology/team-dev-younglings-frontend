import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dog } from 'src/app/models/dog.model';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent {
  unsoldDogs: Dog[] = [];
  soldDogs: Dog[] = [];

  constructor(private router: Router, private dogService: DogService) { }

  redirectToCreateListing(): void {
    this.router.navigate(['/create-listing']);
  }

  ngOnInit(): void {
    this.loadDogs();
  }

  loadDogs(): void {
    this.dogService.getDogs().subscribe(
      (dogs: Dog[]) => {
        this.unsoldDogs = dogs.filter(dog => !dog.sold);
        this.soldDogs = dogs.filter(dog => dog.sold);
      },
      error => {
        console.error('Error fetching dogs:', error);
      }
    );
  }

  editDog(dog: Dog): void {
    this.router.navigate(['/edit-listing', dog.id]);
  }

  deleteDog(id: number): void {
    const dogId = id.toString();
    this.dogService.deleteDogListing(dogId).subscribe(
      () => {
        console.log('Dog listing deleted successfully');
        this.loadDogs();
      },
      error => {
        console.error('Error deleting dog listing:', error);
      }
    );
  }
}
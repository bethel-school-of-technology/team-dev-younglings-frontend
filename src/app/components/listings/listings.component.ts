import { Component, OnInit } from '@angular/core';
import { DogService } from 'src/app/services/dog.service';
import { Router } from '@angular/router';
import { Dog } from '../../models/dog.model';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  breeds: string[] = [];
  dogs: any[] = [];
  filteredBreeds: string[] = [];
  filteredDogs: { [key: string]: any[] } = {};
  breedFilter: string = '';
  genderFilter: string = '';
  minPrice: number = 0;
  maxPrice: number = 8000;

  constructor(private dogService: DogService, private router: Router) {}

  ngOnInit(): void {
    this.fetchDogListings();
  }

  fetchDogListings(): void {
    this.dogService.getDogListings().subscribe(
      (data: any) => {
        this.dogs = data;
        this.extractBreeds();
        this.applyFilter();
      },
      (error: any) => {
        console.error('Error fetching dog listings:', error);
      }
    );
  }

  extractBreeds(): void {
    this.breeds = Array.from(new Set(this.dogs.map(dog => dog.breed)));
  }

  applyFilter(): void {
    this.filteredBreeds = this.breeds.filter(breed =>
      breed.toLowerCase().includes(this.breedFilter.toLowerCase())
    );

    this.filteredDogs = {};
    for (const breed of this.filteredBreeds) {
      this.filteredDogs[breed] = this.dogs.filter(dog =>
        dog.breed === breed &&
        (this.genderFilter === '' || dog.gender === this.genderFilter) &&
        (this.maxPrice === 0 || dog.price <= this.maxPrice)
      );
    }
  }
}
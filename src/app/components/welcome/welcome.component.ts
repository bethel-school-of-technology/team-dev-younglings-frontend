import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  dogs = [
    {
      name: 'Buddy',
      breed: 'Labrador Retriever',
      age: 3,
      gender: 'Male',
      price: 500,
      image: 'assets/dog1.jpg'
    },
    {
      name: 'Daisy',
      breed: 'Golden Retriever',
      age: 2,
      gender: 'Female',
      price: 600,
      image: 'assets/dog2.jpg'
    },
    {
      name: 'Rocky',
      breed: 'German Shepherd',
      age: 4,
      gender: 'Male',
      price: 550,
      image: 'assets/dog3.jpg'
    }
  ];

  selectedTab: string = 'welcome';
  randomDogs: any[] = [];

  constructor(private router: Router, private dogService: DogService) {}

  ngOnInit(): void {
    this.dogService.getRandomDogs().subscribe(
      (dogs: any[]) => {
        this.randomDogs = dogs;
      },
      (error) => {
        console.error('Error fetching random dogs:', error);
      }
    );
  }

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }

  goToListings(): void {
    this.router.navigate(['/listings']);
  }

  getRandomDogs(): void {
    this.dogService.getRandomDogs().subscribe(
      (dogs: any[]) => {
        this.randomDogs = dogs;
      },
      (error) => {
        console.error('Error fetching random dogs:', error);
      }
    );
  }
}
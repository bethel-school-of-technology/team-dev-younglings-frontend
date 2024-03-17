import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  selectedTab: string = 'welcome';
  randomDogs: any[] = [];

  constructor(private router: Router, private dogService: DogService) {}

  ngOnInit(): void {
    this.fetchRandomDogs();
  }

  selectTab(tabName: string): void {
    this.selectedTab = tabName;
  }

  goToListings(): void {
    this.router.navigate(['/listings']);
  }

  fetchRandomDogs(): void {
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
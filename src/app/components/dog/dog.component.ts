import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogService } from 'src/app/services/dog.service';
import { UserService } from 'src/app/services/user.service';
import { Dog } from 'src/app//models/dog.model';
import { User } from 'src/app//models/user.model';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  dog: Dog | undefined;
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const dogId = this.route.snapshot.paramMap.get('id');
    if (dogId) {
      this.dogService.getDogInfo(dogId).subscribe(
        dog => {
          this.dog = dog;
          if (dog && dog.userId) {
            this.userService.getUser(dog.userId.toString()).subscribe(
              user => {
                this.user = user;
              },
              error => {
                console.error('Error fetching user:', error);
              }
            );
          } else {
            console.error('Dog userId is missing or invalid.');
          }
        },
        error => {
          console.error('Error fetching dog:', error);
        }
      );
    } else {
      console.error('No dog ID provided in the URL.');
    }
  }
}
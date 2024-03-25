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
  // dog: Dog;
  // user: User;

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // const dogId = this.route.snapshot.paramMap.get('id');
    // this.dogService.getDogById(dogId).subscribe((data: Dog) => {
    //   this.dog = data;
    //   this.userService.getUserById(this.dog.userId).subscribe((userData: User) => {
    //     this.user = userData;
    //   });
    // });
  }
}
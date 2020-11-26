import { Component, OnInit } from '@angular/core';
import { RandomUsersService } from '../../../../core/services/random-users/random-users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private randomUserService: RandomUsersService) {}

  ngOnInit(): void {}

  getRandomUser() {
    this.randomUserService.getRandomUsers().subscribe(
      (user) => {
        console.log(user);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getFile() {
    this.randomUserService.getFile().subscribe((content) => {
      console.log(content);
      let blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    });
  }
}

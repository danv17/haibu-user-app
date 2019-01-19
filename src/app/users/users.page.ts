import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  originalUSers: User[] = new Array;
  usersListed: User[] = new Array;
  data: any;
  
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.usersService.getData().subscribe(data => {
      this.data = data;
      this.parseDataToUserObjects(data);
      console.log(data);
    })
  }

  parseDataToUserObjects(json: any) {
    for (let index = 0; index < Object.keys(json).length; index++) {
      let user = new User(json[index]);
      this.originalUSers.push(user);
      this.usersListed = this.originalUSers;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsersService } from '../users.service';
import { User } from '../user';
import { debounceTime } from 'rxjs/operators/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  originalUsers: User[] = new Array;
  usersListed: User[] = new Array;
  data: any;
  searchTerm: string = '';
  searchControl: FormControl;
  searching: boolean = false;
  
  constructor(private usersService: UsersService, private router: Router) {
    this.searchControl = new FormControl();
   }

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
      this.originalUsers.push(user);
      this.usersListed = this.originalUsers;
    }
  }

  setFilteredUsers() {
    if(this.searchTerm.trim().length > 0) {
      this.usersListed = this.usersService.filterUser(this.originalUsers, this.searchTerm);
    } else {
      this.usersListed = this.originalUsers;
    }
  }

  showFilteredUser() {
    this.setFilteredUsers();
    this.searchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe(search => {
        this.searching = false;
        this.setFilteredUsers();
      });
  }

  onSearchInput(){
    this.searching = true;
    this.showFilteredUser();
  }


}

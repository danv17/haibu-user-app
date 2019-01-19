import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.page.html',
  styleUrls: ['./single-user.page.scss'],
})
export class SingleUserPage implements OnInit {
  selectedUser: User;
  rutFormateado: string;
  rutValido: boolean;
  rutInvalido: string;
  fechaNacimientoFormateada: string;
  fechaValida: boolean;
  fechaInvalida: string;

  constructor(
      private usersService: UsersService
    ) { }

  ngOnInit() {
    console.log(this.usersService.currentUser);
  }

}

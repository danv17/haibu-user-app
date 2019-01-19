import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { rutValidate, rutFormat } from 'rut-helpers';
import { formatDate } from '@angular/common';
import locale from '@angular/common/locales/en-CH'

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
    this.selectedUser = this.usersService.currentUser;
    this.formatRut(this.selectedUser.rut);
    this.validateRut(this.selectedUser.rut);    
  }

  validateRut(rut: any) {
    this.rutValido = rutValidate(rut);
    if(!this.rutValido) {
      this.rutInvalido = "RUT: " + this.rutFormateado + " INVÁLIDO";
    }
  }

  formatRut(rut: any) {
    this.rutFormateado = rutFormat(rut);
    if(this.rutFormateado.length == 0) {
      this.rutFormateado = this.selectedUser.rut;
    }
  }
}

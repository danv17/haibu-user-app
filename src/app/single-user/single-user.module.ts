import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SingleUserPage } from './single-user.page';

const routes: Routes = [
  {
    path: '',
    component: SingleUserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SingleUserPage]
})
export class SingleUserPageModule {}

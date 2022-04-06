import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material.module.ts/app-material.module.ts.module';
import { SharedModule } from './../shared/shared.module';
import { UsersComponent } from './users/users.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    AppMaterialModule,
    SharedModule,
    FormsModule
  ]
})
export class UsuariosModule { }

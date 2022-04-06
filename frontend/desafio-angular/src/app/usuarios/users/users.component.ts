import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { User } from './../model/user';
import { UsuariosService } from './../services/usuarios.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    phone: ''
  }

  usuarios$: Observable<User[]>;
  displayedColumns = ['name', 'email', 'phone'];

  constructor(
    private usuariosService: UsuariosService,
    public dialog: MatDialog
    ) {

      this.usuarios$ = this.usuariosService.findAll().pipe(
        catchError(error => {
          this.onError('Erro ao carregar usuários!');
          return of([])
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

  createUser(): void {
    if(this.user.name == '' || this.user.email == '' || this.user.phone == ''){
      this.onError('Campos não podem ser vazios!');
    } else {
        this.usuariosService.create(this.user).subscribe(() => {
        this.usuariosService.showMessage("Usuário Cadastrado com Sucesso!")
        window.location.reload()
      });
    }

  }

}

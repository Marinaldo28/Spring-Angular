import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { delay, Observable, map } from 'rxjs';

import { User } from './../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly API = 'api/usuarios';

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  findAll() {
    return this.httpClient.get<User[]>(this.API).pipe(delay(500));
  }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(this.API, user);
  }

}

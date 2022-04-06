import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  exports: [
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class AppMaterialModule { }

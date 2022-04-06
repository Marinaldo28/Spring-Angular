import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material.module.ts/app-material.module.ts.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';



@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class SharedModule { }

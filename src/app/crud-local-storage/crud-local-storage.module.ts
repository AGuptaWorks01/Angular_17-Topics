import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudLocalStorageRoutingModule } from './crud-local-storage-routing.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CrudLocalStorageRoutingModule,
    FormsModule,
    ReactiveFormsModule, FormsModule
  ]
})
export class CrudLocalStorageModule { }

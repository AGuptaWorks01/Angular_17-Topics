import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterceptorRoutingModule } from './interceptor-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    CommonModule,
    InterceptorRoutingModule
  ]
})
export class InterceptorModule { }

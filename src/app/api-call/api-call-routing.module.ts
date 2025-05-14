import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiSComponent } from './api-s/api-s.component';

const routes: Routes = [{
  path: "api-call",
  component:ApiSComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiCallRoutingModule { }

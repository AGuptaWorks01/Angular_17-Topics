import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { Sibiling1Component } from './sibiling-1/sibiling-1.component';
import { Sibiling2Component } from './sibiling-2/sibiling-2.component';

const routes: Routes = [
  {
    path: 'child', component: ChildComponent
  },
  {
    path: 'parent', component: ParentComponent
  },
  {
    path: 'sibiling-1', component: Sibiling1Component
  },
  {
    path: 'sibiling-2', component: Sibiling2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterceptorRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalStorageComponent } from './local-storage/local-storage.component';

const routes: Routes = [
  {
    path: 'lcoalStorage',
    component:LocalStorageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudLocalStorageRoutingModule { }

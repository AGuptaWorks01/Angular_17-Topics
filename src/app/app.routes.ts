import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'comp-interaction',
        loadChildren: () => import('./interaction/interceptor.module').then(m => m.InterceptorModule)
    },
    {
        path: 'data-binding',
        loadChildren: () => import('./data-binding/data-binding.module').then(m => m.DataBindingModule)
    },
    {
        path: "forms",
        loadChildren: () => import('./forms/forms.module').then(m => m.MyFormsModule)
    },
    {
        path: "calls",
        loadChildren: () => import('./api-call/api-call.module').then(m => m.ApiCallModule)
    },
    {
        path: "crud",
        loadChildren: () => import('./crud-local-storage/crud-local-storage.module').then(m => m.CrudLocalStorageModule)
    }
];

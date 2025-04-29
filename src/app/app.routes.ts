import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'comp-interaction',
        loadChildren: () => import('./interceptor/interceptor.module').then(m => m.InterceptorModule)
    },
    {
        path: 'data-binding',
        loadChildren: () => import('./data-binding/data-binding.module').then(m => m.DataBindingModule)
    },
    {
        path: "forms",
        loadChildren: () => import('./forms/forms.module').then(m => m.MyFormsModule)
    }
];

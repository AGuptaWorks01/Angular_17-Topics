import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'comp-interaction',
        loadChildren: () => import('./interceptor/interceptor.module').then(m => m.InterceptorModule)
    }
];

import { Routes } from '@angular/router';
import { BaseRoutes } from './base.routes';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AppLayoutComponent } from './shared/components/layouts/app-layout/app-layout.component';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: BaseRoutes.HOME,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
    ],
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: BaseRoutes.HOME,
        loadChildren: () =>
          import('./views/home/home.module').then((m) => m.HomeModule)
      }
    ]
  }

]

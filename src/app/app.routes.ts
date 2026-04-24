import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login').then(c => c.Login)
  },
  {
    path: 'register',
    loadComponent: () => import('./signup/signup').then(c => c.Signup)
  },
//   {
//     path: 'admin',
//     loadComponent: () => import('./admin/admin').then(c => c.Admin)
//   },
  {
    path: 'customer',
    loadComponent: () => import('./customer/customer').then(c => c.Customer)
  }
];
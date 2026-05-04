import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login').then((c) => c.Login),
  },
  {
    path: 'register',
    loadComponent: () => import('./signup/signup').then((c) => c.Signup),
  },

  // ✅ ADMIN
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin').then((c) => c.Admin),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./admin/components/dashboard/dashboard').then((c) => c.Dashboard),
      },
      {
        path: 'category', // ✅ ADD THIS
        loadComponent: () =>
          import('./admin/components/post-category/post-category').then((c) => c.PostCategory),
      },
    ],
  },

  {
    path: 'customer',
    loadComponent: () => import('./customer/customer').then((c) => c.Customer),
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

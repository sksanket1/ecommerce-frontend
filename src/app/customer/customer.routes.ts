import { RouterModule, Routes } from '@angular/router';
import { Customer } from './customer';
import { Dashboard } from './components/dashboard/dashboard';

const routes: Routes = [
  { path: '', component: Customer },
  { path: 'dashboard', component: Dashboard },
];

export const AdminRoutes = RouterModule.forChild(routes);

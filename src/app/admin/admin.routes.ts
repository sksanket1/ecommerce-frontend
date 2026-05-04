import { RouterModule, Routes } from '@angular/router';
import { Admin } from './admin';
import { Dashboard } from './components/dashboard/dashboard';
import { PostCategory } from './components/post-category/post-category';

const routes: Routes = [
  { path: '', component: Admin },
  { path: 'dashboard', component: Dashboard },
  { path: 'category', component: PostCategory },
];

export const AdminRoutes = RouterModule.forChild(routes);

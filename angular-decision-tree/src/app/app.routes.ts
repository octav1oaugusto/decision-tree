import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { TreeDiagramComponent } from '../components/tree-diagram/tree-diagram.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tree', component: TreeDiagramComponent },
];

export default routes;

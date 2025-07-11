import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { CategoriesListComponent } from './pages/categories/categories-list.component/categories-list.component';
import { BrandsListComponent } from './pages/brands/brands-list.component/brands-list.component';
import { BrandsCreateComponent } from './pages/brands/brands-create.component/brands-create.component';

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'categories',
    component: CategoriesListComponent,
  },
  {
    path: 'brands',
    component: BrandsListComponent,
  },
  {
    path: 'brands/create',
    component: BrandsCreateComponent,
  },
  //Ruta de inicio
  {
    path: '', //ruta raiz
    redirectTo: 'home', // Reirigir a la ruta home
    pathMatch: 'full', //Hacer que la ruta sea externa
  },
];

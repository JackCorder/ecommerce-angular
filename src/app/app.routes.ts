import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

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
  //Ruta de inicio
  {
    path: '', //ruta raiz
    redirectTo: 'home', // Reirigir a la ruta home
    pathMatch: 'full', //Hacer que la ruta sea externa
  },
];

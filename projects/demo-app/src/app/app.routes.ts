import { Routes } from '@angular/router';
import { DiccionarioPageComponent } from './pages/diccionario-page.component';
import { HomePageComponent } from './pages/home-page.component';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: 'home', component: HomePageComponent },
	{ path: 'diccionario', component: DiccionarioPageComponent },
	{ path: '**', redirectTo: 'home' },
];

import { Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { TareasComponentComponent } from './components/tareas-component/tareas-component.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component : HomeComponentComponent},
    {path: 'tareas', component : TareasComponentComponent}  
];


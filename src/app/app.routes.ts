import { Routes } from '@angular/Router';
import { ToDoPageComponent } from "app/to-do-page/to-do-page.component";

export const routeConfig: Routes = [
    { path: '', redirectTo: 'todo', pathMatch:'full'}, 
    { path:'todo', component: ToDoPageComponent }
]
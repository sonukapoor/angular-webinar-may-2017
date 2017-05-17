import { Routes } from '@angular/Router';
import { ToDoPageComponent } from "app/to-do-page/to-do-page.component";
import { AboutComponent } from 'app/about/about.component';
import { ContactComponent } from 'app/contact/contact.component';
import { ToDoDetailsComponent } from 'app/to-do-details/to-do-details.component'; 
import { MissionComponent } from 'app/mission/mission.component';
import { ClientsComponent } from 'app/clients/clients.component'; 


export const routeConfig: Routes = [
    { path: '', redirectTo: 'todo', pathMatch:'full'}, 
    { path:'todo', component: ToDoPageComponent },
    { path: 'todo-details/:id', component: ToDoDetailsComponent}, 
    { path:'about', component: AboutComponent, 
        children: [
            {path:'mission', component: MissionComponent },
            {path:'clients', component: ClientsComponent },
        ]},
    { path: 'contact', component: ContactComponent}
]
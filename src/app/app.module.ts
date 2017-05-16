import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { GenericInputComponent } from './generic-input/generic-input.component';
import { TitlecasePipe } from './titlecase.pipe';

import { ToDoService } from './to-do.service';
import { routeConfig } from './app.routes';
import { ToDoPageComponent } from "app/to-do-page/to-do-page.component";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ToDoDetailsComponent } from './to-do-details/to-do-details.component';
import { MissionComponent } from './mission/mission.component';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    GenericInputComponent,
    ToDoPageComponent, 
    TitlecasePipe, AboutComponent, ContactComponent, ToDoDetailsComponent, MissionComponent, ClientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

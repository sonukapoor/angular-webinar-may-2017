import { Component } from '@angular/core';
import { ToDoService } from './to-do.service';
import { Store } from '@ngrx/store';
import { AppStore } from './store';
import { go } from '@ngrx/router-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Things To Do';
  
  thingsCompleted = [
    'Learn TypeScript'
  ];

  link(url) {
    const action = go(url);

    this.store.dispatch(action);
  }

  constructor(private store: Store<AppStore>) { }
  

  // summary(): string {
  //   return `${this.thingsToDo.length} to do / ${this.thingsCompleted.length} done`;
  // }
}

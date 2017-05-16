import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Things To Do';
  thingsToDo = [
    'Learn JavaScript',
    'Learn Angular',
    'Learn Redux'
  ];
  thingsCompleted = [
    'Learn TypeScript'
  ];

  summary(): string {
    return `${this.thingsToDo.length} to do / ${this.thingsCompleted.length} done`;
  }
}

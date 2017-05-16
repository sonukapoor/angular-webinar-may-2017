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
    'Learn Redux',
    'Learn Patience'
  ];
  thingsCompleted = [
    'Learn TypeScript'
  ];

  onNewItem(item: string) {
    this.thingsToDo.push(item);
  }

  summary(): string {
    return `${this.thingsToDo.length} to do / ${this.thingsCompleted.length} done`;
  }
}

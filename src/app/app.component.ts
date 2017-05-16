import { Component } from '@angular/core';
import { ToDoService } from './to-do.service'; 

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

  constructor(private todoService: ToDoService) {}

  onNewItem(item: string) {
    this.todoService.addItem(item);
  }

  // summary(): string {
  //   return `${this.thingsToDo.length} to do / ${this.thingsCompleted.length} done`;
  // }
}

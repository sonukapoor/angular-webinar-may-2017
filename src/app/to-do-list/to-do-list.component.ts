import { Component, OnInit, Input } from '@angular/core';
import { ToDoService } from '../to-do.service'; 
import { Store } from '@ngrx/store';
import { AppStore } from '../store';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  thingsToDo = this.store.select('thingsToDo')

  constructor(
    private toDoService: ToDoService,
    private store: Store<AppStore>) {

   }

  ngOnInit() {
    //this.thingsToDo = this.toDoService.getTasks();
    // this.toDoService.getTasks().subscribe((newItems) => {
    //   this.thingsToDo = newItems;
    // });
  }

}

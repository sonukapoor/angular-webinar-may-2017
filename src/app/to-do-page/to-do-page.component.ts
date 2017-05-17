import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { Store } from '@ngrx/store';
import { AppStore } from '../store';
import { addThingToDo } from '../actions/add-things-to-do';

@Component({
  selector: 'app-to-do-page',
  templateUrl: './to-do-page.component.html',
  styleUrls: ['./to-do-page.component.css']
})
export class ToDoPageComponent implements OnInit {

  ngOnInit() {
  }
  constructor(
    private todoService: ToDoService,
    private store: Store<AppStore>) {}

  onNewItem(item: string) {
    this.store.dispatch(addThingToDo(item))
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  @Input() thingsToDo = Observable.of([]);

  constructor(private toDoService: ToDoService) {

   }

  ngOnInit() {
    //this.thingsToDo = this.toDoService.getTasks();
    // this.toDoService.getTasks().subscribe((newItems) => {
    //   this.thingsToDo = newItems;
    // });
  }

}

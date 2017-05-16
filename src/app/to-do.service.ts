import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ToDoService {

  changes: BehaviorSubject<string[]> = new BehaviorSubject([]);
  thingsToDo: string [] = [];
  constructor() { }

  addItem(item:string) {
    this.thingsToDo.push(item);
    this.changes.next(this.thingsToDo);
  }

  getTasks() {
    return this.changes;
    //return this.thingsToDo;
    // Return some kind of EventEmitter
  }

}

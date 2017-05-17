import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; 
import { CustomValidators } from './../custom-validators';


@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.css']
})
export class GenericInputComponent implements OnInit {

  @Output() newItem: EventEmitter<string> = new EventEmitter();
  textEntryFormControl: FormControl; // our input field
  textEntryForm: FormGroup; // our Form

  constructor(private builder: FormBuilder) {
    this.textEntryFormControl = new FormControl('', [CustomValidators.timeFormat]);
    this.textEntryForm = builder.group({
      textEntry: this.textEntryFormControl
    }); 
   }

  ngOnInit() {
  }

  addToDo() {
    this.newItem.emit(this.textEntryFormControl.value);
    this.textEntryForm.reset();
  }

}

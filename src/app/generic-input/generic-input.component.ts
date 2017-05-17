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
  textEntryForm: FormGroup; // our Form

  constructor(private builder: FormBuilder) {
    this.textEntryForm = builder.group({
      textEntryFormControl: ['', Validators.compose([CustomValidators.timeFormat, Validators.required])]
    }); 
   }

  ngOnInit() {
  }

  addToDo() {
    //this.newItem.emit(this.textEntryFormControl.value);
    console.log('this.textEntryForm.value.textEntryFormControl = >', this.textEntryForm.value.textEntryFormControl);
    console.log('this.textEntryForm.get(textEntryFormControl).value', this.textEntryForm.get('textEntryFormControl').value) ;
    this.newItem.emit(this.textEntryForm.get('textEntryFormControl').value);
    this.textEntryForm.reset();
  }

}

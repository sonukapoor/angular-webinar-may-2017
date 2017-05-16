import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.css']
})
export class ToDoDetailsComponent implements OnInit {
  id: number;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    })
  }

}

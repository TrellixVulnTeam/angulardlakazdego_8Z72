import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson32',
  templateUrl: './lesson32.component.html',
  styleUrls: ['./lesson32.component.css']
})
export class Lesson32Component implements OnInit {

  title = 'Lesson#32 Two way binding';
  job = ' Software Developer';
  skills = 'Angular developer';

  constructor() { }

  ngOnInit(): void {
  }

}

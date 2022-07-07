import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson43',
  templateUrl: './lesson43.component.html',
  styleUrls: ['./lesson43.component.css']
})
export class Lesson43Component implements OnInit {

  title = 'Lesson #43';

  toDo;
  constructor() {
  this.toDo = ['Cleaning', 'Working', 'Job'];
  }

  addNewJob(job: string) {
  this.toDo.push(job)}

  ngOnInit(): void {
  }

}

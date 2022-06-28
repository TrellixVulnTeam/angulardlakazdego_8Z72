import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson34new',
  templateUrl: './lesson34new.component.html',
  styleUrls: ['./lesson34new.component.css']
})
export class Lesson34newComponent implements OnInit {

  title = 'New lesson 34';
  tasksList: string[] = [];

  addTask(task: string) {
    this.tasksList.push(task);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

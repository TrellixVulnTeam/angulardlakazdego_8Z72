import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Lesson39Component } from './lesson39/lesson39.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  title = 'Content Component';

  @Input()
  tasks: string[] = [];

  getTasks(task: string[]) {
    this.tasks = task;
  }

 
  constructor() { }

  ngOnInit(): void {

    
  }

}

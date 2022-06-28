import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson35child2',
  templateUrl: './lesson35child2.component.html',
  styleUrls: ['./lesson35child2.component.css']
})
export class Lesson35child2Component implements OnInit {

  title = "Child 2 Component";

 @Input()
 tasks: string[] = [];

  receivedTasks(task: string): void {
    this.tasks.push(task);
  }


  constructor() { }

  ngOnInit(): void {
  }

}

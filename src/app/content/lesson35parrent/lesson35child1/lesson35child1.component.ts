import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lesson35child1',
  templateUrl: './lesson35child1.component.html',
  styleUrls: ['./lesson35child1.component.css']
})
export class Lesson35child1Component implements OnInit {

  title= 'Child 1 Component ';

  @Input()
  tasks: string[] = []

  @Output()
  outputTask = new EventEmitter<string>();

  constructor() { }

  sentTask(task: string){
    this.outputTask.emit(task)
  }

  ngOnInit(): void {
  }

}

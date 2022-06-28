import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lesson35parrent',
  templateUrl: './lesson35parrent.component.html',
  styleUrls: ['./lesson35parrent.component.css']
})
export class Lesson35parrentComponent implements OnInit {

  title = ' Lesson #36 Component integration ';

  parentTasksArray = ['swimming', 'work', 'slip', 'shopings'];


  receviedTasksArray: string[] = [];

  receivedTask(task : string): void{
    this.receviedTasksArray.push(task);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

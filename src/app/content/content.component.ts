import { Component, OnInit, Input } from '@angular/core';

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

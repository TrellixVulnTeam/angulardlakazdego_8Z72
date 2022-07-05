import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson39-child',
  templateUrl: './lesson39-child.component.html',
  styleUrls: ['./lesson39-child.component.css']
})
export class Lesson39ChildComponent implements OnInit {

  title = 'Lesson #39 child';

  @Input()
  fromParent: string = '';

  constructor() { }

  ngOnInit(): void {
    this.title += + this.fromParent;
  }

}

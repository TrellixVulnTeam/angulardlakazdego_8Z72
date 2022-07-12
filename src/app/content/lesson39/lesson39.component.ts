import { Component, OnInit, ViewChild } from '@angular/core';
import { Lesson39ChildComponent } from './lesson39-child/lesson39-child.component';

@Component({
  selector: 'app-lesson39',
  templateUrl: './lesson39.component.html',
  styleUrls: ['./lesson39.component.css']
})
export class Lesson39Component implements OnInit {

  title = '#39 Local reference #referenceName add(input: HTMLInputElement) and ';

  localInputToSTring = '';
  addedString = 'This string added to check how to marge child branch to parent branch';

  add(input: HTMLInputElement) {
    this.localInputToSTring = input.value;

  }

  @ViewChild('childReference')
  child1: Lesson39ChildComponent = new Lesson39ChildComponent;

  constructor() { }

  ngOnInit(): void {
    this.title += this.child1.title;

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson23',
  templateUrl: './lesson23.component.html',
  styleUrls: ['./lesson23.component.css'],
})
export class Lesson23Component implements OnInit {
  title = 'Data display Directive  *ngFor #23 and #24 INDEX';
  days = [
    'Monday ',
    'Tuesday',
    'Wenesday',
    'Thuesday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  cats = new Array<Cat>();

  constructor() {
    this.cats.push(
      new Cat('Kitty', 12),
      new Cat('Simba', 2),
      new Cat('Kocur', 3)
    );
  }

  ngOnInit(): void {}
}

class Cat {
  constructor(public name: string, public age: number) {}
}

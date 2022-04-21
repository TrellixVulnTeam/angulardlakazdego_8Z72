import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson25',
  templateUrl: './lesson25.component.html',
  styleUrls: ['./lesson25.component.css']
})
export class Lesson25Component implements OnInit {

  title = 'Dispaly Data *ngIf and ng-container';
  isDisplayed = false;

  cats = new Array<Cat>();


  constructor() {
    this.cats.push(
      new Cat('Kitty', 12),
      new Cat('Simba', 2),
      new Cat('Kocur', 3)
    );
   }

  ngOnInit(): void {
  }

}

class Cat {
  constructor(public name: string, public age: number) {}
}

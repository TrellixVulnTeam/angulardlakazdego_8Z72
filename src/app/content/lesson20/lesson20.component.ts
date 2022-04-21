import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson20',
  templateUrl: './lesson20.component.html',
  styleUrls: ['./lesson20.component.css'],
})
export class Lesson20Component implements OnInit {
  title = 'Interpolation Component #20 and #21 with a pipe';
  pi = Math.PI;
  date = new Date();

  cat = new Cat('Kitty', 12);
  kitty = Cat;
  

  constructor() {}

  showMyCat(): string {
    return ('My cat name is ' + this.cat.name + ' and has  ' + this.cat.age + ' years old' );
  }
  ngOnInit(): void {}
}

class Cat {
  constructor(public name: string, public age: number) {}
}

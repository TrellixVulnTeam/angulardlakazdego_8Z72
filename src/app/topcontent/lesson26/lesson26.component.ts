import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson26',
  templateUrl: './lesson26.component.html',
  styleUrls: ['./lesson26.component.css']
})
export class Lesson26Component implements OnInit {

  title = 'Display data with *ngIf; then; elese lesson #26';

  cats = new Array<Cat>();
  emptyCats : Array<Cat>[] = [];

  initCats(){
    this.cats.push(
      new Cat('Kitty', 12),
      new Cat('Simba', 5),
      new Cat('Kocur', 5),
      new Cat('Puszek', 4),
      new Cat('Azor', 9),
      new Cat('Pluto', 15),
      new Cat('Artemiz', 11)
    );
  }


  constructor() {
    this.initCats();
   }

   showCats(){
    this.initCats();
   }

   hideCats(){
    this.cats = [];
   }

  ngOnInit(): void {

  }

}

class Cat {
  constructor(public name: string, public age: number) {}
}

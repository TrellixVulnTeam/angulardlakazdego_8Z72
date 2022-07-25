import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Animal } from 'src/app/content/lesson41/animal';

@Component({
  selector: 'app-lesson41',
  templateUrl: './lesson41.component.html',
  styleUrls: ['./lesson41.component.css']
})
export class Lesson41Component implements OnInit {


  title = 'Lesson #41 lifecycle hooks';
  delete = '';

  titleForChild = 'Child1 exercise inputText from Parent';

  cat = new Animal('Kitty','Cat');
  dog = new Animal('Champion', 'Dog');

  animals: Animal[] = [ new Animal('Ara', 'Parrot'),
                        new Animal('Piggi', 'Pig')
  ];

  show: boolean = true;

  changeTitle() {
    this.title = 'New Title ';
}
  changeAnimal() {
    this.animals.push(this.cat)
  }

  doNothing() { }

  deleteComponent() {
    this.delete = 'Create';
  }

  constructor() { }

  ngOnInit(): void {
    this.animals.push(this.dog);
    this.delete = 'Delete';
  }

}

  


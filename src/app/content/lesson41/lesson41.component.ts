import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Animal } from 'src/app/content/lesson41/animal';

@Component({
  selector: 'app-lesson41',
  templateUrl: './lesson41.component.html',
  styleUrls: ['./lesson41.component.css']
})
export class Lesson41Component implements OnInit {


  title = 'Lesson #41 lifecycle hooks';

  titleForChild = 'Child1 exercise inputText from parrent';

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

  deleteComponent() { }


  constructor( ) { }

  /**
   * It check if binded filds of component changed!
   * It starts before ngOnInit();
   * A reference mast change it
   */
  

  ngOnInit(): void {

    this.animals.push(this.dog);
  }

}

  


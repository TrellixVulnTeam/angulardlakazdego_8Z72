import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Animal } from 'src/app/content/lesson41/animal'

@Component({
  selector: 'app-lesson41-child1',
  templateUrl: './lesson41-child1.component.html',
  styleUrls: ['./lesson41-child1.component.css']
})
export class Lesson41Child1Component implements OnInit, OnChanges, DoCheck {

  title = 'Lesson41 Child component';

  @Input()
  inputText = '';

  @Input()
  animals: Animal[] = [];


  constructor() { }

    ngDoCheck(): void {
        console.log('Method ngDoCheck not implemented [ 3 ].');
    }

    ngOnChanges(changes: SimpleChanges): void {
      console.log('Implemented ngOnChanges() method ! [ 1 ]');
      console.log('Changes: ' + changes);
  }


  ngOnInit(): void {

    console.log('ngOnInit [ 2 ] ');
  }

}

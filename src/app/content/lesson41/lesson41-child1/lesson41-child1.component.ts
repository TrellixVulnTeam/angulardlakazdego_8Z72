import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/app/content/lesson41/animal'

@Component({
  selector: 'app-lesson41-child1',
  templateUrl: './lesson41-child1.component.html',
  styleUrls: ['./lesson41-child1.component.css']
})
export class Lesson41Child1Component implements OnInit {

  title = 'Lesson41 Child component';

  @Input()
  inputText = '';

  @Input()
  animals: Animal[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}

import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson31',
  templateUrl: './lesson31.component.html',
  styleUrls: ['./lesson31.component.css']
})
export class Lesson31Component implements OnInit {

  title = 'Lesson#31 Event binding '
  colorClass = 'first';
  inputText='';
  move = 0;

  value = 'by *ngFor';

  isDisable = true;

  constructor() { }

  onFocus(){
    this.colorClass = 'second';
  }

  onClick(event: any){
    console.log(event);
  }

  mouseMove(event: MouseEvent){
    this.move++;
    console.log('x= '+ event.clientX + ' y= '+ event.clientY);
  }

  paste(){
   this.inputText = 'Do nat past it, just write the text';
  }

  change(){
    this.isDisable = false;
  }

  ngOnInit(): void {
  }

}

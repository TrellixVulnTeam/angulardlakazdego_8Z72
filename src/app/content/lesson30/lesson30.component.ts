import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson30',
  templateUrl: './lesson30.component.html',
  styleUrls: ['./lesson30.component.css']
})
export class Lesson30Component implements OnInit {

  title = 'Lesson30 Property Binding ';
  inputText = 'Text';
  maxLength = 3;
  colorClass = 'color';
  logoURl = '';
  mousemove='Hi Mouse is out of this';

  isDisable = true;

  constructor() { 
    setTimeout(()=>{
      this.isDisable = false;
    },1000)
  }

  change(){
    this.inputText = 'Colour and taxt changed';
    this.maxLength = 10;
    this.colorClass = 'color2';
    this.logoURl = 'https://angular.io/assets/images/logos/angular/angular.png';
  }

  ngOnInit(): void {
  }

}

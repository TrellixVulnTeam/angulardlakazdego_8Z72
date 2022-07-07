import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ComChild1Component } from './com-child1/com-child1.component';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  title = 'Skills Communication between components @Input(), @Output()';
  animalsParent: string[] = ['Dog','Cat','Bird','Fish']

  processedFromChild1: string[] = [];

  @ViewChild('#referenceChild1')
  child1Object: ComChild1Component = new ComChild1Component;

  arrayFromReferencedobject: string[] = this.child1Object.processedAnimals;

  receivedProcessedArray(animal: string[]): void {
    this.processedFromChild1 = animal;
    console.log('Array-----------' + this.arrayFromReferencedobject[0]);
    this.printInheritedArray();
    console.log('Check !!!!!!!!!!!!');
  }

  printInheritedArray(): void {
    for (var i = 0; i < this.arrayFromReferencedobject.length; i++) {
      console.log('Array+++++'+this.arrayFromReferencedobject[i]);
    }
  }

  constructor() { }

  ngOnInit(): void {

    
    }

  }



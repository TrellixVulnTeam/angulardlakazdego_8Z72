import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ComChild2Component } from './com-child2/com-child2.component';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  title = 'Skills Communication between components @Input(), @Output()';
  animalsParent: string[] = ['Dog','Cat','Bird','Fish']

  processedFromChild1: string[] = [];

  @ViewChild('#referenceChild2')
  child2Object: ComChild2Component = new ComChild2Component;

  arrayFromReferencedobject: string[] = this.child2Object.processesFromParrent;

  receivedProcessedArray(animal: string[]): void {
    this.processedFromChild1 = animal;
    console.log('Array-----------' + this.arrayFromReferencedobject[0]);
    this.printInheritedArray();
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



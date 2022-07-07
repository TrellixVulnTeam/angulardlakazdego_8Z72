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

  processedFromChild1: Array<string> = [];

  @ViewChild('child2Reference')
  child2Object: ComChild2Component = new ComChild2Component;

  arrayFromReferencedobject: string[] = this.child2Object.processesFromParrent;

  receivedProcessedArray(animal: string[]): void {
    this.processedFromChild1 = animal;
    console.log('Array-----------' + this.arrayFromReferencedobject[0]);
    this.printInheritedArray();
    console.log('Check !!!!!!!!!!!!');
  }

  printInheritedArray(): void {
    for (var i = 0; i < this.child2Object.processesFromParrent.length; i++) {
      console.log('Array+++++' + this.arrayFromReferencedobject.push(this.child2Object.processesFromParrent[i]));
    }
  }

  constructor() { }

  ngOnInit(): void {

    
    }

  }



import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  title = 'Skills Communication between components @Input(), @Output()';
  animalsParent: any[] = ['Dog','Cat','Bird','Fish']

  processedFromChild1: string[] = [];

  receivedProcessedArray(animal: string[]): void {
    this.processedFromChild1 = animal;
  }

  constructor() { }

  ngOnInit(): void {

  }

}

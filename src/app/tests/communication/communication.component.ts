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

  receivedProcessedArray(event: string[]): void {
    this.processedFromChild1 = event;
  }

  constructor() { }

  ngOnInit(): void {

  
    console.log('receivedProcessedArray ' + this.processedFromChild1.length);
    
  }

}

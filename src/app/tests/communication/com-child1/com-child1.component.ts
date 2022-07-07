import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-com-child1',
  templateUrl: './com-child1.component.html',
  styleUrls: ['./com-child1.component.css']
})
export class ComChild1Component implements OnInit {

  title = 'Communication Child 1';

  processedAnimals: string[] = [];

  @Input()
  animalsFromParent: string[] = [];

  @Output()
  emitAnimalProccessed = new EventEmitter<string[]>();

  constructor() { }

  processAnimalArray(data: string[]) {
    for (var i = 0; i < data.length; i++) {
      this.processedAnimals[i].concat(' Processed');
    }
  }

  ngOnInit(): void {
    this.processAnimalArray(this.animalsFromParent);
    this.emitAnimalProccessed.emit(this.processedAnimals);
  }
}

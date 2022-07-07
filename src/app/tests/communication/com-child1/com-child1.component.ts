import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-com-child1',
  templateUrl: './com-child1.component.html',
  styleUrls: ['./com-child1.component.css']
})
export class ComChild1Component implements OnInit {

  title = 'Communication Child 1';

   @Input()
  animalsFromParent: string[] = [];

  @Output()
  emitAnimalProccessed = new EventEmitter<string[]>();

  processedAnimals: string[]; 

  constructor() {
    this.processedAnimals  = [];
}

  processAnimalFromParent(animal: string[]) {
    for (var i = 0; i < animal.length; i++) {
      this.processedAnimals.push(animal[i].concat(' Processed'));
    }
    
  }

  ngOnInit(): void {
    this.processAnimalFromParent(this.animalsFromParent);
    this.emitAnimalProccessed.emit(this.processedAnimals);
  }
}

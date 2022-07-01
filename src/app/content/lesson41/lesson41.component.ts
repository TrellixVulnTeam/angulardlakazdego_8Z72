import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lesson41',
  templateUrl: './lesson41.component.html',
  styleUrls: ['./lesson41.component.css']
})
export class Lesson41Component implements OnInit, OnChanges {


  title = 'Lesson #41 lifecycle hooks';

  constructor() { }

  /**
   * It check if binded filds of component changed!
   * It starts before ngOnInit();
   * A reference mast change it
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Implemented ngOnChanges() method !');
  }

  ngOnInit(): void {
  }

}

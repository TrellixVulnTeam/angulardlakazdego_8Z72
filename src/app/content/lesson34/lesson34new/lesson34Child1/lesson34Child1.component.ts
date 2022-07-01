import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  title = "Component 1";

  task = "";

  @Output()
  emitTasks = new EventEmitter<string>();

  addTask() {
    this.emitTasks.emit(this.task);
    this.task = "";
  }
  constructor() { }

  ngOnInit(): void {
  }

}

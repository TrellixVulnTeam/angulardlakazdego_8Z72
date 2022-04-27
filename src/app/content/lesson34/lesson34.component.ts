import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson34',
  templateUrl: './lesson34.component.html',
  styleUrls: ['./lesson34.component.css']
})
export class Lesson34Component implements OnInit {

  title = 'Lesson #34 List of Tasks';

  newTask = '';

  tasksToDo = Array<string>(); 
  tasksDone: string[] = [];

  constructor() { }

  addTask(){
    this.tasksToDo.push(this.newTask);
    this.newTask = '';
  
  }

  deleteTasks(task: string){
    this.tasksToDo = this.tasksToDo.filter(t => t !== task);
  }

  doneTasks(task: string){
    this.tasksDone.push(task);
    this.deleteTasks(task)
  }

  ngOnInit(): void {

  }

}

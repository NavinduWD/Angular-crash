import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text!: string;
  day!: string;
  reminder: boolean = false;

  constructor() {}

  onAdd(): void {
    if(!this.text){
      alert('Please add a task');
      return;
    }

    if(!this.day){
      alert('Please add a day');
      return;
    }

    const newTask= {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;

  }
}

import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button'

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule,ButtonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  title = 'todo';

  tasks: String[] = [
    'Go for a Walk',
    'Recharge Mobile',
    'Read a book',
    'Organize workplace',
  ];

  isUpdate: Boolean = true;

  newtask: String = '';

  working_index: number = -1;

  onkeyup(value: String) {
    this.newtask = value;
  }

  addtask(task: String) {
    if (task != '') {
      this.tasks.push(task);
      this.newtask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  updateTask(index: number) {
    this.newtask = this.tasks[index];
    this.working_index = index;
    this.isUpdate = false;
  }

  editTask(task: String) {
    if (this.working_index != -1) {
      this.tasks[this.working_index] = this.newtask;
      this.working_index = -1;
      this.isUpdate = true;
      this.newtask = '';
    }
  }
}

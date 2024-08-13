import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks = [
    { id: 1, title: 'Complete Angular course', done: false },
    { id: 2, title: 'Build a sample app', done: false }
  ];

  addTask(taskTitle: string) {
    this.tasks.push({ id: this.tasks.length + 1, title: taskTitle, done: false });
  }

  markAsDone(task: any) {
    task.done = true;
  }
}

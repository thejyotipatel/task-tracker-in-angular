import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tesk';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;
  filter: 'all' | 'active' | 'done' = 'all';
  constructor() {}

  ngOnInit(): void {}

  get task() {
    if (this.filter === 'all') {
      return this.tasks;
    }
    return this.tasks.filter((item) =>
      this.filter === 'done' ? item.reminder : !item.reminder
    );
  }

  deleteTask = (task: Task) => {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  };

  toggleReminder = (task: Task) => {
    task.reminder = !task.reminder;
  };

  addTask = (task: Task) => {
    this.tasks.unshift(task);
  };
}

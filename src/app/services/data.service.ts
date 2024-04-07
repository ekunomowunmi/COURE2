import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tasks: Task[] = [
    {
      id: 1,
      status: 'pending',
      title: 'Fix Bugs',
      dueDate: new Date(Date.now()),
      priority: 'HIGH',
      description: 'Fix all bugs'

    },
    {
      id: 2,
      status: 'pending',
      title: 'Fix Issues',
      dueDate: new Date(Date.now()),
      priority: 'LOW',
      description: 'Fix all Issues'

    },
    {
      id: 3,
      status: 'inprogress',
      title: 'Fix Bugs',
      dueDate: new Date(Date.now()),
      priority: 'HIGH',
      description: 'Fix all bugs'

    },
    {
      id: 4,
      status: 'completed',
      title: 'Fix Issues',
      dueDate: new Date(Date.now()),
      priority: 'LOW',
      description: 'Fix all Issues'

    }
  ];
  tasks$ = new BehaviorSubject<Task[]>(this.tasks)
  constructor() {
    const storageTasks = (localStorage.getItem('task'))

    if (storageTasks) {
      const parsedTasks = JSON.parse(storageTasks)
      this.tasks = [...parsedTasks];
      console.log(parsedTasks)
    } else {
      localStorage.setItem('task', JSON.stringify(this.tasks))

    }
  }



  addTask(task: Task) {
    task.id = Date.now()
    task.status = 'pending'
    this.tasks = [task, ...this.tasks];
    this.tasks$.next(this.tasks)
    localStorage.setItem('task', JSON.stringify(this.tasks))
  }

  removeTask(taskId: any) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    localStorage.setItem('task', JSON.stringify(this.tasks))
    this.tasks$.next(this.tasks)
  }

  editTask(task: Task) {
    const currentIndex = this.tasks.findIndex(alltask => alltask.id == task.id);
    let updatedItems = [
      ...this.tasks.slice(0, currentIndex), // Copy items before the replaced item
      task, // Replace the item at the specified index
      ...this.tasks.slice(currentIndex + 1) // Copy items after the replaced item
    ];
    this.tasks = [...updatedItems];
    localStorage.setItem('task', JSON.stringify(this.tasks))
    this.tasks$.next(this.tasks)
  }

  getAllTasks() {
    return this.tasks;
  }

  getPendingTasks() {
    return this.tasks.filter(task => task.status == 'pending')
  }

  getTasksInProgress() {
    return this.tasks.filter(task => task.status == 'inprogress')
  }

  getCompletedTasks() {
    return this.tasks.filter(task => task.status == 'completed')
  }

}

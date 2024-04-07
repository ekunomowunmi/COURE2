// task.service.spec.ts

import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { Task } from '../models/task.model';

describe('DataService', () => {
    let service: DataService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DataService);
    });

    it('should create a new task', () => {
        const newTask: Task = {
            id: 1,
            status: 'pending',
            title: 'Fix Bugs',
            dueDate: new Date(Date.now()),
            priority: 'HIGH',
            description: 'Fix all bugs'

        };
        service.addTask(newTask)
        const tasks = service.getAllTasks();
        expect(tasks).toContain(newTask);
    });

    it('should edit an existing task', () => {
        const newTask: Task = {
            id: 1,
            status: 'completed',
            title: 'Fix Bugs',
            dueDate: new Date(Date.now()),
            priority: 'HIGH',
            description: 'Fix all bugs'

        };
        service.editTask(newTask)
        const tasks = service.getAllTasks();
        expect(tasks).toContain(newTask);
    });
    it('should remove an existing task', () => {
        const deleteTask: Task = {
            id: 1,
            status: 'completed',
            title: 'Fix Bugs',
            dueDate: new Date(Date.now()),
            priority: 'HIGH',
            description: 'Fix all bugs'

        };
        service.removeTask(deleteTask)
        const tasks = service.getAllTasks();
        expect(tasks).not.toContain(deleteTask);
    });

    it('should get pending tasks', () => {

        const servicePendingTasks = service.getPendingTasks();
        const pendingTasks = service.tasks.filter(task => task.status == 'pending')
        expect(servicePendingTasks).toEqual(pendingTasks);
    });
    it('should get in progress tasks', () => {

        const serviceProgressTasks = service.getTasksInProgress();
        const progressTasks = service.tasks.filter(task => task.status == 'inprogress')
        expect(serviceProgressTasks).toEqual(progressTasks);
    });
    it('should get complddted tasks', () => {

        const serviceCompletedTasks = service.getCompletedTasks();
        const completedTasks = service.tasks.filter(task => task.status == 'completed')
        expect(serviceCompletedTasks).toEqual(completedTasks);
    });


});

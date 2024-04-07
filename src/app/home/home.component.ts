import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NewTaskComponent } from '../components/new-task/new-task.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { DataService } from '../services/data.service';
import { Task } from '../models/task.model';
import { MatSelectionList } from '@angular/material/list';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  modalRef: MdbModalRef<NewTaskComponent> | null = null;
  pendingTasks: Task[] = [];
  taskInProgress: Task[] = [];
  completedTasks: Task[] = [];
  openFilter = false;
  openDropdown = false;
  openStatus = false;
  priorityList = ['LOW', 'HIGH', 'NEUTRAL'];
  statuses = ['pending', 'inprogress', 'completed'];
  selectedPriorities: string[] = [];
  selectedStatus: string[] = [];

  @ViewChild('priorities') priorities: any
  taskDuplicate: Task[] = [];
  selectedValues: any;

  constructor(public sanitizer: DomSanitizer, private router: Router, private modalService: MdbModalService, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.tasks$.subscribe(tasks => {
      this.dataService.tasks = [...tasks]
      this.taskDuplicate = [...tasks]
      this.getDoneTasks();
      this.getPendingTasks();
      this.getTaskInProgress();
    })

  }

  gotoNewTask() {
    this.router.navigate(['/', 'new-task'])
  }

  getPendingTasks() {
    this.pendingTasks = this.dataService.getPendingTasks();
    // console.log(this.pendingTasks)
  }

  getTaskInProgress() {
    this.taskInProgress = this.dataService.getTasksInProgress()
  }

  getDoneTasks() {
    this.completedTasks = this.dataService.getCompletedTasks()
  }

  get isSelected(): boolean {
    return this.priorityList.includes(this.selectedValues);
  }

  onStatusFilter(event: any, status: any) {
    console.log(event, status);
    console.log(this.selectedValues)
    if (this.selectedStatus.indexOf(status) == -1) {
      this.selectedStatus.push(status)
    } else {
      this.selectedStatus = this.selectedStatus.filter(selStatus => selStatus != status)
    }
    this.dataService.tasks = this.selectedStatus.length > 0 ? this.taskDuplicate.filter(item => this.selectedStatus.includes(item.status)) : [...this.taskDuplicate];
    this.getDoneTasks();
    this.getPendingTasks();
    this.getTaskInProgress();
  }

  onPriorityFilter(event: any, priority: any) {
    if (this.selectedPriorities.indexOf(priority) == -1) {
      this.selectedPriorities.push(priority)
    } else {
      this.selectedPriorities = this.selectedPriorities.filter(selectedPriority => selectedPriority != priority)
    }
    this.dataService.tasks = this.selectedPriorities.length > 0 ? this.taskDuplicate.filter(item => this.selectedPriorities.includes(item.priority)) : [...this.taskDuplicate];
    this.getDoneTasks();
    this.getPendingTasks();
    this.getTaskInProgress();

    console.log(event, priority)

  }

  openModal() {
    this.modalRef = this.modalService.open(NewTaskComponent, { data: { type: 'new' } })
  }
}

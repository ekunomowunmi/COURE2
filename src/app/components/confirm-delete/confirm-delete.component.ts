import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Task } from 'src/app/models/task.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit {
  constructor(private dataService: DataService, public modalRef: MdbModalRef<ConfirmDeleteComponent>) {
  }

  task!: Task;
  id!: number;
  ngOnInit(): void {

  }

  removeTask() {
    console.log(this.id)
    this.dataService.removeTask(this.id);
    this.close();
  }

  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }
}

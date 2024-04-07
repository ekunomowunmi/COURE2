import { Component, Input } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Task } from 'src/app/models/task.model';
import { NewTaskComponent } from '../new-task/new-task.component';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  modalRef: MdbModalRef<NewTaskComponent> | null = null;
  deleteModalRef: MdbModalRef<ConfirmDeleteComponent> | null = null;

  @Input()
  task!: Task;

  /**
   *
   */
  constructor(private modalService: MdbModalService, private dataService: DataService) {

  }

  openModal() {
    this.modalRef = this.modalService.open(NewTaskComponent, {
      data: { ...this.task, type: 'edit' }
    })
  }

  openDeleteModal() {
    console.log(this.task)
    this.deleteModalRef = this.modalService.open(ConfirmDeleteComponent, {
      data: { ...this.task }
    })
  }

  moveTask() {
    if (this.task.status == 'pending') {
      this.task.status = 'inprogress';
      this.dataService.editTask(this.task)
    } else if (this.task.status == 'inprogress') {
      this.task.status = 'completed';
      this.dataService.editTask(this.task)
    } else {
      this.dataService.removeTask(this.task.id)
    }
  }

}

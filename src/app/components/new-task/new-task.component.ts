import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  userForm: any;
  type = 'new';
  title!: string;
  description!: string;
  id!: string;
  dueDate?: Date;
  priority!: 'LOW' | 'HIGH' | 'NEUTRAL';
  status?: 'pending' | 'inprogress' | 'completed'
  minDate!: Date;
  // title, description, due date, priority, and status(e.g., pending, in progress, completed
  constructor(private formBuilder: FormBuilder, private dataService: DataService, public modalRef: MdbModalRef<NewTaskComponent>) {
  }


  close(): void {
    const closeMessage = 'Modal closed';
    this.modalRef.close(closeMessage)
  }

  ngOnInit(): void {
    console.log(this.priority)
    this.minDate = new Date(Date.now())
    this.userForm = this.formBuilder.group({
      title: [this.title || '', Validators.required],
      description: [this.description || '', Validators.required],
      dueDate: [this.dueDate || '', Validators.required],
      priority: [this.priority || '', Validators.required],
    })
  }

  submitForm() {
    console.log('here', this.userForm);
    if (this.userForm?.valid) {
      console.log('Form data:', this.userForm.value);
      let form = this.userForm.value;
      if (this.id) {
        form = { id: this.id, status: this.status, ...form }
      }
      if (this.type == 'new') {
        this.dataService.addTask(form);
      } else {
        this.dataService.editTask(form)
      }
      console.log(this.dataService.getAllTasks())
      const closeMessage = 'Modal closed';
      this.modalRef.close(closeMessage)

    }
  }
}

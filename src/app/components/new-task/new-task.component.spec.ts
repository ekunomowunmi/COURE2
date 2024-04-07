import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskComponent } from './new-task.component';
import { MdbModalModule, MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NewTaskComponent', () => {
  let component: NewTaskComponent;
  let fixture: ComponentFixture<NewTaskComponent>;
  const modalRefSpy = jasmine.createSpyObj('MdbModalRef', ['close', 'dismiss']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTaskComponent],
      providers: [{ provide: MdbModalRef, useValue: modalRefSpy }],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatListModule,
        MatInputModule,
        MatNativeDateModule,
        MdbModalModule]
    });
    fixture = TestBed.createComponent(NewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit and add form to array', () => {
    let form: FormControl = new FormControl();
    form.setValue({
      title: 'Adeori',
      description: 'Adeori',
      dueDate: component.minDate,
      priority: 'HIGH',
    });
    component.userForm = form;
    component.id = new Date(Date.now()).toString();
    component.status = 'pending';
    component.submitForm();
    expect(component.closeMessage).toEqual('Modal closed')
  })
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskComponent } from './new-task.component';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

describe('NewTaskComponent', () => {
  let component: NewTaskComponent;
  let fixture: ComponentFixture<NewTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTaskComponent],
      providers: [MdbModalRef<NewTaskComponent>]
    });
    fixture = TestBed.createComponent(NewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

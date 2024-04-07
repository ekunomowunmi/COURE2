import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteComponent } from './confirm-delete.component';
import { MdbModalModule, MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ConfirmDeleteComponent', () => {
  let component: ConfirmDeleteComponent;
  let fixture: ComponentFixture<ConfirmDeleteComponent>;
  const modalRefSpy = jasmine.createSpyObj('MdbModalRef', ['close', 'dismiss']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDeleteComponent],
      providers: [{ provide: MdbModalRef, useValue: modalRefSpy }],
      imports: [FormsModule,
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
    fixture = TestBed.createComponent(ConfirmDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

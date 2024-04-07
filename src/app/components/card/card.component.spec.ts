import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      providers: [MdbModalService]
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.task = {
      id: 1,
      status: 'pending',
      title: 'Fix Bugs',
      dueDate: new Date(Date.now()),
      priority: 'HIGH',
      description: 'Fix all bugs'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

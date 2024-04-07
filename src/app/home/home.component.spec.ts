import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CardComponent } from '../components/card/card.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const modalServiceSpy = jasmine.createSpyObj('MdbModalService', ['open', 'close']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, CardComponent],
      providers: [{ provide: MdbModalService, useValue: modalServiceSpy }],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

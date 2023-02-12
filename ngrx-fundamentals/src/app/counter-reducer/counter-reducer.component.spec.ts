import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterReducerComponent } from './counter-reducer.component';

describe('CounterReducerComponent', () => {
  let component: CounterReducerComponent;
  let fixture: ComponentFixture<CounterReducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterReducerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterReducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

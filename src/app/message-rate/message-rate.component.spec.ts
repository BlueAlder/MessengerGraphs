import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRateComponent } from './message-rate.component';

describe('MessageRateComponent', () => {
  let component: MessageRateComponent;
  let fixture: ComponentFixture<MessageRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

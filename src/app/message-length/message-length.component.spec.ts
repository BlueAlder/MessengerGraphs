import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageLengthComponent } from './message-length.component';

describe('MessageLengthComponent', () => {
  let component: MessageLengthComponent;
  let fixture: ComponentFixture<MessageLengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageLengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

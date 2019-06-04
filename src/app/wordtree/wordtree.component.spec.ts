import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordtreeComponent } from './wordtree.component';

describe('WordtreeComponent', () => {
  let component: WordtreeComponent;
  let fixture: ComponentFixture<WordtreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordtreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordtreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

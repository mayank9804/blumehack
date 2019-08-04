import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SusbscriptionsComponent } from './susbscriptions.component';

describe('SusbscriptionsComponent', () => {
  let component: SusbscriptionsComponent;
  let fixture: ComponentFixture<SusbscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SusbscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SusbscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

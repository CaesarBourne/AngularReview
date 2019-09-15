import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartWebComponent } from './smart-web.component';

describe('SmartWebComponent', () => {
  let component: SmartWebComponent;
  let fixture: ComponentFixture<SmartWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

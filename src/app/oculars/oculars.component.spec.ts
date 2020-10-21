import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcularsComponent } from './oculars.component';

describe('OcularsComponent', () => {
  let component: OcularsComponent;
  let fixture: ComponentFixture<OcularsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcularsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

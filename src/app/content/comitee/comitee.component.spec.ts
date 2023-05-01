import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteeComponent } from './comitee.component';

describe('ComiteeComponent', () => {
  let component: ComiteeComponent;
  let fixture: ComponentFixture<ComiteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComiteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

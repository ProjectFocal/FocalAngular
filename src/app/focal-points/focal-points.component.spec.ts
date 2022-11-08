import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocalPointsComponent } from './focal-points.component';

describe('FocalPointsComponent', () => {
  let component: FocalPointsComponent;
  let fixture: ComponentFixture<FocalPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocalPointsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocalPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

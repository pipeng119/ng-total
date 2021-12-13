import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunImgComponent } from './run-img.component';

describe('RunImgComponent', () => {
  let component: RunImgComponent;
  let fixture: ComponentFixture<RunImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

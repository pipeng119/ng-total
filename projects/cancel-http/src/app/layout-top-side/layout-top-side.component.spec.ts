import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTopSideComponent } from './layout-top-side.component';

describe('LayoutTopSideComponent', () => {
  let component: LayoutTopSideComponent;
  let fixture: ComponentFixture<LayoutTopSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTopSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTopSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

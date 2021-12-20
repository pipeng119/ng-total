import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateEffectComponent } from './simulate-effect.component';

describe('SimulateEffectComponent', () => {
  let component: SimulateEffectComponent;
  let fixture: ComponentFixture<SimulateEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulateEffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulateEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

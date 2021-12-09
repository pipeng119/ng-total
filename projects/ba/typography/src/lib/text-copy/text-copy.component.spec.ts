import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCopyComponent } from './text-copy.component';

describe('TextCopyComponent', () => {
  let component: TextCopyComponent;
  let fixture: ComponentFixture<TextCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextCopyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

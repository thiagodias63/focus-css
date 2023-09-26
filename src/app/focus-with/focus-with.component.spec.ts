import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusWithComponent } from './focus-with.component';

describe('FocusWithComponent', () => {
  let component: FocusWithComponent;
  let fixture: ComponentFixture<FocusWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusWithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

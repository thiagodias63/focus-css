import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusInMenuComponent } from './focus-in-menu.component';

describe('FocusInMenuComponent', () => {
  let component: FocusInMenuComponent;
  let fixture: ComponentFixture<FocusInMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusInMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusInMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

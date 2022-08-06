import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradebooklistComponent } from './gradebooklist.component';

describe('GradebooklistComponent', () => {
  let component: GradebooklistComponent;
  let fixture: ComponentFixture<GradebooklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradebooklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradebooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

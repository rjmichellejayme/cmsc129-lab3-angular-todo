import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortTasksComponent } from './sort-tasks.component';

describe('SortTasksComponent', () => {
  let component: SortTasksComponent;
  let fixture: ComponentFixture<SortTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

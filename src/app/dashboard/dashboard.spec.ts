import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard'; // <-- Fix import name if needed, check class name in dashboard.ts

describe('DashboardComponent', () => { // <-- Use correct component name
  let component: DashboardComponent; // <-- Use correct component name
  let fixture: ComponentFixture<DashboardComponent>; // <-- Use correct component name

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent] // <-- Use correct component name
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent); // <-- Use correct component name
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
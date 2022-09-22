import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardReaderComponent } from './dashboard-reader.component';

describe('DashboardReaderComponent', () => {
  let component: DashboardReaderComponent;
  let fixture: ComponentFixture<DashboardReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardReaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

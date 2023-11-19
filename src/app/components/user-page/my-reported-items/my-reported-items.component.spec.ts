import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReportedItemsComponent } from './my-reported-items.component';

describe('MyReportedItemsComponent', () => {
  let component: MyReportedItemsComponent;
  let fixture: ComponentFixture<MyReportedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyReportedItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReportedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

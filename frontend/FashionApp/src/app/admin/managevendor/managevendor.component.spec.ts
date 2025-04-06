import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagevendorComponent } from './managevendor.component';

describe('ManagevendorComponent', () => {
  let component: ManagevendorComponent;
  let fixture: ComponentFixture<ManagevendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagevendorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagevendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

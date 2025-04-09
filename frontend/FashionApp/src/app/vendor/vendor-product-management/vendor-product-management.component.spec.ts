import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorProductManagementComponent } from './vendor-product-management.component';

describe('VendorProductManagementComponent', () => {
  let component: VendorProductManagementComponent;
  let fixture: ComponentFixture<VendorProductManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorProductManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorProductManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

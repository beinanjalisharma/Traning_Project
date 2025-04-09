import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsignupComponent } from './vsignup.component';

describe('VsignupComponent', () => {
  let component: VsignupComponent;
  let fixture: ComponentFixture<VsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VsignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

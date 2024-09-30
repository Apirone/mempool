import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprLogoComponent } from './apr-logo.component';

describe('AprLogoComponent', () => {
  let component: AprLogoComponent;
  let fixture: ComponentFixture<AprLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AprLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

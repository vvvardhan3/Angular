import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleCallBackComponent } from './google-call-back.component';

describe('GoogleCallBackComponent', () => {
  let component: GoogleCallBackComponent;
  let fixture: ComponentFixture<GoogleCallBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleCallBackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleCallBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

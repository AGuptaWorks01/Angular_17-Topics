import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSComponent } from './api-s.component';

describe('ApiSComponent', () => {
  let component: ApiSComponent;
  let fixture: ComponentFixture<ApiSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwComponent } from './sw.component';

describe('SwComponent', () => {
  let component: SwComponent;
  let fixture: ComponentFixture<SwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

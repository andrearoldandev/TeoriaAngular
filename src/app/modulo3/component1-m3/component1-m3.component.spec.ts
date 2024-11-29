import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1M3Component } from './component1-m3.component';

describe('Component1M3Component', () => {
  let component: Component1M3Component;
  let fixture: ComponentFixture<Component1M3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Component1M3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component1M3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

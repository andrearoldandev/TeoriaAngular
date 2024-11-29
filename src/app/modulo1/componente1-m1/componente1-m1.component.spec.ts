import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente1M1Component } from './componente1-m1.component';

describe('Componente1M1Component', () => {
  let component: Componente1M1Component;
  let fixture: ComponentFixture<Componente1M1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente1M1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente1M1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente1M2Component } from './componente1-m2.component';

describe('Componente1M2Component', () => {
  let component: Componente1M2Component;
  let fixture: ComponentFixture<Componente1M2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente1M2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente1M2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

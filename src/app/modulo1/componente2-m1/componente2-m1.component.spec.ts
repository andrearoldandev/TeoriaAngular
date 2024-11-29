import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2M1Component } from './componente2-m1.component';

describe('Componente2M1Component', () => {
  let component: Componente2M1Component;
  let fixture: ComponentFixture<Componente2M1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente2M1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente2M1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

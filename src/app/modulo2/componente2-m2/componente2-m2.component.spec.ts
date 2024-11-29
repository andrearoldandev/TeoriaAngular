import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2M2Component } from './componente2-m2.component';

describe('Componente2M2Component', () => {
  let component: Componente2M2Component;
  let fixture: ComponentFixture<Componente2M2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente2M2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente2M2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2M3Component } from './componente2-m3.component';

describe('Componente2M3Component', () => {
  let component: Componente2M3Component;
  let fixture: ComponentFixture<Componente2M3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente2M3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente2M3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

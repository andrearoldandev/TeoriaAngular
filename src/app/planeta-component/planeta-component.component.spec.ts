import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetaComponentComponent } from './planeta-component.component';

describe('PlanetaComponentComponent', () => {
  let component: PlanetaComponentComponent;
  let fixture: ComponentFixture<PlanetaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente1M1Component } from './componente1-m1/componente1-m1.component';
import { Componente2M1Component } from './componente2-m1/componente2-m1.component';



@NgModule({
  declarations: [Componente1M1Component, Componente2M1Component],
  imports: [
    CommonModule
  ],
  exports: [Componente1M1Component, Componente2M1Component]
})
export class Modulo1Module { }

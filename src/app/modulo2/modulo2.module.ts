import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente1M2Component } from './componente1-m2/componente1-m2.component';
import { Componente2M2Component } from './componente2-m2/componente2-m2.component';



@NgModule({
  declarations: [Componente1M2Component, Componente2M2Component],
  imports: [
    CommonModule
  ],
  exports: [Componente1M2Component, Componente2M2Component]
})
export class Modulo2Module { }

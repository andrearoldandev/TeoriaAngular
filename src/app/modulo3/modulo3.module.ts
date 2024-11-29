import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1M3Component } from './component1-m3/component1-m3.component';
import { Componente2M3Component } from './componente2-m3/componente2-m3.component';



@NgModule({
  declarations: [Component1M3Component, Componente2M3Component],
  imports: [
    CommonModule
  ],
  exports: [Component1M3Component, Componente2M3Component]
})
export class Modulo3Module { }

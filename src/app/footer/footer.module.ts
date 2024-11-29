import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [GridComponent, MapComponent],
  imports: [
    CommonModule
  ],
  exports: [GridComponent, MapComponent]
})
export class FooterModule { }

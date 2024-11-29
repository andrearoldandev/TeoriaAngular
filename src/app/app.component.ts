import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjemploComponent } from "./ejemplo/ejemplo.component";
import { FooterModule } from './footer/footer.module';
import { Modulo1Module } from "./modulo1/modulo1.module";
import { Modulo2Module } from "./modulo2/modulo2.module";
import { Modulo3Module } from './modulo3/modulo3.module';
import { PlanetaComponentComponent } from "./planeta-component/planeta-component.component";
import { VentasComponent } from "./ventas/ventas.component";
import { TwoWayComponent } from "./two-way/two-way.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EjemploComponent, FooterModule, Modulo1Module, Modulo2Module, Modulo3Module, PlanetaComponentComponent, VentasComponent, TwoWayComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componentes-teoria';
}

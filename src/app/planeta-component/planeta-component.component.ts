import { Component } from '@angular/core';

@Component({
  selector: 'app-planeta-component',
  standalone: true,
  imports: [],
  templateUrl: './planeta-component.component.html',
  styleUrl: './planeta-component.component.css'
})
export class PlanetaComponentComponent {
  nombrePlaneta: string = 'Zenon';
  distancia: number = 1002550000000;
  duracion: number = 725;

  distanciaAnio: number = this.distancia / this.duracion;

  anioPartida: number = 2025;
  anioLlegada: number = this.anioPartida + this.duracion;

  titulo1: string = 'Dato';
  titulo2: string = 'Valor';

  datoNombre: string = 'Nombre del Planeta';
  datoDistancia: string = 'Distancia en km';
  datoDuracion: string = 'Duración del viaje';
  datoAnio:string = 'Distancia estimada del viaje en un año';
  datoAnioPartida: string = 'Año de partida';
  datoAnioLlegada: string = 'Año de llegada';

}

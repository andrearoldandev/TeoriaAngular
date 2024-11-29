import { Component } from '@angular/core';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css',
})
export class VentasComponent {
  nombreProducto: string = 'Producto Genérico';
  precioUnitario: number = 10;
  unidadesVendidas: number = 5;
  iva: number = 21;

  //Calculos
  subtotal: number = this.precioUnitario * this.unidadesVendidas;
  sumaIva: number = this.iva / 100;
  ivaAplicado: number = this.subtotal * this.sumaIva;

  //Titulos de la tabla
  titulo: string = 'Dato';
  titulo1: string = 'Valor';

  dato1: string = 'Nombre del Producto';
  dato2: string = 'Precio Unitario';
  dato3: string = 'Unidades Vendidas';
  dato4: string = 'IVA';
  dato5: string = 'Subtotal';
  dato6: string = 'IVA Aplicado';
  dato7: string = 'Total';
}

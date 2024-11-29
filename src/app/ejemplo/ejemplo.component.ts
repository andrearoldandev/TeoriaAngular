//Las importaciones nos permiten importar dependecias (herramientas/funcionalidades de Angular)
import { Component } from '@angular/core';

//Un decorador es una función especial de TypeScript
@Component({
  //Metadatos del componente
  selector: 'app-ejemplo', //Etiqueta que me permite utilizar este componente en otras aprtes de mi aplicación
  standalone: true, //Componente autónomo
  imports: [],
  templateUrl: './ejemplo.component.html', //URL de la plantilla que supone la estructura del componente
  styleUrl: './ejemplo.component.css', //URL del archivo que almacena los estilos del componente
})

//Clase (plantilla) del componente que nos permite crear objetos. Permiten encapsular datos y métodos
export class EjemploComponent {
  titulo: string = 'Mi primer componente'; //Propiedad que almacena un valor de tipo string (ahora con interpolación podremos llamar a esta propiedad desde ejemplo.component.html)
  titulo2: string = 'Suma de edades';
  /*<nombre-propiedad>: <tipo-propiedad> = <valor-propiedad>

    - nombre-propiedad: Es el nombre que le damos a la propiedad
      - Nunca puede comenzar por un número
      - Puede contener números, pero no puede comenzar por ellos
      - Puede contener guiones bajos, pero no puede comenzar por ellos
      - No puede contener espacios, solo usar CamelCase o snake_case
      - Deben ser descriptivos y concisos
      - No pueden ser iguales a palabras reservadas de TypeScript o JavaScript
    - tipo-propiedad: Es el tipo de dato que almacena la propiedad(string, number, boolean, array, any, etc)
    - valor-propiedad: Es el valor que se almacena en la propiedad
*/

  //TIPOS DE DATOS

  //1. STRING: Guardar texto como un nombre o una descripción, puede contener números y caracteres especiales

  mensaje: string = 'Mi mensaje de prueba';
  mensaje2: string = 'Mi mensaje de prueba 2';

  //2. NUMBER: Guardar números enteros o decimales, edad, precios, cantidades...

  edad: number = 31;
  precio: number = 15.39;
  edad_usuario1: number = 25;
  edad_usuario2: number = 30;
  suma_edades: number = this.edad_usuario1 + this.edad_usuario2;

  //3. BOOLEAN: Guardar valores lógicos, true o false, muy útil sobre todo en condiciones o con diferentes estados.

  estaActivo: boolean = true;
  estaActivo2: boolean = false;

  //4. ARRAY: Guardar colecciones de datos, listas de elementos, etc, que comparten características

  frutas: string[] = ['Manzana', 'Plátano', 'Naranja'];
  edades: number[] = [3, 31, 15];
  cualquierDato: any[] = ['Andrea', 31, true, 25.40];
  frameworks: string[] = ['Angular', 'React', 'Vue.js'];
  grupos: string[] = ['Rammstein', 'Judas Priest', 'AC/DC', 'Electric Callboy', 'Linkin Park', 'Lorna Shore']

    /*El indice de un valor hace referencia a su posición dentro de una lista:
        - 1º posición: index 0
        - 2º posición: index 1
        - 3º posición: index 2
        - 4º posición: index 3
    */


  //5. ANY: Nos permite guardar cualquier tipo de dato, pero no es recomendable usarlo, ya que no nos permite saber qué tipo de dato és.
    //- Es totalmente versátil, peeeero puede llevarnos a generar errores por no indicar el tipo exacto.
    //- Lo usamos solo cuando SEA ESTRICTAMENTE NECESARIO

  cualquierDato1: any = 'Hola mundo';
  cualquierDato2: any = 3;
  cualquierDato3: any = true;
  cualquierDato4: any[] = ['Miguel', 34, true];

  //EJERCICIO
  precio1: number = 15.20;
  precio2: number = 20.50;
  suma_precio: number = this.precio1 + this.precio2;

}

/*INERPOLACIÓN

  Nos permite llavar datos desde nuestra clase a la vista

  - Mostrar valores o resultados de las propiedades que definimos en la clase dentro del HTML
  - Usamos el doble corchete para mostrar el valor de la propiedad: {{}}
  -

*/

/* COMPONENTES DEPENDIENTES DE UN MÓDULO VS AUTÓNOMOS

  -Esta app no depende de un módulo
  -Componentes autónomos son aquellos que no dependen de un módulo --standalone

  -Componentes standalone:
    - El propio componente es el que gestiona sus importaciones y exportaciones.
    - Surgen con Angular 14
    - Las apps no necesian el módulo (app.module.ts) ni el router (app-routing.module.ts)
    - Compatibles con versiones de Angular 14 y posteriores
    - Se usan directamente donde se necesitan
    - Se usa para proyectos pequeños o muy específicos

  - Componentes dependientes de un módulo:
    - El módulo del cual depende el componente el que gestiona el própio módulo y sus herramientas.
    - Compatibles con todas las versiones de angular
    - Nos permite compartir y agrupar los componentes entre múltiples módulos
    - Se usa para proyectos grandes que requieren mucha organización



*/

/* TIPOS DE DECORADORES

  @Component: Declara que una clase es un componente
    - Va a tener una plantilla HTML
    - Va a tener unos estilos
    - Como es una clase, va a encapsular datos y métodos

  @NgModule: Declara que una clase es un módulo (versiones antiguas)
    - Este módulo organiza los componentes que tiene declarados en "declarations"
    - Define los módulos y servicios que pueden utilizar los componentes que está organizando.

  @Injectable: indica que la clase donde se declara este decorador es un servicio y que Angular va a poder inyectarlo donde se necesite.

    @Injectable({
      provideIn: 'root'
    })

  @Directive: declara que una clase es una directiva

  @Pipe: declara que una clase es una pipe (filtro), que me va a permitir transformar datos en plantillas

  -----------DECORADORES PARA PROPIEDADES--------------

  @Input: Permite que una propiedad de un componente reciba datos desde su componente padre

  @Output: Permite que un componente emita eventos hacia su componente padre
*/

import { Component } from '@angular/core';
import { Ilaptop } from './laptop.model';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.css']
})
export class Ejemplo2Component {
mensaje: string = "hola desde ejemplo2";
ordenador1: Ilaptop = {
  fabricante: 'el mas nuevo',
  modelo: 'ahora',
  ram: 82
} 
ordenador2: Ilaptop = {
  fabricante: 'mac',
  modelo: 'ok',
  ram: 100
} 

}

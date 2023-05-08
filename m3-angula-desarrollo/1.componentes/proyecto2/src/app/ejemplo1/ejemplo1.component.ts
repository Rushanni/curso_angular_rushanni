import { Component } from '@angular/core';


interface IProducto {
  id: number;
  title: string;
  price: number;
}
@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component {
  mensaje: string = "hola mundo ejemplo1";
  precio: number =  3.99;
product1: IProducto = {
  id: 1,
  title: 'ver si esta vaina se ve',
  price: 1000
}
}

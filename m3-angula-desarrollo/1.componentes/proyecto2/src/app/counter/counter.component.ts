import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  contador: number = 0;

  incrementar(): void {
    this.contador++;
  
  }
  decrementar(): void {
    this.contador--;
  }

  resetear(): void {
    this.contador = 0;
  }

}

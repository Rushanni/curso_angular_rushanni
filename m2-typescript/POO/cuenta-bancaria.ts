
// constructor con atributos private

// id, titular, saldo

class CuentaBancaria {

    constructor(private id: number,
         private titular: string,
          private fechaNacimiento: Date,
           private saldo: number,
            private PinAcceso : String) {}

            incrementarSaldo(cantidad: number) void {
            this.saldo += cantidad;
            }

            retirarSaldo(cantidad: number): number {
                // 1. comprobar que la cantidad ni sea superior al saldo, en ese caso retiramos todo el saldo pero no mas
                 if (cantidad > this.saldo)
            }

}
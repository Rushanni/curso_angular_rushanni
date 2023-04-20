/* 
tipos de datos basicos
*/

// boolean

let isCompleted: boolean = true; 
let isActive: boolean = false;
console.log(isCompleted);


// Number

let count: number = 42; 
let price: number = 19.99;
console.log(count);
console.log(price);



// String

let firstName: string = 'rush';
let greeting: string = `Hola, ${firstName}!`;
console.log(greeting);


// Null

let nothing: null = null;
console.log(nothing);

// Undefined

let notAssigned: undefined = undefined;
console.log(notAssigned);

// Void

function logMessage(message: string): void { console.log(message);
}
console.log();

// Any

let unknownType: any = 'Some value';
unknownType = 42; // No hay error, ya que es de tipo 'any'
console.log(unknownType);


// Tuple

let coordinates: [number, number] = [42.7, -73.1]; 
let personInfo: [string, number] = ['John Doe', 30];

// enum

enum Color { Red,
    Green,
    Blue }
    let favoriteColor: Color = Color.Green;







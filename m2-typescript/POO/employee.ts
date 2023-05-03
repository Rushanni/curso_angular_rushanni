
// clase employee con atributos: id, firstname, salary, company

class Employee {
    // atributos 
    id: number;
    firstName: String;
    salary: number;
    company: string;

    // constructor

constructor(id: number, firstname: string, salary: number, company:string) {
    this.id = id;
    this.firstName = firstname;
    this.salary = salary;
    this.company = company;
}

// metodos
saludar(): string {
    return `hola mi nombre es ${this.firstName} y gano tanto ${this.salary}´;
    }
}

// crear objeto




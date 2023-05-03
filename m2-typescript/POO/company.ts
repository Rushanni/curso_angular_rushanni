
class company {
    
    // contructor
    constructor(public id: number, public cif: string, public legalName: string, public income: number, public outcome: number){}

    getfullName(): string {
        return `${this.cif} ${this.legalName}`;
    }

    getNetIncome(): number {
        return this.income - this.outcome;
    }
}



const company1 = new company(1, "J5756767", "FUNDACION ADECCO", 1000000, 500000 );

console.log();

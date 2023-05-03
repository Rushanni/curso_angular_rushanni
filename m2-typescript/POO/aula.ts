
aula  de class {
    constructor ( id privado () {
        
    } : numero , capacidad privada : numero , ventilacion privada : booleano ) { }     

    getCapacidad ( )  {
        devolver  esto . capacidad ;
    }
    setCapacidad ( capacidad : numero )  {
        esto _ capacidad  =  capacidad  >  0  &&  capacidad  <=  90 ? capacidad : esto . capacidad ;
    }
}

const  aulaCursoAngular  =  new  Aula ( 1 ,  25 ,  true ) ;
const  aulaReuniones  =  new  Aula ( 2 ,  3 ,  false ) ;
const  aulaAnalisisDatos  =  new  Aula ( 3 ,  20 ,  true ) ;

consola _ log ( aulaCursoAngular ) ;
// NO SE PUEDE ACCEDER DIRECTAMENTE A LAS PROPIEDADES PRIVATE
// consola.log(aulaCursoAngular.id); // error TS2341: La propiedad 'id' es privada y solo accesible dentro de la clase 'Aula'.
// aulaCursoAngular.capacidad = 80;

// PRUEBA 1: CAMBIAR CAPACIDAD A UN VALOR PERMITIDO
aulaCursoAngular . setCapacidad ( 37 ) ;  // 35
consola _ log ( aulaCursoAngular . getCapacidad ( ) ) ;

// PRUEBA 1: CAMBIAR CAPACIDAD A UN VALOR NO PERMITIDO
aulaCursoAngular . setCapacidad ( 80 ) ;  // 35
consola _ log ( aulaCursoAngular . getCapacidad ( ) ) ;
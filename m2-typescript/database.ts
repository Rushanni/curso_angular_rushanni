
// interface contrato, declara las operaciones o acciones (metodos)
interface personaService {
    guardarPerson (nif: string): void;
}

// clase 1: implementa los metodos de la interfaz utilizado un Array
class personaServiceArray implements IPersonaService {

      // persona: strins[] = []; // Array
      persona: Array<string> = [] // Array

      // obligatorio
      
}
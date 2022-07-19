/*
    ===== Código de TypeScript =====
*/

function classDecorator2<T extends { new (...args: any[]): {} }>(
    constructor: T
  ) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    };
  }
  
  @classDecorator2
  class MiSuperClase2 {
    public miPropiedad: string = "ABC123";
  
    imprimir() {
      console.log("Hola Mundo");
    }
  }
  
  console.log(MiSuperClase2);
  
  const miClase2 = new MiSuperClase2();
/** Ejemplos y demo sobre Filas
 *  Autor: Roberto Di Michele B.
 *  Web: caisert.com.ve
 *  Mayo de 2020
 */

class Fila {
  constructor() {
    this.elementos = [];
  };
  insertar(elemento){
    this.elementos.push(elemento);
  };
  extraer() {
    const primero = this.elementos[0];
    this.elementos.splice(0, 1);
    return primero;
  };
  longitud() {
    return this.elementos.length;
  }
  ver_proximo() {
    return this.elementos[0];
  }
  ver_elementos() {
    return this.elementos;
  }
}

const navegacion = new Fila();

navegacion.insertar({url:'abc'})
navegacion.insertar({url:'def'})
navegacion.insertar({url:'ghi'})

console.log(navegacion.ver_elementos())

navegacion.extraer();
console.log(navegacion.ver_elementos())

const longitud = navegacion.longitud();
console.log(longitud)

const proximo = navegacion.ver_proximo()
console.log(proximo)

console.log(navegacion.ver_elementos())

console.log(navegacion);
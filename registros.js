/** Ejemplos y demo sobre Registros
 *  Autor: Roberto Di Michele B.
 *  Mayo de 2020
 */

// Los valores de las propiedades pueden ser de cualquier tipo, incluyendo otros objetos lo cual permite construir estructuras de datos complejas.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures

/**
 * DECLARACIÓN
 */

const reg_vacio = {};

console.log(reg_vacio);

const reg_prof = {
  nombre: 'Roberto',
  apellido: 'Di Michele',
}

console.log(reg_prof);

function Profesor (nombre, a) {
  this.nombre = nombre;
  this.apellido = a;
}
const reg_proff = new Profesor(
  'Roberto', 'Di Michele'
  );
  
console.log(reg_proff);
  
class Persona {
  constructor(nombre, a) {
   this.nombre = nombre;
   this.apellido = a;
  }
}
const reg_profc = new Persona(
  'Roberto', 'Di Michele'
);

console.log(reg_profc);



/**
 * Escritura
 */

reg_vacio.nombre = 'Roberto';

reg_vacio['nombre'] = 'Roberto';

console.log(reg_vacio);

reg_profc.web = 'caisert.com.ve';
reg_profc.lenguajes = ['JavaScript', 'C++', 'PHP'];

console.log(reg_profc);



const vehiculo = {
  modelo: 'fusion',
  año: 2020,
  nuevo: true,
  caracteristicas: [
    {nombre: 'turbo', incluido: 'false'},
  ],
};

/**
 * Lectura
 */

const modelo = vehiculo.modelo;
modelo;

const modelo_carro = vehiculo['modelo'];
modelo_carro;

const caracteristicas = vehiculo.caracteristicas;
caracteristicas;

const caracteristica0 = vehiculo.caracteristicas[0];
caracteristica0;

const caracteristica_0 = vehiculo['caracteristicas'][0]
caracteristica_0;

const nombre_caracteristica_0 = vehiculo.caracteristicas[0].nombre
nombre_caracteristica_0;

/**
 * Recorrido
 */

for (propiedad in vehiculo) {
  valor = vehiculo[propiedad];
  console.log(propiedad, valor);
}

// Object.prototype.longitud = 0;

const reg_profo = new Object();
reg_profo.nombre = 'Roberto';

for (propiedad in reg_profo) {
  valor = reg_profo[propiedad];
  console.log(propiedad, valor);
}

for (propiedad in reg_profo) {
  if (reg_profo.hasOwnProperty(propiedad)) {
    valor = reg_profo[propiedad];
    console.log(propiedad, valor);
  }
}

var propiedades = Object.keys(reg_profo);
console.log(propiedades)
for (propiedad in propiedades) {
  console.log(propiedad);
  console.log(propiedades[propiedad]);
  console.log(reg_profo[propiedades[propiedad]]);
}
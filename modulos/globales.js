//Intervalos

let i = 0;
let intervalo = setInterval(function () {
  console.log("Hola");
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
}, 1000);

setImmediate(function() {
    console.log('Adiós');
})

//Ruta del archivo

console.log(__filename);
console.log(__dirname);

//Crear variables globales. Sólo usar en casos estrictamente necesarios.

global.miVariable = 'Soy global';
console.log(miVariable);




//Variables de entorno
//En caso de que no se traiga ningún valor para la variable de entorno, se emplea un or.
//Se deben poner las variables de entorno en mayúscula

let nombre = process.env.NOMBRE || 'sin nombre';
let web = process.env.WEB || 'no tengo web';
console.log('Hola ' + nombre);
console.log('Mi web es ' + web);
console.log('Hola de nuevo');
//Librería para fechas

const moment = require('moment');

let ahora = moment();

console.log(ahora.toString());
console.log(ahora.format('YYYY/MM/DD - HH:mm'));
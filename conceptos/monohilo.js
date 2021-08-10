//Ejemplo del funcionamiento del asincronismo y el monohilo


console.log('Hola mundo');

let i = 0;

setInterval(function() {
    console.log(i);
    i++;
}, 1000);

console.log('Segunda instrucción');
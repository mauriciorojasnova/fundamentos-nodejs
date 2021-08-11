console.log("Algo");
console.info("Algo");
console.error("error");
console.warn("advertencia");

var table = [
  {
    a: 1,
    b: "z",
  },
  {
    a: 2,
    b: "otra letra",
  },
];
console.table(table);

console.group('conversacion');
console.log('Hola');
console.log('Bla bla bla');
console.log('Adios');
console.groupEnd('conversacion');

function function1() {
    console.group('funcion1');
    console.log('Esto es de la función 1');
    console.log('Esto es de la función 1 también');
    function2();
    console.log('Hemos vuelto a la 1');
    console.groupEnd('funcion1');
}

function function2() {
    console.group('funcion2');
    console.log('Esto es otra función');
    console.groupEnd('funcion2');
}

console.log('empezamos');
function1();
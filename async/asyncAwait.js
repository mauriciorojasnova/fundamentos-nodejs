async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(nombre);
      console.log("Hola " + nombre);
    }, 1500);
  });
}

async function hablar() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Bla bla bla bla");
      resolve();
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(nombre);
      console.log("Adios " + nombre);
    }, 1000);
  });
}

async function main() {
  let nombre = await hola("Carlos");
  await hablar();
  await adios(nombre);
  console.log('terminamos el proceso...');
}

console.log('Empezamos el proceso...');
main();
console.log('Va a ser la segunda instrucción');


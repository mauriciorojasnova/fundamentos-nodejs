function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(nombre);
      console.log("Hola " + nombre);
    }, 1500);
  });
}

function hablar() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Bla bla bla bla");
      resolve();
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(nombre);
      console.log("Adios " + nombre);
    }, 1000);
  });
}

console.log("Iniciando el proceso");

hola("Mauricio")
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(() => {
    console.log("Terminado el proceso");
  })
  .catch(error => {
      console.error('Ha habido un error.')
  })

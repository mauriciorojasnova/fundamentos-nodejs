function otraFuncion() {
    seRompe();
}

function seRompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(function () {
        try {
            return 3 + z;
        } catch (err) {
            console.error('Error en la función asíncrona')
            cb(err);
        }
        
    })
}

try {
    // otraFuncion();
    seRompeAsincrona(function(err) {
        console.log(err.message);
    });
} catch(err) {
    console.error('Vaya, algo se ha roto');
    console.error(err.message);
    console.error('pero no pasa nada, lo hemos capturdo');
}

console.log('Parte final del código');
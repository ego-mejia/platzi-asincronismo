function sum(a,b){
    return a + b;
}

function calc(a, b, callback){
    return callback(a, b);
}
//No es necesario agregar parentesis, si no se mandaria a llamar directamente
//No es necesario agregar los argumentos tampoco
console.log(calc(2, 2, sum));


setTimeout(function(){
    console.log('Hola setTimeout Javascript');
}, 1000)

function grettings(name) {
    console.log(`Hola ${name}`);
}
setTimeout(grettings,2000, 'Fernando');

// ********************************************************************
//Conclusion
//Callback es: Funcion que recibe otra funcion para ser ejecutada.
// ********************************************************************
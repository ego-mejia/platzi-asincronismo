// npm i xmlhttprequest
const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){//que significa el 4?
            //loading: 1
            //ejecutado valor de celda: 2
            //interactuando, descargando o trabajando con la solicitud 3
            //cuando se ha completando la llamada
            if(xhttp.status === 200){
                //200 significa que la solicitud ha sido correcta.
                callback(null, JSON.parse(xhttp.responseText))
            }
        }
    }

}
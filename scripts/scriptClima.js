import { buscarClima, buscarClimaHoras, buscarCalidadAire } from "./api.js"
import { setearModo } from "./scriptHome.js"

const QUERYSTRING = window.location.search          // ?ciudad=London
const PARAMS = new URLSearchParams(QUERYSTRING)     // {ciudad: 'London'}
const LATITUD = PARAMS.get('lat')
const LONGITUD = PARAMS.get('lon')
const CLIMA = await cargarClima()
const CALIDADAIRE = {
    1: 'Buena',
    2: 'Aceptable',
    3: 'Moderada',
    4: 'Mala',
    5: 'Muy mala'
}

setearModo()  // Modo oscuro / claro




console.log(CLIMA)




async function cargarClima(){
    let response = await Promise.allSettled([
        buscarClima(LATITUD, LONGITUD),
        buscarClimaHoras(LATITUD, LONGITUD),
        buscarCalidadAire(LATITUD, LONGITUD)    //.list[0].main.aqi (1 a 5)
    ])

    for(let i = 0; i < response.length; i++){
        response[i].status === 'fulfilled' ? response[i] = response[i].value : response[i] = null
    }
    
    return response
}

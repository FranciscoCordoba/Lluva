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

const ICONOS = {
    200: '11n',
    201: '11n',
    202: '11n',
    230: '11n',
    231: '11n',
    232: '11n',
    210: '11d',
    211: '11d',
    212: '11d',
    221: '11d',
    230: '11d',
    300: '09d',
    301: '09d',
    302: '09d',
    310: '09d',
    311: '09d',
    312: '09d',
    313: '09d',
    314: '09d',
    321: '09d',
    500: '10d',
    501: '10d',
    502: '10d',
    503: '10d',
    504: '10d',
    511: '10d',
    520: '10d',
    521: '10d',
    522: '10d',
    531: '10d',
    600: '13d',
    601: '13d',
    602: '13d',
    611: '13d',
    612: '13d',
    613: '13d',
    615: '13d',
    616: '13d',
    620: '13d',
    621: '13d',
    622: '13d',
    701: '50d',
    711: '50d',
    721: '50d',
    731: '50d',
    741: '50d',
    751: '50d',
    761: '50d',
    762: '50d',
    771: '50d',
    781: '50d',
    800: ['01d', '01n'],
    801: ['02d', '02n'],
    802: '04d',
    803: '04d',
    804: '04d'
}

setearModo()  // Modo oscuro / claro

establecerDatos()


console.log(CLIMA)


function establecerDatos(){
  let todayWeather = document.getElementById('today-weather')
  let nextHours = document.getElementById('next-hours')
  let nextDays = document.getElementById('next-days-list')

  prepararClimaActual(todayWeather)
  prepararClimaHoras(nextHours)
  prepararClimaDias(nextDays)
}

function prepararClimaActual(todayWeather){
   if(CLIMA[0] !== null){
      let clima = CLIMA[0]
      let ciudad = clima.name
      let pais = clima.sys.country
      let temp = Math.round(clima.main.temp)
      let sens = Math.round(clima.main.feels_like)
      let desc = clima.weather[0].description
      let icon = clima.weather[0].id == 800 || clima.weather[0].id == 801 ? clima.weather[0].icon : ICONOS[clima.weather[0].id]
      let humedad = clima.main.humidity
      let viento = Math.round(clima.wind.speed*60*60/1000)
      let aqi = CALIDADAIRE[CLIMA[2] ? CLIMA[2].list[0].main.aqi : 0]
      let lluvia = clima.rain ? clima.rain['1h'] : 0

      todayWeather.innerHTML = `
      <article class="bg-light-subtle rounded p-4 pb-1">
        <div class="text-center d-flex">
          <div class="flex-grow-1">
            <h2 class="mb-4">${ciudad}, ${pais}</h2>
            <h1 class="display-2 mb-3">
            <img src="/images/clima__${icon}.svg" alt="${desc}" title="${desc}" width="100" height="100">
            ${temp}°C</h1>
            <p class="mb-3 text-capitalize">${desc}</p>
          </div>
          <div class="d-flex flex-column justify-content-center align-items-start ms-4 detalles">
            <i class="bi bi-wind"> ${viento} km/h</i>
            <i class="bi bi-cloud-rain-heavy"> ${lluvia} mm/h</i>
            <i class="bi bi-moisture"> ${humedad}%</i>
          </div>
        </div>
          
        <p class="mb-0 text-capitalize">Sensación térmica: ${sens}°C</p>
        <p class="text-capitalize">Calidad aire: ${aqi}</p>
      </article>
      `
   }
}

function prepararClimaHoras(nextHours){
   if(CLIMA[1] !== null){
      let proximasHoras = CLIMA[1].list.slice(0, 7)

      proximasHoras.forEach(hora => {
        let desc = hora.weather[0].description
        let horaLocal = new Date(hora.dt * 1000)
        let temp = Math.round(hora.main.temp)
        let icon = hora.weather[0].id == 800 || hora.weather[0].id == 801 ? hora.weather[0].icon : ICONOS[hora.weather[0].id]
        nextHours.innerHTML += `
        <li class="text-center bg-light-subtle rounded p-2">
          <p class="mb-1 border-bottom">${horaLocal.getHours()}:00</p>
          <img src="/images/clima__${icon}.svg" alt="${desc}" title="${desc}" width="50" height="50">
          <p class="mb-1">${temp}°C</p>
        </li>
        `
      })
   }
}

function prepararClimaDias(nextDays){
   if(CLIMA[1] !== null){
      
      let indice = 0
      let dias = []

      //1. Agrupar por día en el array 'dias'
      CLIMA[1].list.forEach((item, index) => {
         let fecha = new Date(item.dt * 1000)

         if(index === 0) {
            dias.push([item])
            indice = fecha.getDate()
         }else{
            if(fecha.getDate() !== indice){
               dias.push([item])
               indice = fecha.getDate()
            }else{
               dias[dias.length - 1].push(item)
            }
         }
      })

      //2. Recorrer array 'dias'
      dias.forEach(dia => {
         let fecha = new Date(dia[0].dt * 1000)
         if(fecha.getDate() !== (new Date()).getDate()){
            let tempMax = Math.round(Math.max(...dia.map(hora => hora.main.temp_max)))
            let tempMin = Math.round(Math.min(...dia.map(hora => hora.main.temp_min)))
            let vientoMax = Math.round(Math.max(...dia.map(hora => hora.wind.speed))*60*60/1000)
            let vientoMin = Math.round(Math.min(...dia.map(hora => hora.wind.speed))*60*60/1000)
            let lluvia = Math.round(dia.reduce((acc, hora) => acc + (hora.rain ? hora.rain['3h'] : 0), 0) * 10) / 10
            let elementoLluvia = lluvia ? `<i class="bi bi-cloud-rain-heavy"> ${lluvia} mm</i>` : ''

            // Elegir el ícono predominante del día

            let arregloIconId = dia.map(coso => [Number.parseInt(coso.weather[0].icon.substring(0,2)), coso.weather[0].id, coso.weather[0].icon, coso.weather[0].description]).sort((a,b) => b[0] - a[0])
            let icono = arregloIconId[0][1] == 800 || arregloIconId[0][1] == 801 ? arregloIconId[0][2] : ICONOS[arregloIconId[0][1]]
            let desc = arregloIconId[0][3]
            
            
            nextDays.innerHTML += `
            <li class="d-flex rounded bg-light-subtle align-items-center">
               <div class="d-flex flex-column align-items-center p-2 border-end border-black">
                  <p class="text-capitalize">${fecha.toLocaleDateString('es-ES',{weekday: 'short'})}</p>
                  <small class="align-text-center">${fecha.toLocaleDateString('es-ES',{day:'numeric',month:'short'})}</small>
               </div>
               <div class="px-2 flex-grow-1 text-center">
                  <img src="/images/clima__${icono}.svg" alt="${desc}" title="${desc}" width="50" height="50">
                  <span>
                    <span class="fw-bold text-danger">${tempMax}°</span>
                    <span class="text-secondary">/</span>
                    <span class="fw-bold text-primary">${tempMin}°</span>
                  </span>
               </div>
               <div class="d-flex flex-column align-items-end p-2 detalles">
                  ${elementoLluvia}
                  <i class="bi bi-wind">: ${vientoMax} - ${vientoMin} km/h</i>
               </div>
            </li>
            `

         }
      })
   }
}

async function cargarClima(){
    let response = await Promise.allSettled([
        buscarClima(LATITUD, LONGITUD),
        buscarClimaHoras(LATITUD, LONGITUD),
        buscarCalidadAire(LATITUD, LONGITUD)
    ])

    for(let i = 0; i < response.length; i++){
        response[i].status === 'fulfilled' ? response[i] = response[i].value : response[i] = null
    }
    
    return response
}

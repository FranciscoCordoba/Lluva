const APIKEY = '2cd6a4c9490338a32407fd7302993bab';


//------ Consultas de clima ------
export async function buscarClima(LATITUD, LONGITUD){           // Clima actual
    let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUD}&lon=${LONGITUD}&appid=${APIKEY}&units=metric&lang=es&exclude=minutely`
    let response = await consultarAPI(URL)
    
    return response
}

export async function buscarClimaHoras(LATITUD, LONGITUD){      // Clima por horas (5 dias intervalos de 3 horas)
    let URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LATITUD}&lon=${LONGITUD}&appid=${APIKEY}&units=metric&lang=es`
    let response = await consultarAPI(URL)
    
    return response
}

export async function buscarCalidadAire(LATITUD, LONGITUD){     // Calidad del aire
    let URL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${LATITUD}&lon=${LONGITUD}&appid=${APIKEY}`
    let response = await consultarAPI(URL)

    return response
}

//------ Consulta de ciudad ------
export async function buscarCiudades(INPUTCITY){
    let URL = `http://api.openweathermap.org/geo/1.0/direct?q=${INPUTCITY}&limit=5&appid=${APIKEY}`
    let response = await consultarAPI(URL)

    return response
}


async function consultarAPI(url){
    let data
    try {
        let response = await fetch(url)
        if(!response.ok) throw new Error('Error en la llamada a la API')
        data = await response.json()
    } catch (error) {
        console.log(error)
    } finally {
        return data
    }
}
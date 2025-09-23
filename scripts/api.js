const APIKEY = '2cd6a4c9490338a32407fd7302993bab';


//------ Consultas de clima ------
export async function buscarClima(LATITUD, LONGITUD){
    let URL = `https://api.openweathermap.org/data/3.0/weather?lat=${LATITUD}&lon=${LONGITUD}&appid=${APIKEY}&units=metric&lang=es&exclude=minutely`
    let response = await consultarClimaAPI(URL)

    return response
}

async function consultarClimaAPI(url){
    
}




//------ Consultas de ciudades ------
export async function buscarCiudades(INPUTCITY){
    let URL = `http://api.openweathermap.org/geo/1.0/direct?q=${INPUTCITY}&limit=5&appid=${APIKEY}`
    let response = await consultarCiudadesAPI(URL)

    return response
}


async function consultarCiudadesAPI(url){
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
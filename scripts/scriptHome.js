import { buscarCiudades } from "api.js";
import { PAISES } from "paises.js";

const LIGHT = 'light'
const DARK = 'dark'

// Si estoy en la pagina index.html. Debo hacer esto ya que al importar la funcion 'setearModo()' en clima.html se ejecuta todo el código 'scriptHome.js'
if(!window.location.pathname.includes('clima.html')){
    const BUTTONFIND = document.getElementById('find-cities-btn')
    setearModo();  // Modo oscuro / claro
    BUTTONFIND.addEventListener('click', consultarCiudad)
}

//Consulta la ciudad de la barra de busqueda
async function consultarCiudad(){
    const INPUTCITY = document.getElementById('ciudad').value
    const RESULTADOS = await buscarCiudades(INPUTCITY)
    
    mostrarCiudades(RESULTADOS)
}

function mostrarCiudades(ciudades){
    const RESULTADOS = document.getElementById('results-container')

    RESULTADOS.innerHTML = ''  // Limpio resultados anteriores

    if(ciudades === undefined || ciudades.length === 0){
        RESULTADOS.innerHTML = `<p>No se encontraron resultados</p>`
        return
    }

    ciudades.forEach(ciudad => {
        let name = ciudad.name
        let local_names = ciudad.local_names?.es
        let country = PAISES[ciudad.country]
        let state = ciudad.state
        let lat = ciudad.lat
        let lon = ciudad.lon

        RESULTADOS.innerHTML += 
        `<a class="list-group-item list-group-item-action" href="pages/clima.html?lat=${lat}&lon=${lon}">
                ${name} ${local_names ? `(${local_names})` : ''} - ${state ? state + ', ' : ''}${country}
        </a>`
    })
}

export function setearModo(){
    let themeIcon = document.getElementById('theme-page')
    let themeButton = document.getElementById('theme-page-btn')
    let temaSeteado = localStorage.getItem('theme') ?? LIGHT

    if(temaSeteado === LIGHT){
        document.querySelector('body').setAttribute('data-bs-theme', LIGHT)
        themeIcon.classList.remove('bi-sun-fill')
        themeIcon.classList.add('bi-moon-fill')
    } else {
        document.querySelector('body').setAttribute('data-bs-theme', DARK)
        themeIcon.classList.remove('bi-moon-fill')
        themeIcon.classList.add('bi-sun-fill')
    }

    themeButton.addEventListener('click', function(){
        
        let body = document.querySelector('body')
        
        if(body.getAttribute('data-bs-theme') === DARK){
            body.setAttribute('data-bs-theme', LIGHT)
            themeIcon.classList.remove('bi-sun-fill')
            themeIcon.classList.add('bi-moon-fill')
            localStorage.setItem('theme', LIGHT)
        } else {
            body.setAttribute('data-bs-theme', DARK)
            themeIcon.classList.remove('bi-moon-fill')
            themeIcon.classList.add('bi-sun-fill')
            localStorage.setItem('theme', DARK)
        }
    })
}
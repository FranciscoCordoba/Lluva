import { buscarCiudades } from "./api.js";
import {PAISES} from "./paises.js";


const BUTTONFIND = document.getElementById('find-cities-btn')

setearModo();  // Modo oscuro / claro
BUTTONFIND.addEventListener('click', consultarCiudad)


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

function setearModo(){
    let themeIcon = document.getElementById('theme-page');
    let themeButton = document.getElementById('theme-page-btn');
    
    themeButton.addEventListener('click', function(){
        
        let body = document.querySelector('body');
        
        if(body.getAttribute('data-bs-theme') === 'dark'){
            body.setAttribute('data-bs-theme', 'light');
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-fill');
        } else {
            body.setAttribute('data-bs-theme', 'dark');
            themeIcon.classList.remove('bi-moon-fill');
            themeIcon.classList.add('bi-sun-fill');
        }
    })
}
import { buscarClima } from "./api"

const QUERYSTRING = window.location.search          // ?ciudad=London
const PARAMS = new URLSearchParams(QUERYSTRING)     // {ciudad: 'London'}
const LATITUD = PARAMS.get('lat')
const LONGITUD = PARAMS.get('lon')


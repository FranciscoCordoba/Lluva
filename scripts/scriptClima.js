import { buscarClima, buscarClimaHoras, buscarCalidadAire } from "./api.js"
import { setearModo } from "./scriptHome.js"

const QUERYSTRING = window.location.search          // ?ciudad=London
const PARAMS = new URLSearchParams(QUERYSTRING)     // {ciudad: 'London'}
const LATITUD = PARAMS.get('lat')
const LONGITUD = PARAMS.get('lon')
//const CLIMA = await cargarClima()
const CLIMA =                           
[{
  "coord": {
    "lon": -66.337,
    "lat": -33.302
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "cielo claro",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 13.82,
    "feels_like": 12.67,
    "temp_min": 13.82,
    "temp_max": 13.82,
    "pressure": 1023,
    "humidity": 54,
    "sea_level": 1023,
    "grnd_level": 933
  },
  "visibility": 10000,
  "wind": {
    "speed": 4.63,
    "deg": 140
  },
  "clouds": {
    "all": 0
  },
  "dt": 1758986558,
  "sys": {
    "type": 1,
    "id": 8244,
    "country": "AR",
    "sunrise": 1758967655,
    "sunset": 1759011891
  },
  "timezone": -10800,
  "id": 3837056,
  "name": "San Luis",
  "cod": 200
},
{
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1758996000,
      "main": {
        "temp": 13.41,
        "feels_like": 11.72,
        "temp_min": 13.41,
        "temp_max": 15.95,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 930,
        "humidity": 35,
        "temp_kf": -2.54
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "nubes",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 3.69,
        "deg": 199,
        "gust": 3.97
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-27 18:00:00"
    },
    {
      "dt": 1759006800,
      "main": {
        "temp": 14.61,
        "feels_like": 12.91,
        "temp_min": 14.61,
        "temp_max": 15.85,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 929,
        "humidity": 30,
        "temp_kf": -1.24
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "nubes dispersas",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 33
      },
      "wind": {
        "speed": 1.72,
        "deg": 142,
        "gust": 2.06
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-27 21:00:00"
    },
    {
      "dt": 1759017600,
      "main": {
        "temp": 13.2,
        "feels_like": 11.57,
        "temp_min": 13.2,
        "temp_max": 13.2,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 930,
        "humidity": 38,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "cielo claro",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.77,
        "deg": 95,
        "gust": 3.42
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-28 00:00:00"
    },
    {
      "dt": 1759028400,
      "main": {
        "temp": 12.18,
        "feels_like": 10.52,
        "temp_min": 12.18,
        "temp_max": 12.18,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 929,
        "humidity": 41,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "cielo claro",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.4,
        "deg": 22,
        "gust": 3.89
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-28 03:00:00"
    },
    {
      "dt": 1759039200,
      "main": {
        "temp": 13.95,
        "feels_like": 12.39,
        "temp_min": 13.95,
        "temp_max": 13.95,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 927,
        "humidity": 38,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "cielo claro",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.89,
        "deg": 9,
        "gust": 5.54
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-28 06:00:00"
    },
    {
      "dt": 1759050000,
      "main": {
        "temp": 11.54,
        "feels_like": 9.53,
        "temp_min": 11.54,
        "temp_max": 11.54,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 925,
        "humidity": 30,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "cielo claro",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.64,
        "deg": 22,
        "gust": 5.42
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-28 09:00:00"
    },
    {
      "dt": 1759060800,
      "main": {
        "temp": 16.7,
        "feels_like": 15.13,
        "temp_min": 16.7,
        "temp_max": 16.7,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 925,
        "humidity": 27,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "cielo claro",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 1
      },
      "wind": {
        "speed": 4.59,
        "deg": 1,
        "gust": 8.25
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-28 12:00:00"
    },
    {
      "dt": 1759071600,
      "main": {
        "temp": 22.75,
        "feels_like": 21.55,
        "temp_min": 22.75,
        "temp_max": 22.75,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 923,
        "humidity": 18,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "cielo claro",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 5
      },
      "wind": {
        "speed": 4.78,
        "deg": 340,
        "gust": 6.63
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-28 15:00:00"
    },
    {
      "dt": 1759082400,
      "main": {
        "temp": 25.66,
        "feels_like": 24.73,
        "temp_min": 25.66,
        "temp_max": 25.66,
        "pressure": 1007,
        "sea_level": 1007,
        "grnd_level": 920,
        "humidity": 17,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "nubes dispersas",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 38
      },
      "wind": {
        "speed": 4.13,
        "deg": 332,
        "gust": 5.9
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-28 18:00:00"
    },
    {
      "dt": 1759093200,
      "main": {
        "temp": 24.26,
        "feels_like": 23.26,
        "temp_min": 24.26,
        "temp_max": 24.26,
        "pressure": 1007,
        "sea_level": 1007,
        "grnd_level": 919,
        "humidity": 20,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "muy nuboso",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 82
      },
      "wind": {
        "speed": 3.63,
        "deg": 291,
        "gust": 6.09
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-28 21:00:00"
    },
    {
      "dt": 1759104000,
      "main": {
        "temp": 18.96,
        "feels_like": 17.67,
        "temp_min": 18.96,
        "temp_max": 18.96,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 921,
        "humidity": 29,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "muy nuboso",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 60
      },
      "wind": {
        "speed": 2.49,
        "deg": 352,
        "gust": 3.91
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-29 00:00:00"
    },
    {
      "dt": 1759114800,
      "main": {
        "temp": 17.04,
        "feels_like": 15.71,
        "temp_min": 17.04,
        "temp_max": 17.04,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 922,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "nubes dispersas",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 45
      },
      "wind": {
        "speed": 0.49,
        "deg": 219,
        "gust": 1.41
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-29 03:00:00"
    },
    {
      "dt": 1759125600,
      "main": {
        "temp": 17.17,
        "feels_like": 15.78,
        "temp_min": 17.17,
        "temp_max": 17.17,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 921,
        "humidity": 32,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "nubes dispersas",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 3.09,
        "deg": 92,
        "gust": 3.18
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-29 06:00:00"
    },
    {
      "dt": 1759136400,
      "main": {
        "temp": 15.41,
        "feels_like": 13.95,
        "temp_min": 15.41,
        "temp_max": 15.41,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 921,
        "humidity": 36,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "muy nuboso",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 53
      },
      "wind": {
        "speed": 1.07,
        "deg": 55,
        "gust": 1.36
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-29 09:00:00"
    },
    {
      "dt": 1759147200,
      "main": {
        "temp": 18.51,
        "feels_like": 17.3,
        "temp_min": 18.51,
        "temp_max": 18.51,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 923,
        "humidity": 34,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "nubes dispersas",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 2.41,
        "deg": 239,
        "gust": 2.74
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-29 12:00:00"
    },
    {
      "dt": 1759158000,
      "main": {
        "temp": 21.91,
        "feels_like": 20.97,
        "temp_min": 21.91,
        "temp_max": 21.91,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 924,
        "humidity": 31,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "nubes dispersas",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 30
      },
      "wind": {
        "speed": 4.08,
        "deg": 210,
        "gust": 2.73
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-29 15:00:00"
    },
    {
      "dt": 1759168800,
      "main": {
        "temp": 24.02,
        "feels_like": 23.16,
        "temp_min": 24.02,
        "temp_max": 24.02,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 923,
        "humidity": 26,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "nubes dispersas",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 26
      },
      "wind": {
        "speed": 5.32,
        "deg": 188,
        "gust": 4.54
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-29 18:00:00"
    },
    {
      "dt": 1759179600,
      "main": {
        "temp": 22.92,
        "feels_like": 22.05,
        "temp_min": 22.92,
        "temp_max": 22.92,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 923,
        "humidity": 30,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "nubes",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 7.15,
        "deg": 146,
        "gust": 6.98
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-29 21:00:00"
    },
    {
      "dt": 1759190400,
      "main": {
        "temp": 18.38,
        "feels_like": 17.4,
        "temp_min": 18.38,
        "temp_max": 18.38,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 926,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "muy nuboso",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 78
      },
      "wind": {
        "speed": 6.01,
        "deg": 93,
        "gust": 10.06
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-30 00:00:00"
    },
    {
      "dt": 1759201200,
      "main": {
        "temp": 16.34,
        "feels_like": 15.47,
        "temp_min": 16.34,
        "temp_max": 16.34,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 929,
        "humidity": 55,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "algo de nubes",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 18
      },
      "wind": {
        "speed": 7.21,
        "deg": 106,
        "gust": 11.88
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-30 03:00:00"
    },
    {
      "dt": 1759212000,
      "main": {
        "temp": 13.94,
        "feels_like": 13.32,
        "temp_min": 13.94,
        "temp_max": 13.94,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 929,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "nubes dispersas",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 7.94,
        "deg": 104,
        "gust": 12.11
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-30 06:00:00"
    },
    {
      "dt": 1759222800,
      "main": {
        "temp": 12.58,
        "feels_like": 12.06,
        "temp_min": 12.58,
        "temp_max": 12.58,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 929,
        "humidity": 83,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "algo de nubes",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 13
      },
      "wind": {
        "speed": 8.82,
        "deg": 89,
        "gust": 14.56
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-09-30 09:00:00"
    },
    {
      "dt": 1759233600,
      "main": {
        "temp": 15.77,
        "feels_like": 15.18,
        "temp_min": 15.77,
        "temp_max": 15.77,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 930,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "muy nuboso",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 53
      },
      "wind": {
        "speed": 10.57,
        "deg": 78,
        "gust": 14.21
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-30 12:00:00"
    },
    {
      "dt": 1759244400,
      "main": {
        "temp": 20.68,
        "feels_like": 19.95,
        "temp_min": 20.68,
        "temp_max": 20.68,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 932,
        "humidity": 44,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "muy nuboso",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 83
      },
      "wind": {
        "speed": 10.58,
        "deg": 82,
        "gust": 11.18
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-30 15:00:00"
    },
    {
      "dt": 1759255200,
      "main": {
        "temp": 21.54,
        "feels_like": 20.61,
        "temp_min": 21.54,
        "temp_max": 21.54,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 931,
        "humidity": 33,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "nubes",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 90
      },
      "wind": {
        "speed": 11.51,
        "deg": 75,
        "gust": 11.38
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-30 18:00:00"
    },
    {
      "dt": 1759266000,
      "main": {
        "temp": 20.62,
        "feels_like": 19.68,
        "temp_min": 20.62,
        "temp_max": 20.62,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 931,
        "humidity": 36,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "nubes",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 93
      },
      "wind": {
        "speed": 9.38,
        "deg": 66,
        "gust": 10.35
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-09-30 21:00:00"
    },
    {
      "dt": 1759276800,
      "main": {
        "temp": 17.87,
        "feels_like": 16.86,
        "temp_min": 17.87,
        "temp_max": 17.87,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 933,
        "humidity": 44,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "lluvia ligera",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 97
      },
      "wind": {
        "speed": 6.02,
        "deg": 68,
        "gust": 9.01
      },
      "visibility": 10000,
      "pop": 0.2,
      "rain": {
        "3h": 0.11
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-10-01 00:00:00"
    },
    {
      "dt": 1759287600,
      "main": {
        "temp": 16.41,
        "feels_like": 15.39,
        "temp_min": 16.41,
        "temp_max": 16.41,
        "pressure": 1023,
        "sea_level": 1023,
        "grnd_level": 933,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "nubes",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 95
      },
      "wind": {
        "speed": 2.21,
        "deg": 43,
        "gust": 2.68
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-10-01 03:00:00"
    },
    {
      "dt": 1759298400,
      "main": {
        "temp": 15.85,
        "feels_like": 14.93,
        "temp_min": 15.85,
        "temp_max": 15.85,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 932,
        "humidity": 55,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "nubes",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 96
      },
      "wind": {
        "speed": 1.83,
        "deg": 60,
        "gust": 2.51
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-10-01 06:00:00"
    },
    {
      "dt": 1759309200,
      "main": {
        "temp": 15.72,
        "feels_like": 14.84,
        "temp_min": 15.72,
        "temp_max": 15.72,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 932,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "nubes",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 5.94,
        "deg": 3,
        "gust": 9.94
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-10-01 09:00:00"
    },
    {
      "dt": 1759320000,
      "main": {
        "temp": 13.94,
        "feels_like": 13.45,
        "temp_min": 13.94,
        "temp_max": 13.94,
        "pressure": 1024,
        "sea_level": 1024,
        "grnd_level": 934,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "lluvia moderada",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 96
      },
      "wind": {
        "speed": 7.41,
        "deg": 359,
        "gust": 11.98
      },
      "visibility": 6669,
      "pop": 1,
      "rain": {
        "3h": 3.25
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-10-01 12:00:00"
    },
    {
      "dt": 1759330800,
      "main": {
        "temp": 18.1,
        "feels_like": 17.27,
        "temp_min": 18.1,
        "temp_max": 18.1,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 932,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "lluvia ligera",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 4.65,
        "deg": 350,
        "gust": 6.62
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 2.03
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-10-01 15:00:00"
    },
    {
      "dt": 1759341600,
      "main": {
        "temp": 21.59,
        "feels_like": 20.82,
        "temp_min": 21.59,
        "temp_max": 21.59,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 929,
        "humidity": 39,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "lluvia ligera",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 87
      },
      "wind": {
        "speed": 4.34,
        "deg": 346,
        "gust": 4.83
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 0.1
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-10-01 18:00:00"
    },
    {
      "dt": 1759352400,
      "main": {
        "temp": 21.23,
        "feels_like": 20.45,
        "temp_min": 21.23,
        "temp_max": 21.23,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 928,
        "humidity": 40,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "muy nuboso",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 60
      },
      "wind": {
        "speed": 5.11,
        "deg": 302,
        "gust": 4.15
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-10-01 21:00:00"
    },
    {
      "dt": 1759363200,
      "main": {
        "temp": 16.66,
        "feels_like": 15.74,
        "temp_min": 16.66,
        "temp_max": 16.66,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 930,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "muy nuboso",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 62
      },
      "wind": {
        "speed": 3.98,
        "deg": 344,
        "gust": 6.59
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-10-02 00:00:00"
    },
    {
      "dt": 1759374000,
      "main": {
        "temp": 15.82,
        "feels_like": 14.87,
        "temp_min": 15.82,
        "temp_max": 15.82,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 930,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "cielo claro",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 2
      },
      "wind": {
        "speed": 6.03,
        "deg": 352,
        "gust": 10.24
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-10-02 03:00:00"
    },
    {
      "dt": 1759384800,
      "main": {
        "temp": 15.16,
        "feels_like": 14.27,
        "temp_min": 15.16,
        "temp_max": 15.16,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 928,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "cielo claro",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 2
      },
      "wind": {
        "speed": 6.58,
        "deg": 3,
        "gust": 10.49
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-10-02 06:00:00"
    },
    {
      "dt": 1759395600,
      "main": {
        "temp": 14.85,
        "feels_like": 14.04,
        "temp_min": 14.85,
        "temp_max": 14.85,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 927,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "cielo claro",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 6
      },
      "wind": {
        "speed": 5.16,
        "deg": 7,
        "gust": 8.27
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-10-02 09:00:00"
    },
    {
      "dt": 1759406400,
      "main": {
        "temp": 18.87,
        "feels_like": 18.09,
        "temp_min": 18.87,
        "temp_max": 18.87,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 928,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "cielo claro",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 3
      },
      "wind": {
        "speed": 4.86,
        "deg": 359,
        "gust": 6.31
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-10-02 12:00:00"
    },
    {
      "dt": 1759417200,
      "main": {
        "temp": 23.23,
        "feels_like": 22.57,
        "temp_min": 23.23,
        "temp_max": 23.23,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 927,
        "humidity": 37,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "cielo claro",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.8,
        "deg": 333,
        "gust": 4.01
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-10-02 15:00:00"
    }
  ],
  "city": {
    "id": 3837056,
    "name": "San Luis",
    "coord": {
      "lat": -33.302,
      "lon": -66.337
    },
    "country": "AR",
    "population": 183982,
    "timezone": -10800,
    "sunrise": 1758967655,
    "sunset": 1759011891
  }
},
{
  "coord": {
    "lon": -66.3368,
    "lat": -33.3022
  },
  "list": [
    {
      "main": {
        "aqi": 1
      },
      "components": {
        "co": 69.45,
        "no": 0.03,
        "no2": 0.09,
        "o3": 55.91,
        "so2": 0.07,
        "pm2_5": 2.9,
        "pm10": 17.23,
        "nh3": 0.34
      },
      "dt": 1758986445
    }
  ]
}
]                    


const CALIDADAIRE = {
    1: 'Buena',
    2: 'Aceptable',
    3: 'Moderada',
    4: 'Mala',
    5: 'Muy mala'
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
      let icon = clima.weather[0].icon
      let humedad = clima.main.humidity
      let viento = Math.round(clima.wind.speed*60*60/1000)
      let aqi = CALIDADAIRE[CLIMA[2] ? CLIMA[2].list[0].main.aqi : 0]
      let lluvia = clima.rain ? clima.rain['1h'] : 0

      todayWeather.innerHTML = `
      <h2 class="mb-4">${ciudad}, ${pais}</h2>
      <div>
         <h1 class="display-2 mb-3">${icon}${temp}°C</h1>
         <p class="mb-3 text-capitalize">${desc}</p>
         <i class="bi bi-wind"> ${viento} km/h</i>
         <i class="bi bi-cloud-rain-heavy"> ${lluvia} mm/h</i>
         <i class="bi bi-moisture"> ${humedad}%</i>
      </div>
         
      <p class="mb-0 text-capitalize">Sensación térmica: ${sens}°C</p>
      <p class="text-capitalize">Calidad aire: ${aqi}</p>
      `
   }
}

function prepararClimaHoras(nextHours){
   if(CLIMA[1] !== null){
      let proximasHoras = CLIMA[1].list.slice(0, 7)

      proximasHoras.forEach(hora => {
         let horaLocal = new Date(hora.dt * 1000)
         let temp = Math.round(hora.main.temp)
         let icon = hora.weather[0].icon
         nextHours.innerHTML += `
         <li class="text-center">
            <p>${horaLocal.getHours()}:00</p>
            <p>${icon}</p>
            <p>${temp}°C</p>
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
            let lluvia = Math.round(dia.reduce((acc, hora) => acc + (hora.rain ? hora.rain['3h'] : 0), 0))
            let icon = Math.max(...dia.map(coso => Number.parseInt(coso.weather[0].icon.substring(0,2))))

            nextDays.innerHTML += `
            <li class="d-flex mb-3 border border-black rounded bg-light align-items-center">
               <div class="d-flex flex-column align-items-center p-2 border-end border-black">
                  <p class="text-capitalize">${fecha.toLocaleDateString('es-ES',{weekday: 'short'})}</p>
                  <small class="align-text-center">${fecha.toLocaleDateString('es-ES',{day:'numeric',month:'short'})}</small>
               </div>
               <div class="px-2 flex-grow-1 text-center">
                  <p>icon:${icon}</p>
                  <span class="text-danger">${tempMax}°</span>
                  <span class="text-secondary">/</span>
                  <span class="text-primary">${tempMin}°</span>
               </div>
               <div>
                  <p>${lluvia?lluvia:''}</p>
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

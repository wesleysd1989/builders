export const respondeWeather: any = {
  coord: {
    lon: -47.12,
    lat: -22.9137,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01n",
    },
  ],
  base: "stations",
  main: {
    temp: 294.1,
    feels_like: 293.53,
    temp_min: 293.71,
    temp_max: 294.1,
    pressure: 1014,
    humidity: 49,
  },
  visibility: 10000,
  wind: {
    speed: 2.57,
    deg: 20,
  },
  clouds: {
    all: 0,
  },
  dt: 1659058814,
  sys: {
    type: 1,
    id: 8393,
    country: "BR",
    sunrise: 1659001465,
    sunset: 1659041118,
  },
  timezone: -10800,
  id: 3467865,
  name: "Campinas",
  cod: 200,
};

export const respondeForecast: any = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1659063600,
      main: {
        temp: 278.53,
        feels_like: 273.55,
        temp_min: 278.53,
        temp_max: 278.53,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1015,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.87,
        deg: 294,
        gust: 11.69,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.13,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-29 03:00:00",
    },
  ],
  city: {
    id: 0,
    name: "",
    coord: {
      lat: -47.12,
      lon: -22.9137,
    },
    country: "",
    population: 0,
    timezone: -7200,
    sunrise: 1659085095,
    sunset: 1659118667,
  },
};

import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { WeatherState } from "../pages/Home/types";

export const formatDate = (strDate: any, formatMask = "iii"): string =>
  format(parseISO(strDate.toString()), formatMask, { locale: ptBR });

export const formartWeather = (list: any, name: string): WeatherState[] => {
  const formatedWeather = [];
  for (let index = 0; index < list.length; index = index + 8) {
    formatedWeather.push({
      city: name,
      temperature: Math.floor(list[index].main.temp),
      icon: list[index].weather[0].icon,
      day: formatDate(list[index].dt_txt),
    });
  }
  return formatedWeather;
};

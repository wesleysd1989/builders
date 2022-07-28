import React, { memo } from "react";
import { WeatherProps } from "../CardWeather/types";

import { Container, Line } from "./styles";

const SmallCardWeather: React.FC<WeatherProps> = ({ weather }) => {
  return (
    <Container>
      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt="icon-weathermap"
      />
      <strong>{`${weather.temperature}ºC`}</strong>
      <Line />
      <strong>{weather.day}</strong>
    </Container>
  );
};

export default memo(SmallCardWeather);

import React, { memo } from "react";

import location from "../../assets/location.png";
import { Container, Content, Section } from "./styles";
import { WeatherProps } from "./types";

const CardWeather: React.FC<WeatherProps> = ({ weather }) => {
  return (
    <Container>
      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`}
        alt="icon-weathermap"
      />
      <Section>
        <h1>{`${weather.temperature}ºC`}</h1>
        <Content>
          <img src={location} alt="lacation-icon" />
          <h3>{weather.city}</h3>
        </Content>
      </Section>
    </Container>
  );
};

export default memo(CardWeather);

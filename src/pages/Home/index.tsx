import React, { useCallback, useEffect, useState } from "react";

import api from "../../services/api";
import { CardWeather, Loader, SmallCardWeather } from "../../components";
import { usePosition } from "../../hooks";
import {
  Card,
  CardListContainer,
  Container,
  Content,
  ErrorContainer,
  IconContainer,
  IconUpdate,
} from "./styles";
import { formartWeather } from "../../utils";
import { WeatherState } from "./types";

const Home: React.FC = () => {
  const [today, setToday] = useState<WeatherState>({} as WeatherState);
  const [nextDays, setNextDays] = useState<WeatherState[]>([]);
  const { latitude, longitude, error } = usePosition();

  const getWeather = useCallback(async () => {
    if (latitude && longitude) {
      const weather: any = await api.get(
        `weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_MAP}&units=metric`
      );
      setToday({
        city: weather.data.name,
        temperature: Math.floor(weather.data.main.temp),
        icon: weather.data.weather[0].icon,
      });
      const forecast: any = await api.get(
        `forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_MAP}&units=metric`
      );
      setNextDays(formartWeather(forecast.data.list, forecast.data.city.name));
    }
  }, [latitude, longitude]);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  return (
    <Container>
      <Card>
        {!error && (
          <>
            {nextDays.length === 0 ? (
              <Loader />
            ) : (
              <Content>
                <CardWeather weather={today} />
                <CardListContainer>
                  {nextDays.map((weather: WeatherState, key) => (
                    <SmallCardWeather key={`item-${key}`} weather={weather} />
                  ))}
                </CardListContainer>
                <IconContainer>
                  <IconUpdate
                    onClick={() => {
                      setNextDays([]);
                      getWeather();
                    }}
                  />
                </IconContainer>
              </Content>
            )}
          </>
        )}
        {error && (
          <ErrorContainer>
            <strong>{error}</strong>
          </ErrorContainer>
        )}
      </Card>
    </Container>
  );
};

export default Home;

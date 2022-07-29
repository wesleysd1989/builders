import React from "react";
import { render, screen } from "@testing-library/react";
import { CardWeather } from "../../components";
import { WeatherState } from "../../pages/Home/types";

const weatherMock: WeatherState = {
  city: "Campinas",
  temperature: 20,
  icon: "03n",
};

describe("CardWeather", () => {
  test("CardWeather renders correctly", (): void => {
    render(<CardWeather weather={weatherMock} />);

    const position = screen.getByText(/Campinas/i);

    expect(position).toBeInTheDocument();
  });
});

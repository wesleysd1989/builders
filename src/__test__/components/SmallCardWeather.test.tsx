import React from "react";
import { render, screen } from "@testing-library/react";
import { SmallCardWeather } from "../../components";
import { WeatherState } from "../../pages/Home/types";

const weatherMock: WeatherState = {
  city: "Campinas",
  temperature: 20,
  icon: "03n",
  day: "Quinta",
};

describe("SmallCardWeather", () => {
  test("SmallCardWeather renders correctly", (): void => {
    render(<SmallCardWeather weather={weatherMock} />);

    const position = screen.getByText(/Quinta/i);

    expect(position).toBeInTheDocument();
  });
});

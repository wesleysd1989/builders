import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";

import { Home } from "../../pages";
import api from "../../services/api";
import { respondeForecast, respondeWeather } from "./mocks";

const mockGeolocation = {
  getCurrentPosition: jest.fn().mockImplementationOnce((success, error) =>
    Promise.resolve(
      success({
        coords: {
          latitude: -22.9137444,
          longitude: -47.1200007,
        },
      })
    )
  ),
  watchPosition: jest.fn(),
  clearWatch: jest.fn(),
};

(global as any).navigator.geolocation = mockGeolocation;

const apiMock = new MockAdapter(api);

describe("CardWeather", () => {
  test("CardWeather renders correctly", async (): Promise<void> => {
    apiMock
      .onGet(
        `weather?lat=${-47.12}&lon=${-22.9137}&appid=${
          process.env.REACT_APP_WEATHER_MAP
        }&units=metric`
      )
      .reply(200, respondeWeather);
    apiMock
      .onGet(
        `weather?lat=${-47.12}&lon=${-22.9137}&appid=${
          process.env.REACT_APP_WEATHER_MAP
        }&units=metric`
      )
      .reply(200, respondeForecast);
    render(<Home />);

    await waitFor(() => {
      const id = screen.getByTestId("loading");

      expect(id).toBeInTheDocument();
    });
  });
});

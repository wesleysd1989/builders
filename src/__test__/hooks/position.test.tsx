import React from "react";
import { renderHook } from "@testing-library/react";
import { usePosition } from "../../hooks";

describe("Position Hook", () => {
  test("Position renders 'Geolocation is not supported'", (): void => {
    const { result } = renderHook(() => usePosition());
    expect(result.current.error).toEqual("Geolocation is not supported");
  });

  test("Position renders with coords", () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
        Promise.resolve(
          success({
            coords: {
              latitude: 51.1,
              longitude: 45.3,
            },
          })
        )
      ),
      watchPosition: jest.fn().mockImplementationOnce((success) =>
        Promise.resolve(
          success({
            coords: {
              latitude: 51.1,
              longitude: 45.3,
            },
          })
        )
      ),
      clearWatch: jest.fn(),
    };
    (global as any).navigator.geolocation = mockGeolocation;
    const { result } = renderHook(() => usePosition());

    expect(result.current.error).toEqual(null);
  });
  test("Position renders with error", () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
        Promise.resolve(
          success({
            coords: {
              latitude: 51.1,
              longitude: 45.3,
            },
          })
        )
      ),
      watchPosition: jest.fn().mockImplementationOnce((success, error) =>
        Promise.resolve(
          error({
            message: "User denied Geolocation",
          })
        )
      ),
      clearWatch: jest.fn(),
    };
    (global as any).navigator.geolocation = mockGeolocation;
    const { result } = renderHook(() => usePosition());

    expect(result.current.error).toEqual("User denied Geolocation");
  });
});

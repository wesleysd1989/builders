import React from "react";
import { render, screen } from "@testing-library/react";
import { Loader } from "../../components";

describe("Loader", () => {
  test("Loader renders correctly", (): void => {
    render(<Loader />);
    const id = screen.getByTestId("loading");

    expect(id).toBeInTheDocument();
  });
});

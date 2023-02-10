import React from "react";
import { render, screen } from "@testing-library/react";
import { MainMenu } from "./MainMenu";

test("renders learn react link", () => {
  render(<MainMenu />);

  const typeButton = {
    sumButton: screen.getByRole("button", { name: "Suma" }),
    subtractionButton: screen.getByRole("button", { name: "Resta" }),
    multiplicationButton: screen.getByRole("button", {
      name: "Multiplicación",
    }),
    divisionButton: screen.getByRole("button", { name: "División" }),
  };

  expect(typeButton.sumButton).toBeInTheDocument();
  expect(typeButton.subtractionButton).toBeInTheDocument();
  expect(typeButton.multiplicationButton).toBeInTheDocument();
  expect(typeButton.divisionButton).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

test("renders learn react link", () => {
  render(<Container />);

  const textContainer = screen.getByText("Math for Children");
  expect(textContainer).toBeInTheDocument();
});

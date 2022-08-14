import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "./Home";

afterEach(cleanup);

test("Displays Gluten Free Recipes title", () => {
  render(<Home />);
  const titleElement = screen.getByText(/Gluten Free Recipes/i);
  expect(titleElement).toBeInTheDocument();
});

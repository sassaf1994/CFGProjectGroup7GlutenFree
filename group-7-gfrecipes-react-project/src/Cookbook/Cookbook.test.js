import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CookBook from "./Cookbook";

afterEach(cleanup);

test('Displays "My Cookbook" title', () => {
    render(<CookBook/>);
    const titleElement = screen.getByText(/My Cookbook/i)
    expect(titleElement).toBeInTheDocument();
});

test('displays saved recipes title', () => {
    render(<CookBook/>);
    const savedRecipesTitle = screen.getByText(/No saved recipes/i)
    expect(savedRecipesTitle).toBeInTheDocument();
});
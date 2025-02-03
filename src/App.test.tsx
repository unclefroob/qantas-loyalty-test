import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import data from "./assets/data.json";

const numberOfItems = data.results.length;

describe("App", () => {
  it("renders the App component and displays a correct number of items", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();

    let items = screen.queryAllByTestId("list-item");

    expect(items.length).toBeGreaterThanOrEqual(numberOfItems);
  });
});

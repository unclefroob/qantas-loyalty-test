import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders the Header component", () => {
    render(<Header />);
  });
});

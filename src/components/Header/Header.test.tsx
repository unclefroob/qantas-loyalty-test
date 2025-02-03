import { describe, it, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header, { SortBy } from "./Header";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

const mockSetSortBy = vi.fn();

describe("Header", () => {
  it("renders the Header component", () => {
    const { asFragment } = render(
      <Header
        numberOfHotels={1}
        sortBy={SortBy.PRICE_ASC}
        setSortBy={mockSetSortBy}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("calling onChange when the sortby menu value is changed", async () => {
    const MockHeader = () => {
      const [sortBy, setSortBy] = useState(SortBy.PRICE_ASC);
      return (
        <Header numberOfHotels={1} sortBy={sortBy} setSortBy={setSortBy} />
      );
    };
    render(<MockHeader />);
    const menu = screen.getByTestId("sort-menu");
    expect(menu).toHaveValue(SortBy.PRICE_ASC);
    await userEvent.selectOptions(menu, SortBy.PRICE_DESC);
    expect(menu).toHaveValue(SortBy.PRICE_DESC);
  });
});

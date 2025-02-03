import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ListItem from "./ListItem";
import data from "../../assets/data.json";

describe("ListItem", () => {
  it("renders the ListItem component with a self rating, not refundable and savings", () => {
    render(<ListItem item={selfRatedNotRefundable} />);
    let circle = screen.queryAllByTestId("CircleIcon");
    let star = screen.queryAllByTestId("StarIcon");

    expect(circle.length).toBeGreaterThan(1);
    expect(star.length).not.toBeGreaterThan(0);

    expect(screen.queryByText("Free Cancellation")).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        `Save $${selfRatedNotRefundable.offer.savings?.amount}~`
      )
    ).toBeInTheDocument();
  });

  it("renders the ListItem component with a star rating and free cancellation", () => {
    render(<ListItem item={starRatedFreeCancellation} />);
    let circle = screen.queryAllByTestId("CircleIcon");
    let star = screen.queryAllByTestId("StarIcon");

    expect(star.length).toBeGreaterThan(1);
    expect(circle.length).not.toBeGreaterThan(0);

    expect(screen.queryByText("Free Cancellation")).toBeInTheDocument();
  });
});

const selfRatedNotRefundable = data.results[0];
const starRatedFreeCancellation = data.results[3];

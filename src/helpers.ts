import { IProperty } from "./assets/types";
import { SortBy } from "./components/Header/Header";

export const formatCancellationType = (type: string) => {
  switch (type) {
    case "FREE_CANCELLATION":
      return "Free Cancellation";
    default:
      return null;
  }
};

export const sortData = (
  data: IProperty[],
  direction: SortBy | null
): IProperty[] => {
  return data.sort((a, b) =>
    determineSortDirection(
      direction,
      a.offer.displayPrice.amount,
      b.offer.displayPrice.amount
    )
  );
};

const determineSortDirection = (
  direction: SortBy | null,
  a: number,
  b: number
) => {
  switch (direction) {
    case SortBy.PRICE_ASC:
      return a - b;
    case SortBy.PRICE_DESC:
      return b - a;
    default:
      return a - b;
  }
};

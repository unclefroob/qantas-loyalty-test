import { describe, it, expect } from "vitest";
import { formatCancellationType, sortData } from "./helpers";
import data from "./assets/data.json";
import { SortBy } from "./components/Header/Header";

describe("Helper Functions", () => {
  describe("formatCancellationType", () => {
    it("takes a valid cancellation type as a string and formats it to a readable string for display", () => {
      const input = "FREE_CANCELLATION";
      expect(formatCancellationType(input)).toEqual("Free Cancellation");
    });
    it("takes invalid input and returns null", () => {
      const input = "random_string";
      expect(formatCancellationType(input)).toBeNull();
    });
  });
  describe("sortData", () => {
    [
      { expected: ascData, data: data.results, input: SortBy.PRICE_ASC },
      { expected: descData, data: data.results, input: SortBy.PRICE_DESC },
      { expected: ascData, data: data.results, input: null },
    ].forEach((t) => {
      it(`takes valid data and sorting direction returns a sorted array ${t.input}`, () => {
        expect(sortData(t.data, t.input)).toEqual(t.expected);
      });
    });
  });
});

const ascData = [
  {
    id: "xbtlihs45t",
    offer: {
      cancellationOption: {
        cancellationType: "NOT_REFUNDABLE",
      },
      displayPrice: {
        amount: 227,
        currency: "AUD",
      },
      name: "Deluxe King Room",
      promotion: {
        title: "Red Hot",
        type: "CAMPAIGN",
      },
      savings: null,
    },
    property: {
      address: ["389 Pitt St", "Sydney"],
      previewImage: {
        caption: "Image of property",
        imageType: "PRIMARY",
        url: "https://unsplash.it/145/125/?random",
      },
      propertyId: "P107803",
      rating: {
        ratingType: "star",
        ratingValue: 4,
      },
      title: "Rydges World Square Sydney",
    },
  },
  {
    id: "kwjf8jlxg9",
    offer: {
      cancellationOption: {
        cancellationType: "FREE_CANCELLATION",
      },
      displayPrice: {
        amount: 295,
        currency: "AUD",
      },
      name: "Deluxe King",
      promotion: {
        title: "Bonus Points",
        type: "MEMBER",
      },
      savings: null,
    },
    property: {
      address: ["431-439 Pitt Street", "Sydney"],
      previewImage: {
        caption: "Image of Metro Hotel Marlow Sydney Central",
        imageType: "PRIMARY",
        url: "https://unsplash.it/145/125/?random",
      },
      propertyId: "P107805",
      rating: {
        ratingType: "star",
        ratingValue: 3.5,
      },
      title: "Metro Hotel Marlow Sydney Central",
    },
  },
  {
    id: "cxd650nuyo",
    offer: {
      cancellationOption: {
        cancellationType: "NOT_REFUNDABLE",
      },
      displayPrice: {
        amount: 329,
        currency: "AUD",
      },
      name: "Deluxe Balcony Room",
      promotion: {
        title: "Exclusive Deal",
        type: "MEMBER",
      },
      savings: {
        amount: 30,
        currency: "AUD",
      },
    },
    property: {
      address: ["7-11 Talavera Rd", "North Ryde"],
      previewImage: {
        caption: "Image of Courtyard by Marriott Sydney-North Ryde",
        imageType: "PRIMARY",
        url: "https://unsplash.it/145/125/?random",
      },
      propertyId: "P107801",
      rating: {
        ratingType: "self",
        ratingValue: 4.5,
      },
      title: "Courtyard by Marriott Sydney-North Ryde",
    },
  },
  {
    id: "mesq6mggyn",
    offer: {
      cancellationOption: {
        cancellationType: "FREE_CANCELLATION",
      },
      displayPrice: {
        amount: 375,
        currency: "AUD",
      },
      name: "Deluxe King",
      promotion: {
        title: "Exclusive Deal",
        type: "MEMBER",
      },
      savings: {
        amount: 28,
        currency: "AUD",
      },
    },
    property: {
      address: ["339 Pitt St", "Sydney"],
      previewImage: {
        caption: "Image of Primus Hotel Sydney",
        imageType: "PRIMARY",
        url: "https://unsplash.it/145/125/?random",
      },
      propertyId: "P107802",
      rating: {
        ratingType: "self",
        ratingValue: 5,
      },
      title: "Primus Hotel Sydney",
    },
  },
  {
    id: "5lm8loqk1s",
    offer: {
      cancellationOption: {
        cancellationType: "FREE_CANCELLATION",
      },
      displayPrice: {
        amount: 535,
        currency: "AUD",
      },
      name: "Deluxe King",
      promotion: {
        title: "Exclusive Deal",
        type: "MEMBER",
      },
      savings: null,
    },
    property: {
      address: ["150 Day Street", "Sydney"],
      previewImage: {
        caption: "Image of PARKROYAL Darling Harbour Sydney",
        imageType: "PRIMARY",
        url: "https://unsplash.it/145/125/?random",
      },
      propertyId: "P107804",
      rating: {
        ratingType: "star",
        ratingValue: 4.5,
      },
      title: "PARKROYAL Darling Harbour Sydney",
    },
  },
];

const descData = [
  {
    id: "5lm8loqk1s",
    offer: {
      cancellationOption: {
        cancellationType: "FREE_CANCELLATION",
      },
      displayPrice: {
        amount: 535,
        currency: "AUD",
      },
      name: "Deluxe King",
      promotion: {
        title: "Exclusive Deal",
        type: "MEMBER",
      },
      savings: null,
    },
    property: {
      address: ["150 Day Street", "Sydney"],
      previewImage: {
        caption: "Image of PARKROYAL Darling Harbour Sydney",
        imageType: "PRIMARY",
        url: "https://unsplash.it/145/125/?random",
      },
      propertyId: "P107804",
      rating: {
        ratingType: "star",
        ratingValue: 4.5,
      },
      title: "PARKROYAL Darling Harbour Sydney",
    },
  },
  {
    id: "mesq6mggyn",
    offer: {
      cancellationOption: {
        cancellationType: "FREE_CANCELLATION",
      },
      displayPrice: {
        amount: 375,
        currency: "AUD",
      },
      name: "Deluxe King",
      promotion: {
        title: "Exclusive Deal",
        type: "MEMBER",
      },
      savings: {
        amount: 28,
        currency: "AUD",
      },
    },
    property: {
      address: ["339 Pitt St", "Sydney"],
      previewImage: {
        caption: "Image of Primus Hotel Sydney",
        imageType: "PRIMARY",
        url: "https://unsplash.it/145/125/?random",
      },
      propertyId: "P107802",
      rating: {
        ratingType: "self",
        ratingValue: 5,
      },
      title: "Primus Hotel Sydney",
    },
  },
  {
    id: "cxd650nuyo",
    offer: {
      cancellationOption: {
        cancellationType: "NOT_REFUNDABLE",
      },
      displayPrice: {
        amount: 329,
        currency: "AUD",
      },
      name: "Deluxe Balcony Room",
      promotion: {
        title: "Exclusive Deal",
        type: "MEMBER",
      },
      savings: {
        amount: 30,
        currency: "AUD",
      },
    },
    property: {
      address: ["7-11 Talavera Rd", "North Ryde"],
      previewImage: {
        caption: "Image of Courtyard by Marriott Sydney-North Ryde",
        imageType: "PRIMARY",
        url: "https://unsplash.it/145/125/?random",
      },
      propertyId: "P107801",
      rating: {
        ratingType: "self",
        ratingValue: 4.5,
      },
      title: "Courtyard by Marriott Sydney-North Ryde",
    },
  },
  {
    id: "kwjf8jlxg9",
    offer: {
      cancellationOption: {
        cancellationType: "FREE_CANCELLATION",
      },
      displayPrice: {
        amount: 295,
        currency: "AUD",
      },
      name: "Deluxe King",
      promotion: {
        title: "Bonus Points",
        type: "MEMBER",
      },
      savings: null,
    },
    property: {
      address: ["431-439 Pitt Street", "Sydney"],
      previewImage: {
        caption: "Image of Metro Hotel Marlow Sydney Central",
        imageType: "PRIMARY",
        url: "https://unsplash.it/145/125/?random",
      },
      propertyId: "P107805",
      rating: {
        ratingType: "star",
        ratingValue: 3.5,
      },
      title: "Metro Hotel Marlow Sydney Central",
    },
  },
  {
    id: "xbtlihs45t",
    offer: {
      cancellationOption: {
        cancellationType: "NOT_REFUNDABLE",
      },
      displayPrice: {
        amount: 227,
        currency: "AUD",
      },
      name: "Deluxe King Room",
      promotion: {
        title: "Red Hot",
        type: "CAMPAIGN",
      },
      savings: null,
    },
    property: {
      address: ["389 Pitt St", "Sydney"],
      previewImage: {
        caption: "Image of property",
        imageType: "PRIMARY",
        url: "https://unsplash.it/145/125/?random",
      },
      propertyId: "P107803",
      rating: {
        ratingType: "star",
        ratingValue: 4,
      },
      title: "Rydges World Square Sydney",
    },
  },
];

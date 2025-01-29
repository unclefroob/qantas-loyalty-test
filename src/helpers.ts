export const formatCancellationType = (type: string) => {
  switch (type) {
    case "FREE_CANCELLATION":
      return "Free Cancellation";
    default:
      return null;
  }
};

import { Box, Rating, styled, Typography } from "@mui/material";
import { IProperty } from "../assets/types";
import { formatCancellationType } from "../helpers";
import StarIcon from "@mui/icons-material/Star";
import CircleIcon from "@mui/icons-material/Circle";
import { colours } from "./colours";

interface IListItemProps {
  item: IProperty;
}

const ListItemContainer = styled(Box)({
  display: "flex",
  ":last-of-type": {
    borderBottom: "1px solid black",
  },
});

const DetailsOuterContainer = styled(Box)({
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
  padding: "0.4rem",
  borderTop: "1px solid black",
});

const NameLine = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const DetailsInnerContainer = styled(Box)({
  paddingLeft: "0.8rem",
  paddingRight: "0.8rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
const PriceContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "flex-end",
});

const PriceValueContainer = styled(Box)({
  display: "flex",
});

const SavingsContainer = styled(Box)({
  minHeight: "1.5rem",
});

const ListItem = (props: IListItemProps) => {
  const { item } = props;
  const { property, offer } = item;
  const ratingIcon =
    property.rating.ratingType === "self" ? (
      <CircleIcon fontSize="inherit" />
    ) : (
      <StarIcon fontSize="inherit" />
    );

  return (
    <ListItemContainer>
      <Box sx={{}}>
        <img
          src={property.previewImage.url}
          alt={`${property.title}-preview-image`}
        />
      </Box>
      <DetailsOuterContainer>
        <DetailsInnerContainer>
          <Box>
            <NameLine>
              <Typography>{property.title}</Typography>{" "}
              <Rating
                name="rating"
                defaultValue={property.rating.ratingValue}
                precision={0.5}
                size="small"
                icon={ratingIcon}
                emptyIcon={ratingIcon}
                sx={{ marginLeft: "0.4rem" }}
              />
            </NameLine>
            <Typography>
              {`${property.address[0]}, ${property.address[1]}`}
            </Typography>
          </Box>
          <Typography
            color={colours.roomType}
            sx={{ fontSize: 12, textDecoration: "underline" }}
          >
            {offer.name}
          </Typography>
          <Typography color={colours.cancellationType} sx={{ fontSize: 12 }}>
            {formatCancellationType(offer.cancellationOption.cancellationType)}
          </Typography>
        </DetailsInnerContainer>
        <PriceContainer>
          <Typography sx={{ fontSize: 12 }}>
            1 night total ({offer.displayPrice.currency})
          </Typography>
          <PriceValueContainer>
            <Typography
              sx={{ fontSize: 14, padding: "0.2rem", paddingTop: "0.4rem" }}
            >
              $
            </Typography>
            <Typography sx={{ fontSize: 32 }}>
              {offer.displayPrice.amount}
            </Typography>
          </PriceValueContainer>
          <SavingsContainer>
            {offer.savings && (
              <Typography>Save ${offer.savings.amount}~</Typography>
            )}
          </SavingsContainer>
        </PriceContainer>
      </DetailsOuterContainer>
    </ListItemContainer>
  );
};

export default ListItem;

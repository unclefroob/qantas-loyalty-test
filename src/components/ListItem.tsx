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
  justifyContent: "space-between",
  padding: "0.4rem",
  borderTop: "1px solid black",
});

const AddressLine = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const DetailsInnerContainer = styled(Box)({
  paddingLeft: "0.8rem",
  paddingRight: "0.8rem",
});
const PriceContainer = styled(Box)({});

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
          <Typography>{property.title}</Typography>
          <AddressLine>
            <Typography>
              {`${property.address[0]}, ${property.address[1]}`}
            </Typography>
            <Rating
              name="rating"
              defaultValue={property.rating.ratingValue}
              precision={0.5}
              size="small"
              icon={ratingIcon}
              emptyIcon={ratingIcon}
            />
          </AddressLine>
          <Typography>{offer.name}</Typography>
          <Typography color={colours.cancellationType}>
            {formatCancellationType(offer.cancellationOption.cancellationType)}
          </Typography>
        </DetailsInnerContainer>
        <PriceContainer>
          <Typography>1 night total ({offer.displayPrice.currency})</Typography>
          <Typography>${offer.displayPrice.amount}</Typography>
          {offer.savings && (
            <Typography>Save ${offer.savings.amount}~</Typography>
          )}
        </PriceContainer>
      </DetailsOuterContainer>
    </ListItemContainer>
  );
};

export default ListItem;

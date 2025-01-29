import { Box, Typography } from "@mui/material";
import { IProperty } from "../assets/types";
import { formatCancellationType } from "../helpers";

interface IListItemProps {
  item: IProperty;
}

const ListItem = (props: IListItemProps) => {
  const { item } = props;
  const { property, offer } = item;
  console.log(offer);
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{}}>
        <img
          src={property.previewImage.url}
          alt={`${property.title}-preview-image`}
        />
      </Box>
      <Box sx={{}}>
        <Typography>{property.title}</Typography>
        <Typography>{property.address}</Typography>
        <Typography>{offer.name}</Typography>
        <Typography>
          {formatCancellationType(offer.cancellationOption.cancellationType)}
        </Typography>
      </Box>
      <Box sx={{}}>
        <Typography>night total ({offer.displayPrice.currency})</Typography>
        <Typography>${offer.displayPrice.amount}</Typography>
        {offer.savings && (
          <Typography>Save ${offer.savings.amount}~</Typography>
        )}
      </Box>
    </Box>
  );
};

export default ListItem;

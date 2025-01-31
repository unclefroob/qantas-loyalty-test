import { Box, styled, Typography } from "@mui/material";

interface IHeaderProps {
  numberOfHotels: number;
}

const HeaderBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "0.4rem",
});

const SortByContainer = styled(Box)({
  display: "flex",
});

const Header = (props: IHeaderProps) => {
  const { numberOfHotels } = props;
  return (
    <HeaderBox>
      <Typography>{numberOfHotels} hotels in Sydney</Typography>
      <SortByContainer>
        <Typography sx={{ marginRight: "0.2rem" }}>Sort by</Typography>
        <select>
          <option value="desc">Price (High to Low)</option>
          <option value="asc">Price (Low to High)</option>
        </select>
      </SortByContainer>
    </HeaderBox>
  );
};

export default Header;

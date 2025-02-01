import { Box, styled, Typography } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export enum SortBy {
  DESC = "DESC",
  ASC = "ASC",
}
interface IHeaderProps {
  numberOfHotels: number;
  sortBy: SortBy;
  setSortBy: Dispatch<SetStateAction<SortBy>>;
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
  const { numberOfHotels, sortBy, setSortBy } = props;

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(SortBy[e.target.value as keyof typeof SortBy]);
  };

  return (
    <HeaderBox>
      <Typography>{numberOfHotels} hotels in Sydney</Typography>
      <SortByContainer>
        <Typography sx={{ marginRight: "0.2rem" }}>Sort by</Typography>
        <select onChange={handleSort} value={sortBy}>
          <option value={SortBy.DESC}>Price (High to Low)</option>
          <option value={SortBy.ASC}>Price (Low to High)</option>
        </select>
      </SortByContainer>
    </HeaderBox>
  );
};

export default Header;

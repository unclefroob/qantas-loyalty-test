import { useState } from "react";
import qantasLogo from "./assets/qantas-logo.png";
import data from "./assets/data.json";
import Header, { SortBy } from "./components/Header/Header";
import { Box, styled } from "@mui/material";
import { sortData } from "./helpers";
import ListItem from "./components/ListItem/ListItem";

const AppBox = styled(Box)({
  width: 800,
});

const OuterAppBox = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const App = () => {
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.PRICE_ASC);
  const sortedData = sortData(data.results, sortBy);
  return (
    <OuterAppBox>
      <AppBox>
        <a href="https://localhost:5173" target="_blank">
          <img src={qantasLogo} alt="Qantas Logo" width="200px" height="auto" />
        </a>
        <Header
          numberOfHotels={data.results.length}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        {sortedData.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </AppBox>
    </OuterAppBox>
  );
};

export default App;

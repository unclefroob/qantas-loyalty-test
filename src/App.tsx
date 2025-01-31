import qantasLogo from "./assets/qantas-logo.png";
import data from "./assets/data.json";
import ListItem from "./components/ListItem";
import Header from "./components/Header";
import { Box, styled } from "@mui/material";

const AppBox = styled(Box)({
  width: "100%",
});

const App = () => {
  return (
    <AppBox>
      <a href="https://localhost:5173" target="_blank">
        <img src={qantasLogo} alt="Qantas Logo" />
      </a>
      <Header numberOfHotels={data.results.length} />
      {data.results.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </AppBox>
  );
};

export default App;

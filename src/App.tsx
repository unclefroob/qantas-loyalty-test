import qantasLogo from "./assets/qantas-logo.png";
import data from "./assets/data.json";
import "./App.css";
import ListItem from "./components/ListItem";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <a href="https://react.dev" target="_blank">
        <img src={qantasLogo} alt="Qantas Logo" />
      </a>
      <Header numberOfHotels={data.results.length} />
      {data.results.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default App;

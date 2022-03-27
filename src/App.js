// import logo from "./logo.svg";
import "./App.css";
import { Title } from "./components/title/Title";
import { SearchForm } from "./components/form/SearchForm";
import { Container } from "react-bootstrap";
import { FavList } from "./components/list/FavList";
import { useState } from "react";

function App() {
  const [favList, setFavList] = useState([]);

  const addToFavList = (name) => {
    setFavList([...favList, name]);
  };

  return (
    <div className="wrapper">
      <Container>
        <Title />
        <hr />
        <SearchForm addToFavList={addToFavList} />
        <hr />
        <FavList favList={favList} />
      </Container>
    </div>
  );
}

export default App;

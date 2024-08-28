import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const [select, setSelect] = useState([]);
  return (
    <>
      <Dashboard select={select} setSelect={setSelect} />
      <PokemonList select={select} setSelect={setSelect} />
    </>
  );
};

export default Dex;

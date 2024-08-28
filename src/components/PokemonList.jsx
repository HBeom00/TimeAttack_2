// import { useContext } from "react";
import MOCK_DATA from "../mock";
import PokemonCard from "./PokemonCard";
// import { PokemonContext } from "../context/store";

const PokemonList = () => {
  // const { onAdd } = useContext(PokemonContext);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      {MOCK_DATA.map((el, index) => {
        return (
          <PokemonCard
            key={index}
            img={el.img_url}
            name={el.korean_name}
            type={el.types}
            id={el.id}
            content={el.description}
            // onClick={onAdd}
            isSelect={true}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;

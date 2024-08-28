import { useContext } from "react";
import PokemonCard from "./PokemonCard";
import { PokemonContext } from "../context/store";

const Dashboard = () => {
  const { select, onDelete } = useContext(PokemonContext);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        marginBottom: "100px",
      }}
    >
      {select.map((el, index) => {
        return (
          <PokemonCard
            key={index}
            img={el.img_url}
            name={el.korean_name}
            type={el.types}
            id={el.id}
            content={el.description}
            onClick={onDelete}
            isSelect={false}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;

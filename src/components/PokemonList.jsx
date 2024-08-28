import MOCK_DATA from "../mock";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ select, setSelect }) => {
  // 포켓몬 추가
  const onAdd = ({ e, id }) => {
    e.stopPropagation();
    if (select.length >= 6) {
      alert("최대 6개까지 등록 가능 합니다.");
      return;
    }
    if (select.find((el) => el.id === id)) {
      alert("이미 등록된 포켓몬 입니다");
      return;
    }
    const addPokemon = MOCK_DATA.find((el) => el.id === id);
    setSelect([...select, addPokemon]);
  };

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
            onClick={onAdd}
            isSelect={true}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;

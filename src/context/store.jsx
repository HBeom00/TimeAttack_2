import { createContext, useState } from "react";
import MOCK_DATA from "../mock";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [select, setSelect] = useState([]);

  // 포켓몬 추가
  const onAdd = (id) => {
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

  // 포켓몬 삭제
  const onDelete = (id) => {
    const deletePokemon = select.filter((el) => el.id !== id);
    setSelect(deletePokemon);
  };

  return (
    <PokemonContext.Provider value={{ select, onAdd, onDelete }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;

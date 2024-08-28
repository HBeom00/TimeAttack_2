import { useNavigate } from "react-router-dom";

const PokemonCard = ({ img, name, type, id, isSelect, onClick }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{ border: "2px solid black" }}
      onClick={() => navigate(`/detail?id=${id}`)}
    >
      <img src={img} alt="pokemon_img" />
      <p>{name}</p>
      <p>{type}</p>
      <button
        onClick={(e) => onClick({ e, id })}
        style={{ border: "1px solid blue" }}
      >
        {isSelect ? "추가" : "삭제"}
      </button>
    </div>
  );
};

export default PokemonCard;

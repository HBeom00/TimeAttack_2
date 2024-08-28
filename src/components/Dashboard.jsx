import PokemonCard from "./PokemonCard";

const Dashboard = ({ select, setSelect }) => {
  // 포켓몬 삭제
  const onDelete = ({ e, id }) => {
    e.stopPropagation();
    const deletePokemon = select.filter((el) => el.id !== id);
    setSelect(deletePokemon);
  };
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

import PokemonProvider from "./context/store";
import Router from "./router/Router";

const App = () => {
  return (
    <PokemonProvider>
      <Router />
    </PokemonProvider>
  );
};

export default App;

import { Card } from "./components/Card";
import { SearchBar } from "./components/SearchBar";
const characters = [
  { id: "0", name: "gambito", img: "gambit.jpg" },
  { id: "1", name: "spiderman", img: "spiderman.jpg" },
  { id: "2", name: "wolverine", img: "wolverine.jpg" },
  { id: "3", name: "ironman", img: "ironman.jpg" },
];

function App() {
  return (
    <>
      <SearchBar />
      {characters.map((character) => {
        return (
          <Card name={character.name} img={character.img} key={character.id} />
        );
      })}
    </>
  );
}

export default App;

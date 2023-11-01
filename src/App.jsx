import { Card } from "./components/Card";
import { SearchBar } from "./components/SearchBar";
import styles from "./app.module.css";
const characters = [
  { id: "0", name: "gambito", img: "gambit.jpg" },
  { id: "1", name: "spiderman", img: "spiderman.jpg" },
  { id: "2", name: "wolverine", img: "wolverine.jpg" },
  { id: "3", name: "ironman", img: "ironman.jpg" },
  { id: "4", name: "gambito", img: "gambit.jpg" },
  { id: "5", name: "spiderman", img: "spiderman.jpg" },
  { id: "6", name: "wolverine", img: "wolverine.jpg" },
  { id: "7", name: "ironman", img: "ironman.jpg" },
  { id: "8", name: "gambito", img: "gambit.jpg" },
  { id: "9", name: "spiderman", img: "spiderman.jpg" },
  { id: "10", name: "wolverine", img: "wolverine.jpg" },
  { id: "11", name: "ironman", img: "ironman.jpg" },
];

function App() {
  return (
    <>
      <SearchBar />
      <div className={styles.backgroundContainer}>
        <div className={styles.cardsContainer}>
          {characters.map((character) => {
            return (
              <Card
                name={character.name}
                img={character.img}
                key={character.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

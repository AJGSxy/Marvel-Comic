import { Card } from "./components/Card";
import { SearchBar } from "./components/SearchBar";
import styles from "./app.module.css";
import { ApiCall } from "./api";
import { useState, useEffect } from "react";
// ApiCall();

function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await ApiCall();
      setApiData(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <SearchBar />
      <div className={styles.backgroundContainer}>
        <div className={styles.cardsContainer}>
          {apiData &&
            apiData.data.results.map((characters) => (
              <Card key={characters.id} characters={characters.name} />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;

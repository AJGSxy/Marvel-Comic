import { Card } from "./components/Card";
import { SearchBar } from "./components/SearchBar";
import styles from "./app.module.css";
import { useState, useEffect } from "react";
import { CONSTANTS } from "./utils/constants";
import { GetMarvelComics } from "./getmarvelcomics/GetMarvelComics";
import { GetMarvelCharacters } from "./getmarvelcharacters";
import { CardComicDetails } from "./components/cardcomicdetails/CardComicDetails";
import { GetComicDetails } from "./getcomicdetails";

function App() {
  const [marvelCharacters, setMarvelCharacters] = useState(null);
  const [marvelComics, setMarvelComics] = useState(null);
  const [comicDetails, setComicDetails] = useState(null);

  async function fetchData() {
    const response = await GetMarvelCharacters();
    setMarvelCharacters(response.data.results);
  }

  async function fetchDataComics() {
    const response = await GetMarvelComics();
    setMarvelComics(response.data.results);
  }

  async function fetchComicDetails() {
    const response = await GetComicDetails();
    setComicDetails(response.data.results);
  }

  const renderComicDetails = () => {
    const urlImage = `${comicDetails[0].thumbnail.path}.${comicDetails[0].thumbnail.extension}`;
    const title = comicDetails[0].title;
    const description = comicDetails[0].description;
    const writer = comicDetails[0].creators.items.find(
      (item) => item.role === "writer"
    ).name;
    const penciler = comicDetails[0].creators.items.find((item) => {
      if (item.role.includes("penciler")) return item;
    }).name;
    const cover = comicDetails[0].creators.items.find((item) => {
      if (item.role.includes("penciler (cover)")) return item;
    }).name;
    const onSaleDate = comicDetails[0].dates.find(
      (date) => date.type === "onsaleDate"
    ).date;

    // const formattedDate = onSaleDate.date.toLocaleDateString("en-US", {
    //   month: "long",
    //   day: "numeric",
    //   year: "numeric",
    // });
    // console.log(formattedDate);
    return (
      <CardComicDetails
        img={urlImage}
        title={title}
        description={description}
        writer={writer}
        penciler={penciler}
        cover={cover}
        onsaledate={onSaleDate}
      />
    );
  };

  useEffect(() => {
    fetchData();
    fetchDataComics();
    fetchComicDetails();
  }, []);

  return (
    <>
      <SearchBar />

      {comicDetails && renderComicDetails()}
      <div className={styles.cardsContainer}>
        {marvelCharacters &&
          marvelCharacters.map((character) => {
            const urlImage = `${character.thumbnail.path}.${character.thumbnail.extension}`;
            if (character.thumbnail.path === CONSTANTS.imgNotAvailable) {
              return null;
            }

            return (
              <Card
                key={character.id}
                characterName={character.name}
                img={urlImage}
                id={character.id}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;

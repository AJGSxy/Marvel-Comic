import styles from "./cardcomicdetails.module.css";

export const CardComicDetails = () => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.imageComic}>hola1</div>
      <div className={styles.comicInfo}>
        <h1>The Amazing Spiderman</h1>
        <h3>
          published <br />
          writer <br />
          penciler <br />
          cover artist
        </h3>
        <h2>description comic</h2>
      </div>
    </div>
  );
};

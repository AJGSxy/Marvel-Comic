import styles from "./cardcomicdetails.module.css";

export const CardComicDetails = ({
  img,
  title,
  description,
  writer,
  penciler,
  cover,
  onsaledate,
}) => {
  return (
    <div className={styles.backgroundContainer}>
      <div
        className={styles.imageComic}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={styles.comicInfo}>
        <h1>{title}</h1>
        <h3>
          Published: {onsaledate} <br />
          Writer: {writer} <br />
          Penciler: {penciler} <br />
          Cover Artist: {cover}
        </h3>
        <h2>{description}</h2>
      </div>
    </div>
  );
};

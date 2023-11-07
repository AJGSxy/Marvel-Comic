import { useState } from "react";
import styles from "./card.module.css";
// eslint-disable-next-line
export const Card = ({ characterName, img }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  return (
    <div className={styles.cardBox}>
      <div
        className={styles.imageContainer}
        style={{
          backgroundImage: `linear-gradient(41deg, rgba(0, 0, 0, 0.33) 0%, rgba(255, 255, 255, 0.33) 50%, rgba(0, 0, 0, 0.33) 100%), url(${img})`,
          color: "white",
        }}
      />
      <div className={styles.characterName}>{characterName}</div>
      <button
        className={styles.favoriteButton}
        onClick={() => setIsFavorited(!isFavorited)}
      >
        {isFavorited ? "★" : "☆"}
      </button>
    </div>
  );
};

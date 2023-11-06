import styles from "./card.module.css";
// eslint-disable-next-line
export const Card = ({ characterName, img }) => {
  return (
    <div className={styles.cardBox}>
      <img src={img} width={200} height={300} />

      {/* <div
        style={{
          backgroundImage: `linear-gradient(to top, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url(${img})`,
          width: 200,
          height: 300,
          backgroundSize: "cover",
          color: "white",
        }}
      /> */}
      <div className={styles.characterName}>{characterName}</div>
    </div>
  );
};

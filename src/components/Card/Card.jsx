import styles from "./card.module.css";
// eslint-disable-next-line
export const Card = ({ characterName, img }) => {
  return (
    <div className={styles.cardBox}>
      <img width={200} height={282} src={img} />
      {characterName}
    </div>
  );
};

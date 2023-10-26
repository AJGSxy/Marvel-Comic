import styles from "./card.module.css";
// eslint-disable-next-line
export const Card = ({ name, img }) => {
  return (
    <div className={styles.cardBox}>
      {name}
      <img src={`/public/${img}`} />
    </div>
  );
};

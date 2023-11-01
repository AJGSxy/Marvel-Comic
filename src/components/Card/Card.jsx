import styles from "./card.module.css";
// eslint-disable-next-line
export const Card = ({ name, img }) => {
  return (
    <div className={styles.cardBox}>
      {name}
      <img width={200} height={270} src={`/public/${img}`} />
    </div>
  );
};

import styles from "./searchbar.module.css";
export const SearchBar = () => {
  return (
    <header>
      <div className={styles.searchBox}>
        <div className={styles.logo}>hola</div>
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Buscar"
        />
      </div>
    </header>
  );
};

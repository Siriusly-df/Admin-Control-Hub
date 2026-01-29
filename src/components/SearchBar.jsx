import styles from "../styles/SearchBar.module.css";

const SearchBar = ({ 

}) => {
  return (
    <div className={styles.search_container}>
      <input
        className={styles.input_search}
        type="text"
        placeholder="Пошук"
      />
    </div>
  );
};

export default SearchBar;
import { useState } from "react";
import styles from '@/components/Header/Header.module.scss';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <input
      className={styles.search_bar}
      type="text"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Поиск..."
    />
  );
};

export default SearchBar;
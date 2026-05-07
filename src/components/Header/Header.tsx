import hero from '@/assets/hero.png';
import search from '@/assets/search-button.svg';
import profile from '@/assets/profile-user-account.svg';
import shopping from '@/assets/shopping.svg';
import { Link } from "react-router-dom";
import { useHeader } from "@/hooks/useHeader.ts";
import SearchBar from "@/components/Header/SearchBar.tsx";
import styles from '@/components/Header/Header.module.scss';

const MainHeader =  () => {
  const { isVisible, toggleSearch } = useHeader();

  return (
    <header className={styles.header}>
      <img className={styles.header_logo} src={hero} alt="logo"/>
      <nav className={styles.header_nav}>
        <Link to="/catalog" >Каталог</Link>
        <Link to="/checkout">Корзина</Link>
        <Link to="/">Контакты</Link>
        <Link to="/">О нас</Link>
      </nav>
      <nav className={styles.header_nav}>
        <button className={styles.search_btn} onClick={toggleSearch}>
          <img className={styles.header_img} src={search} alt="search-button"/>
        </button>
        <Link to="/">
          <img className={styles.header_img} src={profile} alt="profile"/>
        </Link>
        <Link to="/">
          <img className={styles.header_img} src={shopping} alt="shopping"/>
        </Link>
      </nav>
      {isVisible && (<SearchBar />)}
    </header>
  )
}

export default MainHeader;
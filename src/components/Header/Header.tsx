import search from '@/assets/search-button.svg';
import profile from '@/assets/profile-user-account.svg';
import shopping from '@/assets/shopping.svg';
import { Link } from "react-router-dom";
import { useHeader } from "@/hooks/useHeader.ts";
import SearchBar from "@/components/Header/SearchBar.tsx";
import styles from '@/components/Header/Header.module.scss';
import {useState} from "react";

const MainHeader =  (props: any) => {
  const { isVisible, toggleSearch } = useHeader();
  const [isOpened, setIsOpened] = useState(false);

  const openDropDown = () => {
    const currentStatus = !isOpened

    setIsOpened(currentStatus);

    props.onShow(currentStatus);
  }

  if (!props.logo) return null;

  return (props.logo &&
    <header className={styles.header}>
      <img className={styles.header_logo} src={props.logo} alt="logo"/>
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
        <button className={styles.search_btn} onClick={openDropDown}>
          <img className={styles.header_img} src={profile} alt="profile"/>
        </button>
        <Link to="/">
          <img className={styles.header_img} src={shopping} alt="shopping"/>
        </Link>
      </nav>
      {isVisible && (<SearchBar />)}
    </header>
  )
}

export default MainHeader;
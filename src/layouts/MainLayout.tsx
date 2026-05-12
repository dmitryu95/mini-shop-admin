import { Outlet } from 'react-router-dom';
import MainHeader from "../components/Header/Header.tsx";
import styles from "@/layouts/Layouts.module.scss"
import hero from "@/assets/hero.png"
import DropDownList from "@/components/Header/DropDownList.tsx";
import {useState} from "react";

const MainLayout = () => {
  const [isShowDropDown, setIsShowDropDown] = useState(false);

  const openDropDownList = (data: boolean) => {

    setIsShowDropDown((prev) => {
      console.log('prev', prev)
      return data
    })
  }

  return (
    <div className={styles.mainLayout}>
      <div className={styles.mainLayout_content}>
        <MainHeader logo={hero} onShow={openDropDownList}/>
        <DropDownList isShow={isShowDropDown}/>
        <Outlet />
      </div>
      <footer className="auth-layout-footer">
        © Является тестовым приложение на React
      </footer>
    </div>
  )
}

export default MainLayout;
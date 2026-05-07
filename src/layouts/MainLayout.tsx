import { Outlet } from 'react-router-dom';
import MainHeader from "../components/Header/Header.tsx";
import styles from "@/layouts/Layouts.module.scss"

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <div className={styles.mainLayout_content}>
        <MainHeader />
        <Outlet />
      </div>
      <footer className="auth-layout-footer">
        © Является тестовым приложение на React
      </footer>
    </div>
  )
}

export default MainLayout;
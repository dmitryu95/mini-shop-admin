import {Route, Routes} from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import AdminLayout from "@/layouts/AdminLayout";
import LoginPage from "@/pages/LoginPage";
import AuthLayout from "@/layouts/AuthLayout";
import CatalogPage from "@/pages/CatalogPage.tsx";
import CartPage from "@/pages/CartPage.tsx";
import AdminProductFormPage from "@/pages/admin/AdminProductFormPage.tsx";
import TestPage from "@/pages/TestPage.tsx";
import TestMobXPage from "@/pages/withStores/TestMobxPage.tsx";
import TestReduxPage from "@/pages/withStores/TestRedux.tsx";
import TestZustandPage from "@/pages/withStores/TestZustand.tsx";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>

    <Route path="/admin" element={<AdminLayout />} />

    <Route path="/auth" element={<AuthLayout />}>
      <Route path="/auth/login" element={<LoginPage />} />
    </Route>

    <Route path='/catalog' element={<CatalogPage />} />
    <Route path='/cart/:id' element={<CartPage />} />
    <Route path='/creat-post' element={<AdminProductFormPage /> } />

    {/*   test pages    */}
    <Route path="/test" element={<TestPage />} ></Route>
    <Route path="/test-mobx" element={<TestMobXPage />} ></Route>
    <Route path="/test-redux" element={<TestReduxPage />} ></Route>
    <Route path="/test-zustand" element={<TestZustandPage />} ></Route>
  </Routes>
)


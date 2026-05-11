import {Route, Routes} from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import AdminLayout from "@/layouts/AdminLayout";
import LoginPage from "@/pages/LoginPage";
import AuthLayout from "@/layouts/AuthLayout";
import CatalogPage from "@/pages/CatalogPage.tsx";
import CartPage from "@/pages/CartPage.tsx";
import AdminProductFormPage from "@/pages/admin/AdminProductFormPage.tsx";

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
  </Routes>
)


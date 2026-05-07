import {Route, Routes} from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import AdminLayout from "@/layouts/AdminLayout";
import LoginPage from "@/pages/LoginPage";
import AuthLayout from "@/layouts/AuthLayout";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
    </Route>

    <Route path="/admin" element={<AdminLayout />} />

    <Route path="/auth" element={<AuthLayout />}>
      <Route path="/auth/login" element={<LoginPage />} />
    </Route>
  </Routes>
)


import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className="auth-layout">
      <div className="auth-layout-content">
        <Outlet />
      </div>
      <footer className="auth-layout-footer">
        © Является тестовым приложение на React
      </footer>
    </div>
  )
}

export default AuthLayout;
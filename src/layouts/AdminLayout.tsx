import { Outlet } from 'react-router-dom';

function AdminLayout() {
  return (
    <div className="auth-layout">
      <div className="auth-layout-content">
        АДМИНКА
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout;
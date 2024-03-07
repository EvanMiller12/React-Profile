import { Outlet } from "react-router-dom";
import { AuthStatus } from "../Auth/AuthStatus";

export function Layout() {
  return (
    <main>
      <div className="container">
        <AuthStatus />
        <Outlet />
      </div>
    </main>
  );
}

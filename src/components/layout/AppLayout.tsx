import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <main className="app-content">
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;

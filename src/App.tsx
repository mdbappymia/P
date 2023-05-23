import { Outlet } from "react-router-dom";
import NavBar from "./Pages/Shared/Navigation";
import { FC } from "react";
import MainFooter from "./Pages/Shared/Footer";

const App: FC = () => {
  return (
    <div className="header">
      <NavBar />
      <Outlet />
      <MainFooter />
    </div>
  );
};

export default App;

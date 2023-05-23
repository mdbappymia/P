import { Outlet } from "react-router-dom";
import NavBar from "./Pages/Shared/Navigation";
import { FC, useEffect } from "react";
import MainFooter from "./Pages/Shared/Footer";
import about from "./assets/data/about.json";
import education from "./assets/data/education.json";
import { setAllData } from "./redux/slices/portfolioSlice";
import { useDispatch } from "react-redux";

const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setAllData({
        about,
        education,
      })
    );
  }, [dispatch]);
  return (
    <div className="header black">
      <NavBar />
      <Outlet />
      <MainFooter />
    </div>
  );
};

export default App;

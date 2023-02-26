import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";
import HeaderItem from "./HeaderItem/HeaderItem";
import "./style.scss";
export default () => {
  return (
    <div>
      <div className="Header">
        <HeaderItem link="/" item={"Home"} />
        <HeaderItem link="/" item={<Logo />} />
        <HeaderItem link="/shoes" item={"Browse"} />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

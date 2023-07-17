import { useState } from "react";
import { Outlet } from "react-router-dom";
// import Card from "./UI/Card";
// import Resort from "./pages/Resort";
import SideNav from "./SideNav";
import Topbar from "./Topbar";

const Home = () => {
  const [isCollapse, setIsCollapse] = useState<boolean>(true);
  const [isMobileCollapse, setIsMobileCollapse] = useState<boolean>(true);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [text, setText] = useState("<<<");
  const [mobiletext, setMobileText] = useState("<<<");
  const collapseHandler = () => {
    if (isCollapse) setText(">>>");
    if (!isCollapse) setText("<<<");
    setIsCollapse((prevState) => {
      return !prevState;
    });
  };
  const mobileCollapseHandler = () => {
    if (isMobileCollapse) setMobileText(">>>");
    if (!isMobileCollapse) setMobileText("<<<");
    setIsMobileCollapse((prevState) => {
      return !prevState;
    });
  };

  const hoverHandler = () => {
    setIsHover((prevState) => {
      return !prevState;
    });
  };

  const mobilesidebarcollapse = !isMobileCollapse
    ? "!w-60 relative z-40  "
    : " z-40  ";

  const sideBarHover =
    isHover && !isCollapse
      ? "  w-60 delay-1000 transition ease-in z-40 relative "
      : " ";
  const mainOnHover =
    isHover && !isCollapse
      ? " transition ease-in xl:pl-[4.98rem]    absolute w-full h-full  overflow-y-scroll"
      : "relative  w-full overflow-y-scroll";

  const sidebarcollapse = !isCollapse
    ? " z-40 transition ease-in "
    : " z-40 w-60 tranisition ease-in";
  const mainclasscollapse = !isCollapse
    ? "  transition ease-in  overflow-y-scroll"
    : " w-full overflow-y-scroll";
  const sidebarclass = sidebarcollapse + " " + sideBarHover;
  const mainbarclass = mainclasscollapse + " " + mainOnHover;
  return (
    <div className="bg-slate-200 h-screen flex flex-row w-screen dark:bg-black">
      <SideNav
        mobileSideBarClassName={mobilesidebarcollapse}
        className={sidebarclass}
        onHover={hoverHandler}
        isCollapse={isCollapse}
        isMobileCollapse={isMobileCollapse}
        isHover={isHover}
        onCollapse={collapseHandler}
        onMobileCollapse={mobileCollapseHandler}
        mobileText={mobiletext}
        text={text}
      />

      <div className={mainbarclass}>
        <Topbar isCollapse={isCollapse} />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;

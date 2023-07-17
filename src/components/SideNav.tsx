import DesktopSideBar from "./UI/DesktopSidebar";
import MobileSideBar from "./UI/MobileSideBar";
// import SideNavLinks from "./SideNavLinks";

const SideNav = (props: {
  mobileSideBarClassName: string;
  mobileText: string;
  className: string;
  isCollapse: boolean;
  isMobileCollapse: boolean;
  isHover: boolean;
  onMobileCollapse: () => void;
  onCollapse: () => void;
  onHover: () => void;
  text: string;
}) => {
  return (
    <div
      className={`${
        !props.isMobileCollapse
          ? "!xs:w-16 absolute md:relative"
          : "xs:w-60 absolute md:relative"
      } md:w-max xs:h-min md:h-max z-40  dark:shadow-slate-600`}
    >
      <DesktopSideBar
        isHover={props.isHover}
        onMouseEnter={props.onHover}
        onMouseLeave={props.onHover}
        className={props.className}
        onCollapse={props.onCollapse}
        text={props.text}
        isCollapse={props.isCollapse}
      />
      <MobileSideBar
        className={props.mobileSideBarClassName}
        onCollapse={props.onMobileCollapse}
        text={props.mobileText}
        isCollapse={props.isMobileCollapse}
      />
    </div>
  );
};

export default SideNav;

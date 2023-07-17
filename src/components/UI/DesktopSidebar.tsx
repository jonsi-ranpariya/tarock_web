import SideNavLinks from "../SideNavLinks";
import Button from "./Button";

const DesktopSideBar = (props: {
  isCollapse: boolean;
  className: string;
  onCollapse: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isHover: boolean;
  text: string;
}) => {
  return (
    <div
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      className={`${
        props.className
      } md:flex flex-col text-left bg-black  text-white md:pt-3  md:h-screen z-40 xs:hidden !overflow-x-hidden ${
        !props.isCollapse && props.isHover ? "!w-60" : "w-[4.98rem]"
      } ${props.isCollapse ? "!w-60" : "w-inherit"}`}
    >
      <div className="md:flex flex-row items-center xs:hidden ">
        {props.isCollapse && (
          //   <img src={TarockLogo} className="w-44 h-6" />
          <h1 className="font-semibold  text-2xl font-sans md:text-xl xs:text-lg lg:text-xl lg:px-4 xs:pl-2 lg:w-max md:w-max xs:hidden sm:inline tracking-wide md:visible xs:collapse">
            Admin Panel
          </h1>
        )}
        <Button
          onClick={props.onCollapse}
          className={
            !props.isCollapse
              ? "mx-auto hover:bg-clip-text hover:text-transparent text-lg font-bold hover:bg-gradient-to-r from-orange-900  via-orange-500 to-white"
              : "xs:mx-auto text-lg hover:bg-clip-text hover:text-transparent  font-bold hover:bg-gradient-to-r from-orange-900 via-orange-500 to-white"
          }
        >
          {props.text}
        </Button>
      </div>
      <SideNavLinks isCollapse={props.isCollapse} isHover={props.isHover} />
    </div>
  );
};

export default DesktopSideBar;

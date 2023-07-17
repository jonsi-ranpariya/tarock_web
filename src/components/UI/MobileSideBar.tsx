import MobileSideNavLinks from "../MobileSideNavLinks";
import Button from "./Button";

const MobileSideBar = (props: {
  isCollapse: boolean;
  className: string;
  onCollapse: () => void;

  text: string;
}) => {
  return (
    <div
      className={`xs:visible md:hidden sm:pt-3 xs:py-[1.5rem] overflow-y-scroll !oveflow-x-hidden ${
        !props.isCollapse
          ? " absolute md:relative grid placeholder-content-center bg-black"
          : " absolute md:relative grid placeholder-content-center bg-clip-text text-transparent bg-gradient-to-r from-orange-900  via-orange-500 to-white"
      } h-min   ${props.className}`}
    >
      <div className="flex flex-row items-center py-0 gap-1">
        {!props.isCollapse && ( //   <img src={TarockLogo} className="w-44 h-6" />
          <h1 className="font-semibold text-white text-2xl font-sans md:text-xl xs:text-lg lg:text-xl lg:px-4 xs:pl-2 lg:w-max md:w-max  sm:inline tracking-wide md:hidden">
            Admin Panel
          </h1>
        )}
        <Button
          onClick={props.onCollapse}
          className={`${
            props.isCollapse &&
            "!bg-clip-text !text-transparent text-md  bg-gradient-to-r from-orange-900  via-orange-500 to-white text-black"
          } hover:bg-clip-text hover:text-transparent text-md  hover:bg-gradient-to-r from-orange-900  via-orange-500 to-white text-black`}
          // className={
          //   !props.isCollapse
          //     ? "mx-auto hover:bg-clip-text hover:text-transparent text-lg font-bold hover:bg-gradient-to-r from-orange-900  via-orange-500 to-white"
          //     : "xs:mx-auto text-lg hover:bg-clip-text hover:text-transparent  font-bold hover:bg-gradient-to-r from-orange-900 via-orange-500 to-white"
          // }
        >
          {props.text}
        </Button>
      </div>
      <MobileSideNavLinks isMobileCollapse={props.isCollapse} />
    </div>
  );
};

export default MobileSideBar;

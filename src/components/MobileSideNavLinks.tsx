import styles from "../styles/SideNavLinks.module.css";
import { NavLink } from "react-router-dom";
import Avatar from "../assets/emoji.svg";
import Home from "../assets/Home.svg";
import Question from "../assets/Question.svg";
import Notification from "../assets/Notification.svg";
import Managment from "../assets/Managment.svg";
import Post from "../assets/Post.svg";

const SideNavLinks = (props: {
  isCollapse?: boolean;
  isHover?: boolean;
  isMobileCollapse?: boolean;
}) => {
  return (
    <div
      className={`bg-gray-900 text-slate-600 md:flex ${
        !props.isMobileCollapse ? "xs:visible" : "xs:hidden"
      } flex-col font-normal lg:mt-2  h-screen  xs:mt-7 overflow-y-scroll overflow-x-hidden dark:bg-dimGray dark:text-mediumGray`}
    >
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: "white",
                borderLeft: "3px rgb(236,99,72) solid",
                backgroundColor: "black",
              }
            : {}
        }
        className={
          props.isCollapse ||
          (!props.isCollapse && props.isHover) ||
          !props.isMobileCollapse
            ? `${styles.sidenavlinks}  flex flex-row font-light`
            : `${styles.sidenavlinks}  w-full grid place-content-center`
        }
        to="/home/user-generated-content"
      >
        <img src={Home} className="mr-2" />
        {(props.isCollapse ||
          (!props.isCollapse && props.isHover) ||
          !props.isMobileCollapse) && <p>User Generated Content</p>}
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: "white",
                borderLeft: "3px rgb(236,99,72) solid",
                backgroundColor: "black",
              }
            : {}
        }
        className={
          props.isCollapse ||
          (!props.isCollapse && props.isHover) ||
          !props.isMobileCollapse
            ? `${styles.sidenavlinks}  flex flex-row font-light`
            : `${styles.sidenavlinks}  w-full grid place-content-center`
        }
        to="/home/daily-questions-managment"
      >
        <img src={Question} className="mr-2" />
        {(props.isCollapse ||
          (!props.isCollapse && props.isHover) ||
          !props.isMobileCollapse) && <p>Daily Questions Managment</p>}
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: "white",
                borderLeft: "3px rgb(236,99,72) solid",
                backgroundColor: "black",
              }
            : {}
        }
        className={
          props.isCollapse ||
          (!props.isCollapse && props.isHover) ||
          !props.isMobileCollapse
            ? `${styles.sidenavlinks}  flex flex-row font-light`
            : `${styles.sidenavlinks}  w-full grid place-content-center`
        }
        to="/home/push-notification-managment"
      >
        <img src={Notification} className="mr-2" />

        {(props.isCollapse ||
          (!props.isCollapse && props.isHover) ||
          !props.isMobileCollapse) && <p>Push notification management</p>}
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: "white",
                borderLeft: "3px rgb(236,99,72) solid",
                backgroundColor: "black",
              }
            : {}
        }
        className={
          props.isCollapse ||
          (!props.isCollapse && props.isHover) ||
          !props.isMobileCollapse
            ? `${styles.sidenavlinks}  flex flex-row font-light`
            : `${styles.sidenavlinks}  w-full grid place-content-center`
        }
        to="/home/user-managment"
      >
        <img src={Managment} className="mr-2" />

        {(props.isCollapse ||
          (!props.isCollapse && props.isHover) ||
          !props.isMobileCollapse) && <p>User Managment</p>}
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: "white",
                borderLeft: "3px rgb(236,99,72) solid",
                backgroundColor: "black",
              }
            : {}
        }
        className={
          props.isCollapse ||
          (!props.isCollapse && props.isHover) ||
          !props.isMobileCollapse
            ? `${styles.sidenavlinks}  flex flex-row font-light`
            : `${styles.sidenavlinks}  w-full grid place-content-center`
        }
        to="/home/user-related-content"
      >
        <img src={Home} className="mr-2" />

        {(props.isCollapse ||
          (!props.isCollapse && props.isHover) ||
          !props.isMobileCollapse) && <p>User Related Content</p>}
      </NavLink>

      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: "white",
                borderLeft: "3px rgb(236,99,72) solid",
                backgroundColor: "black",
              }
            : {}
        }
        className={
          props.isCollapse ||
          (!props.isCollapse && props.isHover) ||
          !props.isMobileCollapse
            ? `${styles.sidenavlinks}  flex flex-row font-light`
            : `${styles.sidenavlinks}  w-full grid place-content-center`
        }
        to="/home/user-avtars/"
      >
        <img src={Avatar} className="mr-2" />

        {(props.isCollapse ||
          (!props.isCollapse && props.isHover) ||
          !props.isMobileCollapse) && <p>User Avtars</p>}
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: "white",
                borderLeft: "3px rgb(236,99,72) solid",
                backgroundColor: "black",
              }
            : {}
        }
        className={
          props.isCollapse ||
          (!props.isCollapse && props.isHover) ||
          !props.isMobileCollapse
            ? `${styles.sidenavlinks}  flex flex-row font-light`
            : `${styles.sidenavlinks}  w-full grid place-content-center`
        }
        to="/home/admin-post-content"
      >
        <img src={Post} className="mr-2" />

        {(props.isCollapse ||
          (!props.isCollapse && props.isHover) ||
          !props.isMobileCollapse) && <p>Admin Post Content</p>}
      </NavLink>
    </div>
  );
};

export default SideNavLinks;

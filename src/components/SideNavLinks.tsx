import styles from "../styles/SideNavLinks.module.css";
import { Link, NavLink } from "react-router-dom";
import Avatar from "../assets/emoji.svg";
import Home from "../assets/Home.svg";
import Question from "../assets/Question.svg";
import Notification from "../assets/Notification.svg";
import Setting from "../assets/Setting.svg";
import Managment from "../assets/Managment.svg";
import DownArrow from "../assets/DownArrow.svg";
import UpArrow from "../assets/UpArrow.svg";
import Post from "../assets/Post.svg";
import { useState } from "react";
import ThemeTogglerBar from "./UI/ThemeToggler";
import Logout from "./Logout";

const SideNavLinks = (props: { isCollapse?: boolean; isHover?: boolean }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const logoutHandler = (event: React.FormEvent) => {
    setShowLogoutModal(true);
  };
  console.log(openMenu);

  return (
    <div
      className={`bg-gray-900 text-slate-600 md:flex  dark:bg-dimGray w-full dark:text-mediumGray
       text-md
       flex-col font-normal lg:mt-2  h-screen xs:hidden xs:mt-7 overflow-y-scroll !relative !overflow-x-hidden`}
    >
      {showLogoutModal && (
        <Logout
          onCancel={() => {
            setShowLogoutModal(false);
          }}
        />
      )}
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
          props.isCollapse || (!props.isCollapse && props.isHover)
            ? `${styles.sidenavlinks}  flex flex-row font-light w-full`
            : `${styles.sidenavlinks}  w-full grid place-content-center`
        }
        to="/home/user-generated-content"
      >
        <img src={Home} className="mr-2" />
        {(props.isCollapse || (!props.isCollapse && props.isHover)) && (
          <p>User Generated Content</p>
        )}
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
          props.isCollapse || (!props.isCollapse && props.isHover)
            ? `${styles.sidenavlinks}  flex flex-row font-light`
            : `${styles.sidenavlinks}  w-full grid place-content-center`
        }
        to="/home/daily-questions-managment"
      >
        <img src={Question} className="mr-2" />
        {(props.isCollapse || (!props.isCollapse && props.isHover)) && (
          <p>Daily Questions Managment</p>
        )}
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
          props.isCollapse || (!props.isCollapse && props.isHover)
            ? `${styles.sidenavlinks}  flex flex-row font-light`
            : `${styles.sidenavlinks}  w-full grid place-content-center`
        }
        to="/home/push-notification-managment"
      >
        <img src={Notification} className="mr-2" />
        {(props.isCollapse || (!props.isCollapse && props.isHover)) && (
          <p>Push notification management</p>
        )}
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
          props.isCollapse || (!props.isCollapse && props.isHover)
            ? `${styles.sidenavlinks}  flex flex-row font-light`
            : `${styles.sidenavlinks}  w-full grid place-content-center`
        }
        to="/home/user-managment"
      >
        <img src={Managment} className="mr-2" />
        {(props.isCollapse || (!props.isCollapse && props.isHover)) && (
          <p>User management</p>
        )}
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
          props.isCollapse || (!props.isCollapse && props.isHover)
            ? `${styles.sidenavlinks}  flex flex-row font-light`
            : `${styles.sidenavlinks}  w-full grid place-content-center`
        }
        to="/home/user-related-content"
      >
        <img src={Home} className="mr-2" />
        {(props.isCollapse || (!props.isCollapse && props.isHover)) && (
          <p>User Related Content</p>
        )}
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
          props.isCollapse || (!props.isCollapse && props.isHover)
            ? `${styles.sidenavlinks}  flex flex-row font-light`
            : `${styles.sidenavlinks}  w-full grid place-content-center`
        }
        to="/home/user-avtars/"
      >
        <img src={Avatar} className="mr-2" />
        {(props.isCollapse || (!props.isCollapse && props.isHover)) && (
          <p>User Avtars Content</p>
        )}
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
          props.isCollapse || (!props.isCollapse && props.isHover)
            ? `${styles.sidenavlinks}  flex flex-row font-light`
            : `${styles.sidenavlinks}  w-full grid place-content-center`
        }
        to="/home/admin-post-content"
      >
        <img src={Post} className="mr-2" />
        {(props.isCollapse || (!props.isCollapse && props.isHover)) && (
          <p>Admin Post Content</p>
        )}
      </NavLink>

      {/* settings sidenav */}
      <div className="w-full mt-auto">
        {openMenu ? (
          <ul
            className={`${
              props.isCollapse || (!props.isCollapse && props.isHover)
                ? ``
                : `invisible ease-in`
            } text-md pl-11 text-white`}
          >
            <li className="pt-2">
              <button className="" onClick={logoutHandler}>
                Logout
              </button>
            </li>
            <li className="pt-2 pb-2">
              <div className="flex gap-16">
                <p>Themes</p> <ThemeTogglerBar />
              </div>
            </li>
          </ul>
        ) : (
          ""
        )}
        <button
          className={`w-full ${
            props.isCollapse || (!props.isCollapse && props.isHover)
              ? `${styles.sidenavlinks}  flex flex-row font-light mb-5`
              : `${styles.sidenavlinks}  w-full grid place-content-center mb-5 `
          }`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <img src={Setting} className="mr-2" />
          {(props.isCollapse || (!props.isCollapse && props.isHover)) && (
            <p className="text-white">Settings</p>
          )}
          {openMenu ? (
            <img
              className={`ml-auto ${
                props.isCollapse || (!props.isCollapse && props.isHover)
                  ? ``
                  : `invisible ease-in`
              }`}
              src={DownArrow}
            />
          ) : (
            <img
              className={`ml-auto ${
                props.isCollapse || (!props.isCollapse && props.isHover)
                  ? ``
                  : `invisible ease-in`
              }`}
              src={UpArrow}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default SideNavLinks;

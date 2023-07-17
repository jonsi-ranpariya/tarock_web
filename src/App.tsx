import { useEffect, useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFoundPage from "./components/NotFoundPage";
import UserGeneratedContent from "./components/pages/UserGeneratedContent";
import DailyQuestionManagment from "./components/pages/DailyQuestionManagment";
import PushNotificationManagment from "./components/pages/PushNotificationManagment";
import UserManagment from "./components/pages/UserManagment";
import ResortMainPage from "./components/resort/ResortMainPage";
import ResortCreate from "./components/resort/ResortCreate";
import ResortEdit from "./components/resort/ResortEdit";
import ResortDelete from "./components/resort/ResortDelete";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./components/ForgotPassword";
import UserRelatedContent from "./components/pages/UserRelatedContent";
import UserMainPage from "./components/user/UserMainPage";
import UserAvtarsContent from "./components/pages/UserAvtarsContent";
import UserAvtarsMainPage from "./components/userAvatar/UserAvtarsMainPage";
import UserEdit from "./components/user/UserEdit";
import UserAvtarsPage from "./components/avtar/UserAvtarsPage";
import AdminPostContent from "./components/pages/AdminPostContent";
import AdminPostMainPage from "./components/admin-posts/AdminPostMainPage";
import DailyQuestionsMainPage from "./admin-poll/DailyQuestionsMainPage";

function App() {
  const initialToken = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleBeforeUnload = (e: {
    preventDefault: () => void;
    returnValue: string;
  }) => {
    e.preventDefault();
    const message = "Are you sure you want to leave? ";
    e.returnValue = message;
    return message;
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {initialToken === "true" && (
          <Route path="/home" element={<Outlet />}>
            <Route path="/home" element={<Home />}>
              <Route
                index
                element={<Navigate to="/home/user-related-content" replace />}
              />
              {/* <Route index element={<Navigate to="/home/user-avtars" replace/>}/> */}

              {/* demo related content */}
              <Route path="/home/user-generated-content" element={<Outlet />}>
                <Route
                  path="/home/user-generated-content/"
                  element={<UserGeneratedContent />}
                >
                  <Route index element={<ResortMainPage />}></Route>
                  <Route
                    path="/home/user-generated-content/create"
                    element={<ResortCreate />}
                  ></Route>
                  <Route
                    path="/home/user-generated-content/:id/edit"
                    element={<ResortEdit />}
                  ></Route>
                  <Route
                    path="/home/user-generated-content/:id/delete"
                    element={<ResortDelete />}
                  ></Route>
                </Route>
              </Route>

              {/* daily poll related content */}
              <Route
                path="/home/daily-questions-managment"
                element={<DailyQuestionManagment />}
              />

              {/* notification related content */}
              <Route path="/home/daily-questions-managment" element={<Outlet />}>
                <Route
                  path="/home/daily-questions-managment/"
                  element={<DailyQuestionManagment />}
                >
                  <Route index element={<DailyQuestionsMainPage />} />
                  {/* <Route
                    path="/home/user-related-content/:id/edit"
                    element={<UserEdit />}
                  ></Route> */}
                </Route>
              </Route>
              <Route
                path="/home/push-notification-managment"
                element={<PushNotificationManagment />}
              />

              {/* graph related content */}
              <Route path="/home/user-managment" element={<UserManagment />} />

              {/* user related content */}
              <Route path="/home/user-related-content" element={<Outlet />}>
                <Route
                  path="/home/user-related-content/"
                  element={<UserRelatedContent />}
                >
                  <Route index element={<UserMainPage />} />
                  <Route
                    path="/home/user-related-content/:id/edit"
                    element={<UserEdit />}
                  ></Route>
                </Route>
              </Route>
              <Route path="/home/user-avtars" element={<Outlet />}>
                <Route
                  path="/home/user-avtars/"
                  element={<UserAvtarsContent />}
                >
                  <Route index element={<UserAvtarsPage />} />
                </Route>
              </Route>
              {/* admin post routes */}
              <Route path="/home/admin-post-content" element={<Outlet />}>
                <Route
                  path="/home/admin-post-content/"
                  element={<AdminPostContent />}
                >
                  <Route index element={<AdminPostMainPage />} />
                </Route>
              </Route>
            </Route>
          </Route>
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;

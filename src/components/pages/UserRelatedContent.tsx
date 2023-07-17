import { Link, Outlet } from "react-router-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";
import UserContextProvider from "../../store/user-context";

const UserRelatedContent = () => {
  return (
    <UserContextProvider>
      <Card className=" overflow-y-scroll px-7 py-7 ">
        <div className="flex items-center">
          <h1 className="mr-auto font-bold md:text-xl xs:text-md tracking-wide text-left">
            User Related Content
          </h1>
        </div>
        <Outlet />
      </Card>
    </UserContextProvider>
  );
};

export default UserRelatedContent;

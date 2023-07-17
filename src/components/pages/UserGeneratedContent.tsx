import { Link, Outlet } from "react-router-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Dashboard = () => {
  return (
    <Card className=" overflow-y-scroll px-7 py-7 ">
      <div className="flex items-center">
        <h1 className="mr-auto font-bold md:text-xl xs:text-md tracking-wide text-left">
          User Generated Content
        </h1>
        <Link to="/home/user-generated-content/create">
          <Button
            className="px-6 py-2  bg-dimGray w-max dark:bg-white dark:text-black  text-white font-semibold rounded-lg text-md font-sans hover:bg-primaryOrange hover:text-white"
            onClick={(e: React.FormEvent) => {
              console.log("Add clciked");
            }}
          >
            Add New
          </Button>
        </Link>
      </div>

      <Outlet />
    </Card>
  );
};

export default Dashboard;

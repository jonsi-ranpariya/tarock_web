import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddQuestionModal from "../../layout/AddQuestionModal";
import Questions from "../Questions";
import Button from "../UI/Button";
import Card from "../UI/Card";
import PollContextProvider from "../../store/poll-context";

const DailyQuestionManagment = () => {
  const [showAddModal, setShowModal] = useState(false);

  return (
    <PollContextProvider>
      <Card className=" overflow-y-scroll px-7 py-6">
        {showAddModal && (
          <AddQuestionModal
            onClose={() => {
              setShowModal(false);
            }}
          />
        )}
        <div className="flex items-center">
          <h1 className="mr-auto font-bold md:text-xl xs:text-md tracking-wide text-left">
            Daily Question Managment
          </h1>
          <Link to="">
            <Button
              className="px-6 py-2  bg-black w-max dark:bg-white dark:text-black text-white font-semibold rounded-lg text-md font-sans hover:bg-primaryOrange hover:text-white"
              onClick={(e: React.FormEvent) => {
                console.log("Add clciked");
                setShowModal(true);
              }}
            >
              Add Question
            </Button>
          </Link>
        </div>
        <Outlet />
      </Card>
    </PollContextProvider >
  );
};

export default DailyQuestionManagment;

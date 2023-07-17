import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/auth-context";
import Button from "./UI/Button";
import Modal from "../layout/Modal";
import { toast } from "react-toastify";
import TarockLogo from "../assets/tarocklogo.png";

const Logout = (props: { onCancel: () => void }) => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = async (event: React.MouseEvent) => {
    authCtx.logout();
    toast.success("Succesfully Logged Out");
    navigate("/login");
  };
  return (
    <Modal>
      <div>
        <img src={TarockLogo} className="w-fit h-7 my-2" />
        <hr className="h-[0.7px]  bg-zinc-900 border-0"></hr>
      </div>
      <div className="my-3">
        <h1 className="text-black dark:font-semibold">
          Are you sure you want to logout ?
        </h1>
        <div className="flex  mt-7  gap-3 items-center ">
          <Button
            variant="filled"
            size="small"
            className="ml-auto px-6 py-2  dark:text-white bg-white w-max !text-black font-semibold rounded-lg text-md font-sans hover:bg-primaryOrange hover:text-white"
            onClick={async (e: React.FormEvent) => {
              props.onCancel();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="filled"
            size="small"
            className="px-6 py-2  bg-white w-max  dark:text-white !text-black font-semibold rounded-lg text-md font-sans hover:bg-primaryOrange hover:text-white"
            onClick={logoutHandler}
          >
            Ok
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Logout;

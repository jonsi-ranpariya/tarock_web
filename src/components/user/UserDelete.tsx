import { useNavigate } from "react-router-dom";
import { useUser } from "../../store/user-context";
import Button from "../UI/Button";
import Modal from "../../layout/Modal";
import TarockLogo from "../../assets/tarocklogo.png";

const UserDelete = (props: {
  onCancel: () => void;
  id: string;
  setShowDelete: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { deleteHandler } = useUser();
  const navigate = useNavigate();
  const deleteUserHandler = async (event: React.MouseEvent) => {
    deleteHandler(props.id);
    props.setShowDelete(false);
  };
  return (
    <Modal>
      <div>
        <img src={TarockLogo} className="w-fit h-7 my-2" />
        <hr className="h-[0.7px]  bg-zinc-900 border-0"></hr>
      </div>
      <div className="my-3">
        <h1 className="text-black dark:font-semibold">
          Are you sure you want to delete this user ?
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
            onClick={deleteUserHandler}
          >
            Ok
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default UserDelete;

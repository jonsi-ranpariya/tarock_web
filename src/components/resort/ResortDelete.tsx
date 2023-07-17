import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useCrud } from "../../store/crud-context";
import Button from "../UI/Button";

import Modal from "../../layout/Modal";

const ResortDelete = (props: {}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { deleteHandler } = useCrud();
  return (
    <Modal>
      <h1 className="text-white dark:text-black">
        Are you sure you want to delete this item?
      </h1>
      <div className="flex  mt-7">
        <Button
          variant="filled"
          size="small"
          className=" ml-auto md:px-6 py-2   xs:px-3 w-max !text-black bg-white  rounded-lg text-md font-san hover:bg-orange-200 !hover:text-white mx-2 dark:bg-primaryOrange"
          onClick={(e: React.FormEvent) => {
            navigate("/home/user-generated-content");
          }}
        >
          Cancel
        </Button>

        <Button
          variant="filled"
          size="small"
          className=" md:px-6 py-2   xs:px-3  w-max  !text-black bg-white rounded-lg text-md font-san hover:bg-orange-200 !hover:text-white dark:bg-primaryOrange"
          onClick={async (e: React.FormEvent) => {
            deleteHandler(id ? +id : 0);
            navigate("/home/user-generated-content");
          }}
        >
          Ok
        </Button>
      </div>
    </Modal>
  );
};

export default ResortDelete;

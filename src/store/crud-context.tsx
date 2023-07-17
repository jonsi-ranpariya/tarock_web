import React, { useContext, useState } from "react";
import { Product } from "../models/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
import { Option } from "react-dropdown";

type CrudResponseType = {
  datarender: Product[];
  itemdelete: boolean;
  itemcreate: boolean;
  itemedit: boolean;
  createHandler: (formData: FormData) => void;
  editHandler: (formData: FormData, id: number) => void;
  deleteHandler: (id: number) => void;
  statusHandler: (newValue: Option) => void;
  createEmoji: (formData: FormData) => void;
  updateEmoji: (id: number) => void;
  deleteEmoji: (formData: FormData, id: number) => void;
};

export const CrudContext = React.createContext<CrudResponseType>({
  datarender: [],
  itemdelete: false,
  itemcreate: false,
  itemedit: false,
  createHandler: (formData: FormData) => {},
  editHandler: (formData: FormData, id: number) => {},
  deleteHandler: (id) => {},
  statusHandler: (newValue: Option) => {},
  createEmoji: (formData: FormData) => {},
  updateEmoji: (formData: FormData, id: number) => {},
  deleteEmoji: (id) => {},
});

const CrudContextProvider = (props: { children: React.ReactNode }) => {
  const [itemdelete, setItemDelete] = useState(false);
  const [itemcreate, setItemCreate] = useState(false);
  const [itemedit, setItemEdit] = useState(false);
  const dummy_items: Product[] = [];
  const [status, setStatus] = useState("");

  //status handler
  const statusHandler = (newValue: Option) => {
    setStatus(newValue.value);
  };
  let url = "";
  //reaD HANDLER
  if (status === "All") {
    url =
      "https://interview-api.kodecreators.com/api/products/list?page=1&per_page=10";
  } else if (status === "Inactive") {
    url =
      "https://interview-api.kodecreators.com/api/products/list?page=1&per_page=10products/list?page=1&per_page=10&is_active=0";
  } else if (status === "Active") {
    url =
      "https://interview-api.kodecreators.com/api/products/list?page=1&per_page=10products/list?page=1&per_page=10&is_active=1";
  } else {
    url =
      "https://interview-api.kodecreators.com/api/products/list?page=1&per_page=10";
  }

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  const datarender: Product[] = data?.data || dummy_items;

  //delete hand;er
  const deleteHandler = async (id: number) => {
    console.log(id);
    const url = `https://interview-api.kodecreators.com/api/products/${id}/delete`;
    const res = await fetch(url, { method: "DELETE" });
    mutate();
    toast.success("Succesfully Deleted !");
  };

  //create handler
  const createHandler = async (formData: FormData) => {
    console.log(formData);
    const res = await fetch(
      "https://interview-api.kodecreators.com/api/products/create",
      {
        method: "POST",
        body: formData,
      }
    );
    mutate();
    toast.success("Succesfully Created !");
  };

  //edit handler
  const editHandler = async (formData: FormData, id: number) => {
    const res = await fetch(
      `https://interview-api.kodecreators.com/api/products/${id}/edit`,
      {
        method: "POST",
        body: formData,
      }
    );
    mutate();
    toast.success("Succesfully Edited !");
  };

  //  Emoji Api's(avtar)
  // const tokendata = localStorage.getItem('token')
  const token = JSON.parse(localStorage.getItem("token") ?? "").token;
  const createEmojiURL = 'http://35.184.195.100/adonis/api/v1/create-emoji'
  const createEmoji = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    const res = await fetch(
      createEmojiURL,
      {
        method: "POST",
        body: formData,
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );
    toast.success("Emoji Succesfully Created !");
  };

  const updateEmoji = async (file: File, id: number) => {
    const formData = new FormData();
    formData.append('image', file);

    const res = await fetch(
      `http://35.184.195.100/adonis/api/v1/update-emoji?id=${id}`,
      {
        method: "POST",
        body: formData,
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );
    toast.success("Emoji Succesfully Updated !");
  };

  const deleteEmoji = async (id: number) => {
    const res = await fetch(
      `http://35.184.195.100/adonis/api/v1/delete-emoji?id=${id}`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );
    toast.success("Emoji Succesfully Deleted !");
  };
  //  Emoji Api's(avtar)


  return (
    <CrudContext.Provider
      value={{
        datarender: datarender,
        itemdelete: itemdelete,
        itemcreate: itemcreate,
        itemedit: itemedit,
        statusHandler: statusHandler,
        editHandler: editHandler,
        createHandler: createHandler,
        deleteHandler: deleteHandler,
        createEmoji: createEmoji,
        updateEmoji: updateEmoji,
        deleteEmoji: deleteEmoji,
      }}
    >
      {props.children}
    </CrudContext.Provider>
  );
};

export function useCrud() {
  const crudCtx = useContext(CrudContext);
  return crudCtx;
}
export default CrudContextProvider;

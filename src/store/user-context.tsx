import React, { Children, useContext, useState } from "react";
import { UserResponseData } from "../models/data";
import useSWR from "swr";
import { toast } from "react-toastify";

type UserResponseType = {
  datarender: UserResponseData[];
  searchHandler: (key: string) => void;
  deleteHandler: (key: string) => void;
  editHandler: (id: string, formData: FormData) => void;
};

export const UserContext = React.createContext<UserResponseType>({
  datarender: [],
  searchHandler: (key) => {},
  deleteHandler: (key: string) => {},
  editHandler: (id: string, formData: FormData) => {},
});

const UserContextProvider = (props: { children: React.ReactNode }) => {
  const [url, setUrl] = useState(
    "http://35.184.195.100/adonis/api/v1/users/?page=1&per_page=100"
  );

  let dummy_data: UserResponseData[] = [];
  let datarender: UserResponseData[] = [];

  //search handler
  const searchHandler = (key: string) => {
    setUrl(
      `http://35.184.195.100/adonis/api/v1/users/?search=${key}&page=1&per_page=100`
    );
  };
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  datarender = data?.data?.data || dummy_data;

  //delete handler
  const deleteHandler = async (id: string) => {
    const url = `http://35.184.195.100/adonis/api/v1/users/delete-admin?id=${id}`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    mutate();
    toast.success("Succesfully Deleted !");
  };

  //edit handler
  const editHandler = async (id: string, formData: FormData) => {
    const url = `http://35.184.195.100/adonis/api/v1/admin/update-admin?id=${id}`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    mutate();
    toast.success("Succesfully Edited !");
  };
  console.log(datarender);
  
  return (
    <UserContext.Provider
      value={{
        datarender: datarender,
        searchHandler: searchHandler,
        deleteHandler: deleteHandler,
        editHandler: editHandler,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

//add daily poll handler
// const dailyPoll = async (question:string) => {
//   const url = 
// }


export function useUser() {
  let userCtx = useContext(UserContext);
  return userCtx;
}

export default UserContextProvider;

let token = JSON.parse(localStorage.getItem("token") ?? "{}").token;
export const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((r) => r.json());

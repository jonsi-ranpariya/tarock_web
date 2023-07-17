import React, { Children, useContext, useState } from "react";
import { AvtarResponseData,AvtarData } from "../models/data";
import useSWR from "swr";
import { toast } from "react-toastify";


type AvtarResponseType = {
  datarender: AvtarData[];
  createEmoji: (formData: FormData) => void;
  deleteHandler: (key: string) => void;
  editHandler: (id: string, formData: FormData) => void;
};

export const AvtarContext = React.createContext<AvtarResponseType>({
  datarender: [],
  createEmoji: (formData: FormData) => {},
  deleteHandler: (key: string) => {},
  editHandler: (id: string, formData: FormData) => {},
});

const AvtarContextProvider = (props: { children: React.ReactNode }) => {
  const [url, setUrl] = useState(
    "http://35.184.195.100/adonis/api/v1/read-emoji?page=1&per_page=100"
  );
  // const url = "http://35.184.195.100/adonis/api/v1/read-emoji?page=1&per_page=100";

  let dummy_data: AvtarData[] = [];
  let datarender: AvtarData[] = [];

  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  datarender = data?.data?.data || dummy_data;
  console.log('data------>',data)

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

  //delete handler
  const deleteHandler = async (id: number) => {
    const res = await fetch(
      `http://35.184.195.100/adonis/api/v1/delete-emoji?id=${id}`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }
    );
    mutate();
    toast.success("Emoji Succesfully Deleted !");
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

  return (
    <AvtarContext.Provider
      value={{
        datarender: datarender,
        createEmoji: createEmoji,
        deleteHandler: deleteHandler,
        editHandler: editHandler,
      }}
    >
      {props.children}
    </AvtarContext.Provider>
  );
};


export function useAvtar() {
  let userCtx = useContext(AvtarContext);
  return userCtx;
}

export default AvtarContextProvider;

let token = JSON.parse(localStorage.getItem("token") ?? "{}").token;
export const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((r) => r.json());




// import React, { useContext } from "react";
// import { AvtarResponseData } from "../models/data";
// import useSWR from "swr";

// type AvtarResponseType = {
//   datarender: AvtarResponseData[];
// };

// export const AvtarContext = React.createContext<AvtarResponseType>({
//   datarender: [],
// });

// const AvtarContextProvider = (props: { children: React.ReactNode }) => {
//   let dummy_data: AvtarResponseData[] = [];

//   let token = JSON.parse(localStorage.getItem("token") ?? "[]")?.token;

//   let url = "http://35.184.195.100/adonis/api/v1/read-emoji?page=1&per_page=100";
//   const fetcher = (url: string) =>
//     fetch(url, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }).then((r) => r.json());
//   const { data, error } = useSWR(url, fetcher);
//   console.log('data===>', data)

//   const datarender: AvtarResponseData[] = !error ? data?.data || dummy_data : [];

//   return (
//     <AvtarContext.Provider value={{ datarender: datarender }}>
//       {props.children}
//     </AvtarContext.Provider>
//   );
// };

// export function useAvtar() {
//   let userCtx = useContext(AvtarContext);
//   return userCtx;
// }

// export default AvtarContextProvider;

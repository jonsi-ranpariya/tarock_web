import { AdminPostData, PostData } from "../models/post-data";
import React, { useContext, useState } from "react";
import { fetcher } from "./user-context";
import useSWR from "swr";

type AdminPostResponseType = {
  datarender: PostData[];
  //   searchHandler: (key: string) => void;
  //   deleteHandler: (key: string) => void;
  //   editHandler: (id: string, formData: FormData) => void;
};

const PostContext = React.createContext<AdminPostResponseType>({
  datarender: [],
  //   searchHandler: (key: string) => {},
  //   deleteHandler: (key: string) => {},
  //   editHandler: (id: string, formData: FormData) => {},
});

const PostContextProvider = (props: { children: React.ReactNode }) => {
  let dummy_data: PostData[] = [];
  let datarender: PostData[] = dummy_data;

  const [url, setUrl] = useState(
    "http://35.184.195.100/adonis/api/v1/posts?page=1&per_page=100&type=post"
  );
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  datarender = data?.data?.data || dummy_data;
  console.log(datarender);
  return (
    <PostContext.Provider value={{ datarender: datarender }}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;

export const usePost = () => {
  let postCtx = useContext(PostContext);
  return postCtx;
};

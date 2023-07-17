import { useState } from "react";

const SearchBar = (props: { onClick: (key: string) => void }) => {
  let [searchKey, setSearchKey] = useState("");
  const searchHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log(searchKey);
    props.onClick(searchKey);
  };
  return (
    <form>
      <div className="flex items-baseline w-80 text-md  font-semibold font-sans text-slate-700 px-2 my-3 lg:w-80 xs:w-full py-3  border rounded-lg  dark:bg-black    ease-in focus:caret-slate-500  lg:mr-3 ">
        <input
          placeholder="Search"
          className="focus:outline-none w-full dark:bg-black"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchKey(event.target.value);
          }}
        />
        <button onClick={searchHandler} className="ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill=" rgb(148 163 184) "
            className="bi bi-search  mr-2"
            viewBox="0 0 16 16"
          >
            {" "}
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

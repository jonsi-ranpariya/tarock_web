import { useState } from 'react';
import AvtarContextProvider from '../../store/avtar-context';
import Card from '../UI/Card'
import { Outlet } from 'react-router-dom'
import Button from '../UI/Button';
import { toast } from "react-toastify";
import useSWR from "swr";
import AddEmojiModal from '../avtar/AddEmojiModal';


const UserAvtarsContent = () => {

  const [showAddModal, setShowModal] = useState(false);

  return (  
    // <AvtarContextProvider>
      <Card className='overflow-y-scroll px-7 py-7'>
      {showAddModal && (
        <AddEmojiModal
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
        <div className="flex items-center">
          <h1 className="mr-auto font-bold md:text-xl xs:text-md tracking-wide text-left">
            User Avtars
          </h1>
          {/* <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">+ Add</button> */}
          <Button
            className="px-6 py-2  bg-black w-max dark:bg-white dark:text-black text-white font-semibold rounded-lg text-md font-sans hover:bg-primaryOrange hover:text-white"
            onClick={(e: React.FormEvent) => {
              console.log("Add clciked");
              setShowModal(true);
            }}
          >
           + Add
          </Button>
        </div>
        <Outlet/>
      </Card>
    // </AvtarContextProvider>
  );
}

export default UserAvtarsContent
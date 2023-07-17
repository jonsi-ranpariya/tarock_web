import { AvtarResponseData, AvtarData } from "../../models/data";
import { useState } from "react";
import { useUser } from "../../store/user-context";
import { useNavigate } from "react-router-dom";
import TableItem from "../UI/TableItem";
import Actions from "../UI/Actions";
import Characteristics from "../UI/Characteristics";
import AvtarDelete from '../avtar/AvtarDelete'
import { useAvtar } from "../../store/avtar-context";
import UpdateEmojiModal from "../avtar/UpdateEmojiModal";

const UserTableRow = (props: { users: AvtarData[] }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [userId, setUserId] = useState(0);
  const { deleteHandler,editHandler } = useAvtar();
  const navigate = useNavigate();
  const [showAddModal, setShowModal] = useState(false);


  return (
    <tbody>
      {/* {showDelete && (
        <AvtarDelete
          id={userId}
          setShowDelete={setShowDelete}
          onCancel={() => {
            setShowDelete(false);
          }}
        />
      )}
        {showAddModal && (
        <UpdateEmojiModal
          id={userId}
          onClose={() => {
            setShowModal(false);
          }}
        />
      )} */}
      {props.users.map((user, key) => {
        console.log('props=====', props)
        return (
          <tr className="border-x-0 border-t-0 border-b border-slate-200  text-slate-600 dark:text-mediumGray text-sm font-medium xs:text-left md:text-left  xs:inline-block md:table-row  xs:py-4 md:py-0">
            <TableItem title="path" children={<img src={`https://storage.cloud.google.com/staging.tarock-web-application.appspot.com/${user.path}`} width="60" alt="avtar img"/>} />
    
            <TableItem
              title="Actions"
              children={
                <Actions
                  id={user.id}
                  onEditClick={() => {
                    setShowModal(true);
                    // editHandler(user.id)
                    console.log(user.id)

                  }}
                  onDeleteClick={(id) => {
                    setUserId(user.id);
                    setShowDelete(true);
                    // deleteHandler(user.id)
                  }}
                />
              }
            />
          </tr>
        );
      })}
    </tbody>
  );
};

export default UserTableRow;




// import { useNavigate } from "react-router-dom";
// import "../../styles/TableRow.css";
// import Actions from "./Actions";
// import TableItem from "./TableItem";
// import { useState } from "react";
// import { useCrud } from "../../store/crud-context";
// import UpdateEmojiModal from "../avtar/UpdateEmojiModal";
// import { useAvtar } from "../../store/avtar-context";

// //declare dynamic types 
// type TableRowProps<DataType> = {
//   items: Array<DataType>;
// };

// const TableRow = <T,>({ items }: TableRowProps<T>) => {
//   const navigate = useNavigate();
//   const [showAddModal, setShowModal] = useState(false);
//   // const {editHandler, deleteEmoji} = useAvtar();

//   return (
//     <tbody>
//       {items.map((item) => {        
//         return (
//           <tr className="border-x-0 border-t-0 border-b border-slate-200  text-slate-600 dark:text-mediumGray text-xs font-medium xs:text-left md:text-left  xs:inline-block md:table-row  xs:py-4 md:py-0">
//           <TableItem title="path" children={<img src={`https://storage.cloud.google.com/staging.tarock-web-application.appspot.com/${item.path}`} width="60" alt="avtar img"/>} />

//           {/* {showAddModal && (
//             <UpdateEmojiModal
//               data = {item}
//               onClose={() => {
//                 setShowModal(false);
//               }}
//             />
//           )} */}

//           <TableItem
//             title="Actions"
//             children={
//               <Actions
//                 id={item.id}  
//                 onEditClick={() => {
//                     // setShowModal(true);
//                     // editHandler(item.id)
//                 }}
//                 onDeleteClick={() => {
//                   // deleteEmoji(item.id)
//                 }}
//               />
//             }
//           />
//         </tr>
//          );
//         })}  
//     </tbody>
//   );
// };

// export default TableRow;

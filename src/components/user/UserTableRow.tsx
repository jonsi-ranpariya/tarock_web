import { UserResponseData } from "../../models/data";
import { useState } from "react";
import { useUser } from "../../store/user-context";
import { useNavigate } from "react-router-dom";
import UserDelete from "./UserDelete";
import TableItem from "../UI/TableItem";
import Actions from "../UI/Actions";
import Characteristics from "../UI/Characteristics";

const UserTableRow = (props: { users: UserResponseData[] }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [userId, setUserId] = useState("");
  const { deleteHandler } = useUser();
  const navigate = useNavigate();

  return (
    <tbody>
      {showDelete && (
        <UserDelete
          id={userId}
          setShowDelete={setShowDelete}
          onCancel={() => {
            setShowDelete(false);
          }}
        />
      )}
      {props.users.map((user, key) => {
        return (
          <tr className="border-x-0 border-t-0 border-b border-slate-200  text-slate-600 dark:text-mediumGray text-sm font-medium xs:text-left md:text-left  xs:inline-block md:table-row  xs:py-4 md:py-0">
            <TableItem title="User Id" children={user.internal_user_id} />
            <TableItem title="Email" children={user.email} />
            <TableItem title="Username" children={user.username} />

            <TableItem
              title="Characteristics"
              children={
                <Characteristics characteristics={user.characteristics ?? []} />
              }
            />
            <TableItem
              title="Actions"
              children={
                <Actions
                  id={user.internal_user_id}
                  onEditClick={() => {
                    navigate(
                      `/home/user-related-content/${user.internal_user_id}/edit`
                    );
                  }}
                  onDeleteClick={(id) => {
                    setUserId(user.internal_user_id);
                    setShowDelete(true);
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

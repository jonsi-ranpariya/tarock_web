import React, { useState } from 'react'
import { DailyPollData, PollData } from '../models/data'
import { useNavigate } from 'react-router-dom';
import Actions from '../components/UI/Actions';
import Characteristics from '../components/UI/Characteristics';
import TableItem from '../components/UI/TableItem';
import UserDelete from '../components/user/UserDelete';
import PollOptions from '../components/UI/PollOptions';

function DailyPollTableRow(props: { polls: DailyPollData[] }) {
  const [showDelete, setShowDelete] = useState(false);
  const navigate = useNavigate();
  console.log(props.polls)
  return (
    <tbody>
      {/* {showDelete && (
        <UserDelete
          id={userId}
          setShowDelete={setShowDelete}
          onCancel={() => {
            setShowDelete(false);
          }}
        />
      )} */}
      {props.polls.map((polls, key) => {
        return (
          <tr className="border-x-0 border-t-0 border-b border-slate-200  text-slate-600 dark:text-mediumGray text-sm font-medium xs:text-left md:text-left  xs:inline-block md:table-row  xs:py-4 md:py-0">

            <TableItem title="Questions" children={polls.question} />
            <TableItem title="Options" children={<PollOptions pollOption={polls?.polloption?.map(d => d.options) ?? []} />} />
            {/* <TableItem
              title="Actions"
              children={
                <Actions
                  id={user.internal_user_id}
                  onEditClick={() => {
                    navigate(
                      `/home/user-related-content/${user.internal_user_id}/edit`
                    );
                  }}
                  onDeleteClick={(id: string) => {
                    setUserId(user.internal_user_id)
                    setShowDelete(true)
                  }}
                />
              }
            /> */}
          </tr>
        )
      })}
    </tbody>
  )
}

export default DailyPollTableRow
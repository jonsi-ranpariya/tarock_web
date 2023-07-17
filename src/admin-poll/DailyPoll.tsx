import React from 'react'
import DailyPollTable from './DailyPollTable'
import { useUser } from '../store/user-context';
import { usePoll } from '../store/poll-context';

function DailyPoll() {
    let { datarender } = usePoll();
    return (
        <DailyPollTable
            data={datarender}
            rowsPerPage={10}
            header={["Questions", "Options", "Actions"]}
        />
    )
}

export default DailyPoll
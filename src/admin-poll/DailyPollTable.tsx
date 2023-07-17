import React, { useState } from 'react'
import TableHeader from '../components/UI/TableHeader';
import useTable from '../hooks/useTable';
import TableFooter from '../components/UI/TableFooter';
import DailyPollTableRow from './DailyPollTableRow';
import { DailyPollData, PollData, UserResponseData } from '../models/data';


type TableProps = {
    data: DailyPollData[];
    rowsPerPage: number;
    header: string[];
};

function DailyPollTable({ data, rowsPerPage, header }: TableProps) {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable({ data, page, rowsPerPage });

    return (
        <div>
            <table className="w-full mt-10 md:text-center  lg:text-left xs:text-center">
                <thead className="">
                    <TableHeader tableheader={header} />
                </thead>
                <DailyPollTableRow polls={slice} />
            </table>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
        </div>
    );
}

export default DailyPollTable
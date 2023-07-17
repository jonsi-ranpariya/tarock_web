import React from 'react'
import DailyPoll from './DailyPoll';
import { ExportCSV } from '../components/UI/ExportCsv';
import SearchBar from '../components/UI/SearchBar';
import { useUser } from '../store/user-context';

function DailyQuestionsMainPage() {
    let { datarender, searchHandler } = useUser();
    return (
        <div>
            <div className="mt-7 text-left lg:flex items-baseline xs:block ">
                <SearchBar
                    onClick={(key: string) => {
                        searchHandler(key);
                    }}
                />
            </div>
            <div>
                <DailyPoll />
            </div>
        </div>
    )
}

export default DailyQuestionsMainPage
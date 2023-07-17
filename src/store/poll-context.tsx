import React, { ReactNode, useContext, useState } from "react"

import { fetcher } from "./user-context"
import useSWR from "swr";
import { DailyPollData } from "../models/data";

type DailyPollType = {
    datarender: DailyPollData[],
}

export const PollContext = React.createContext<DailyPollType>({
    datarender: [],
})

const PollContextProvider = ({ children }: { children: ReactNode }) => {
    const [url, setUrl] = useState("http://35.184.195.100/adonis/api/v1/posts?type=poll")

    let dummy_data: DailyPollData[] = [];
    let datarender: DailyPollData[] = [];
    const { data, error, isLoading, mutate } = useSWR(url, fetcher);
    datarender = data?.data || dummy_data;
    console.log(datarender);

    return (
        <PollContext.Provider
            value={{
                datarender: datarender,
            }}>{children}</PollContext.Provider>
    )

}


export function usePoll() {
    let pollCtx = useContext(PollContext);
    return pollCtx
}

export default PollContextProvider

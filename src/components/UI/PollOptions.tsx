const PollOptions = (props: { pollOption: string[] }) => {
    return (
        <div>
            {props.pollOption
                .filter((item) => item)
                .map((item) => {
                    return <span>{item},</span>;
                })}
        </div>
    );
};

export default PollOptions;

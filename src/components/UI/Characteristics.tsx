const Characteristics = (props: { characteristics: string[] }) => {
  return (
    <div>
      {props.characteristics
        .filter((item) => item)
        .map((item) => {
          return <span>{item},</span>;
        })}
    </div>
  );
};

export default Characteristics;

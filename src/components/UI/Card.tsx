const Card = (props: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={`bg-white dark:bg-dimGray rounded-md shadow shadow-slate-300 dark:shadow-slate-800 dark:text-mediumGray md:mx-10 md:my-28 text-justify !overflow-x-clip xs:mx-4 sm:my-28 xs:my-28 overflow-y-scroll  ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;

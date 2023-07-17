import editLogo from "../../assets/edit.svg";
import deleteLogo from "../../assets/delete.svg";

const Actions = (props: {
  id: string | number;
  onEditClick: () => void;
  onDeleteClick: (id: string | number) => void;
}) => {
  return (
    <div className="flex gap-3">
      <button onClick={props.onEditClick}>
        <img src={editLogo} alt="logo" />
      </button>
      <button
        onClick={() => {
          props.onDeleteClick(props.id);
        }}
      >
        <img src={deleteLogo} alt="logo" />
      </button>
    </div>
  );
};

export default Actions;

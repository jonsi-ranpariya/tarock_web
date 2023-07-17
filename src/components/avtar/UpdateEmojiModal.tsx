import Modal from "../../layout/Modal";
import { useAvtar } from "../../store/avtar-context";
import { useCrud } from "../../store/crud-context";
import Button from "../UI/Button";
import Label from "../UI/Label";

const UpdateEmojiModal = (props: { 
  onClose: () => void;
  id: string;
}) => {
    console.log('props', props.id);

  const { editHandler } = useAvtar();

  const handleImageUpload = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fileInput = event.currentTarget.elements.namedItem("fileInput") as HTMLInputElement;
    const file = fileInput?.files?.[0];
    editHandler(file, 10);
    // updateEmoji(file, props?.data?.id);
  };
  

  return (
    <Modal>
      <div>
        <Label label="Select File" className="text-white text-left" />
        {/* <Input type="file" className="w-full" onChange={handleFileSelect} /> */}
        <form onSubmit={handleImageUpload}>
        <input id="fileInput" type="file" />
        {/* <input type="submit" /> */}
        <div className="flex gap-3">
          <Button
            variant="filled"
            size="small"
            className="ml-auto px-6 py-2  bg-white w-max  !text-black font-semibold rounded-lg text-md font-sans hover:bg-primaryOrange !hover:text-white"
            onClick={async (e: React.FormEvent) => {
              props.onClose();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="filled"
            size="small"
            className="px-6 py-2  bg-white w-max  !text-black font-semibold rounded-lg text-md font-sans hover:bg-primaryOrange !hover:text-white"
            type="submit"
          >
            Add
          </Button>
        </div>
      </form>
      </div>
    </Modal>
  );
};

export default UpdateEmojiModal;

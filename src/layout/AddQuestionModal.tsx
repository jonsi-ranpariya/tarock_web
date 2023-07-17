import { MenuItem, Select } from "@mui/material";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import Label from "../components/UI/Label";
import Modal from "./Modal";
import { useState } from "react";
import { useFormik } from "formik";

const AddQuestionModal = (props: { onClose: () => void }) => {
  const [optionNumber, setOptionNumber] = useState(2);
  const handleChange = (event: any) => {
    setOptionNumber(event.target.value);
  };
  let token = JSON.parse(localStorage.getItem("token") ?? "{}").token;
  const formik = useFormik({
    initialValues: {
      question: '',
      option1: [],
    },
    onSubmit: values => {
      console.log(values.question);
      console.log(values.option1);
      let formData = new FormData();
      formData.set("post_type", "poll");
      formData.set("question", values.question);
      for (let index = 0; index < optionNumber; index++) {
        formData.set(`options[${index}]`, values.option1[index]);
      }

      fetch(`http://35.184.195.100/adonis/api/v1/add-post`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData
      }).then(res => res.json())
      props.onClose()
    }
  })

  return (
    <Modal className="2xl:top-40 xl:top-20 md:top-64 xs:top-40">
      <div>
        <form action="" onSubmit={formik.handleSubmit} method='POST'>
          <Label label="Daily Poll Question" className="text-black text-left" />
          <Input className="w-full" id="question" onChange={formik.handleChange} value={formik.values.question} />
          <Label label="Number of Options" className="text-black text-left" />
          <Select className="w-full" onChange={handleChange} value={optionNumber}>
            <MenuItem value={2} className="text-lg">2</MenuItem>
            <MenuItem value={3} className="text-lg">3</MenuItem>
            <MenuItem value={4} className="text-lg">4</MenuItem>
          </Select>
          <Label label="Option 1" className="text-black text-left mt-2" />
          <Input className="w-full" id="option1[0]" onChange={formik.handleChange} value={formik.values.option1[0]} />
          <Label label="Option 2" className="text-black text-left mt-2" />
          <Input className="w-full" id="option1[1]" onChange={formik.handleChange} value={formik.values.option1[1]} />
          {
            optionNumber === 3 ? <div><Label label="Option 3" className="text-black text-left mt-2" />
              <Input className="w-full" id="option1[2]" onChange={formik.handleChange} value={formik.values.option1[2]} /></div> : <p></p>
          }
          {
            optionNumber === 4 ? <div><Label label="Option 3" className="text-black text-left mt-2" />
              <Input className="w-full" id="option1[2]" onChange={formik.handleChange} value={formik.values.option1[2]} />
              <Label label="Option 4" className="text-black text-left mt-2" />
              <Input className="w-full" id="option1[3]" onChange={formik.handleChange} value={formik.values.option1[3]} /></div> : <p></p>
          }
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
              type="submit"
              className="px-6 py-2  bg-white w-max  !text-black font-semibold rounded-lg text-md font-sans hover:bg-primaryOrange !hover:text-white"
              onClick={async (e: React.FormEvent) => {
                props.onClose();
              }}
            >
              Add
            </Button>
          </div>
        </form>
      </div>
    </Modal >
  );
};

export default AddQuestionModal;

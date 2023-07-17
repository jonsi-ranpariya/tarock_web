import Card from "../UI/Card";
import Input from "../UI/Input";
import Label from "../UI/Label";
import { Formik } from "formik";
import { FormikErrors } from "formik/dist/types";
import dayjs, { Dayjs } from "dayjs";
import TextArea from "../UI/TextArea";
import { useState } from "react";

import { TimePicker } from "../UI/TimePicker";
import DatePicker from "../UI/DatePicker";
import Button from "../UI/Button";

export interface MyFormValues {
  title: string;
  description: string;
  date?: number;
  time?: dayjs.Dayjs;
  img?: File;
}

const AboutUs = () => {
  const [time, setTime] = useState<dayjs.Dayjs>(dayjs());
  const [date, setDate] = useState<Dayjs>(dayjs());
  const [checked, setChecked] = useState(false);
  const [calendarClick, setCalendarClick] = useState(false);
  const validate = (values: MyFormValues) => {
    const errors: FormikErrors<MyFormValues> = {};
    if (values.title.trim() === "") {
      errors.title = "Please include a valid name";
    }

    if (values.description.trim() === "") {
      errors.description = "Please enter a valid description";
    }
    console.log(errors);
    return errors;
  };
  const CheckBoxHandler = () => {
    setChecked((prevState) => {
      return !prevState;
    });
  };

  console.log(checked);
  return (
    <Card className="   py-10 px-7 w-auto !overflow-y-scroll">
      <div className="">
        <h1 className="mr-auto font-bold md:text-xl xs:text-md tracking-wide text-left mb-3">
          Send Notification
        </h1>
        <hr></hr>
      </div>
      <Formik<MyFormValues>
        initialValues={{
          title: "",

          description: "",
          img: undefined,
        }}
        onSubmit={async (values) => {
          console.log(values.img);

          console.log(values.title);
          console.log(values.description);
          let formData = new FormData();
          formData.set("title", values.title);

          formData.set("description", values.description);

          if (values.img) formData.set("images[0]", values.img);

          console.log(formData);
        }}
        // enableReinitialize={!countryid}
        validate={validate}
      >
        {(props) => (
          <form className="mt-7" onSubmit={props.handleSubmit}>
            <div>
              <Label
                className="text-black font-semibold dark:text-white"
                required
                label="Title"
              ></Label>
              <Input
                id="title"
                type="title"
                value={props.values.title}
                onChange={props.handleChange}
                className="w-full placeholder-slate-800 dark:bg-black dark:text-mediumGray"
                required
                placeholder="Enter Title"
              />
              {props.touched.title && props.errors.title ? (
                <div className="text-red-600">{props.errors.title}</div>
              ) : null}
            </div>
            <div className="mt-7">
              <Label
                className="text-black font-semibold dark:text-white"
                required
                label="Description"
              ></Label>

              <TextArea
                id="description"
                value={props.values.description}
                className="w-full placeholder-slate-800 h-36 dark:bg-black dark:text-mediumGray"
                onChange={props.handleChange}
                required
                placeholder="Enter Description"
              />
              {props.touched.description && props.errors.description ? (
                <div className="text-red-600">{props.errors.description}</div>
              ) : null}
            </div>
            <div className="mt-7 flex flex-row items-center gap-2">
              <Input type="checkbox" onChange={CheckBoxHandler} className="" />
              <Label
                className="text-black font-semibold dark:text-white"
                required
                label="Schedule"
              ></Label>
            </div>
            {checked && (
              <div className="mt-4 grid xs:grid-cols-1 gap-7  md:grid-cols-2">
                <DatePicker
                  label="Pick A Date"
                  className="bg-slate-300 text-white border border-x-0  xs:w-full  rounded-lg hover:bg-slate-900 cursor-pointer"
                  // @ts-ignore
                  date={date}
                  onChange={(newValue: dayjs.Dayjs) => {
                    setDate(newValue);
                  }}
                  onAccept={() => {
                    console.log(date);
                  }}
                />
                <TimePicker
                  label="Pick A Time"
                  className="bg-slate-800  text-white border border-x-0   xs:w-full rounded-lg hover:bg-slate-900 cursor-pointer"
                  // @ts-ignore
                  time={time}
                  onChange={(newValue: dayjs.Dayjs) => {
                    setTime(newValue);
                  }}
                  onAccept={() => {}}
                />
              </div>
            )}
            <div className="mt-7">
              <Label
                className="text-black font-semibold dark:text-white"
                required
                label="Choose Image"
              ></Label>
              <Input
                id="image"
                type="file"
                accept="image/gif, image/jpeg, image/png"
                onChange={props.handleChange}
                className="w-full placeholder-slate-800 dark:bg-black dark:text-mediumGray"
                required
                placeholder="Enter Title"
              />
              {props.touched.img && props.errors.img ? (
                <div className="text-red-600">{props.errors.img}</div>
              ) : null}
            </div>
            <div className="mt-7">
              <Button
                type="submit"
                variant="filled"
                size="small"
                className="px-6 py-2  bg-black w-max  text-white font-semibold rounded-lg text-md font-sans hover:bg-primaryOrange hover:text-white"
              >
                Submit
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default AboutUs;

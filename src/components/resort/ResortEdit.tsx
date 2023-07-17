import { Formik } from "formik";
import { FormikErrors } from "formik/dist/types";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import { MyFormValues, Product } from "../../models/data";
import { useCrud } from "../../store/crud-context";
import Button from "../UI/Button";
import CKEditorComponent from "../UI/CKEditor";
import HorizontalBar from "../UI/HorizontalBar";
import ImageUpload from "../UI/ImageUpload";
import Input from "../UI/Input";
import Label from "../UI/Label";
import PdfUpload from "../UI/PdfUpload";
import CityDropdown from "./City";
import CountryDropdown from "./Country";
import StateDropdown from "./State";

const ResortEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { editHandler } = useCrud();
  //reaD HANDLER
  const url = `https://interview-api.kodecreators.com/api/products/${id}/detail`;
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR(url, fetcher);

  const item: Product = data?.data;

  //validate
  const validate = (values: MyFormValues) => {
    const errors: FormikErrors<MyFormValues> = {};
    if (values.title.trim() === "") {
      errors.title = "Please include a valid name";
    }
    if (values.status.trim() !== "0" && values.status.trim() !== "1") {
      errors.status = "Please include 0 or 1";
    }
    if (values.price <= 0) {
      errors.price = "Please enter a price greater than 0";
    }
    // if (values.description.trim() === "") {
    //   errors.description = "Please enter a valid description"
    // }
    if (values.country_id === 0) {
      errors.country_id = "Please enter a valid country";
    }
    if (values.state_id === 0) {
      errors.state_id = "Please enter a valid state";
    }
    if (values.city_id === 0) {
      errors.city_id = "Please enter a valid city";
    }
    if (values.description.trim() === "") {
      errors.description = "Please enter a valid description";
    }

    return errors;
  };
  // console.log(item.description ?? "eNTR");
  return (
    <div className="mt-7 ">
      <HorizontalBar />
      <Formik<MyFormValues>
        initialValues={{
          title: item?.title ?? "",
          price: item?.price ?? 0,
          status: item?.is_active?.toString() ?? "0",
          description: item?.description ?? "Enter a description",
          country_id: item?.country_id ? item?.country_id : 0,
          state_id: item?.state_id ? item?.state_id : 0,
          city_id: item?.city_id ? item?.city_id : 0,
        }}
        enableReinitialize
        onSubmit={async (values) => {
          let formData = new FormData();
          formData.set("title", values.title);
          formData.set("price", values.price.toString());
          formData.set("is_active", values.status);
          formData.set("description", values.description);
          formData.set("country_id", values.country_id.toString());
          formData.set("state_id", values.state_id.toString());
          formData.set("city_id", values.city_id.toString());
          if (values.img) formData.set("images[0]", values.img);
          if (values.pdf) formData.set("pdf", values.pdf);

          console.log(formData);
          editHandler(formData, item.id);
          navigate("/home/user-generated-content");
        }}
        validate={validate}
      >
        {(props) => (
          <form className="mt-7" onSubmit={props.handleSubmit}>
            <div className="grid grid-cols-12 text-left">
              <div className="md:col-span-6 xs:col-span-full">
                <Label label="TITLE" />
                <Input
                  id="title"
                  value={props.values.title}
                  placeholder="Enter Title"
                  className="lg:w-11/12 md:w-11/12 xs:w-full"
                  onChange={props.handleChange}
                />
                {props.touched.title && props.errors.title ? (
                  <div className="text-red-600">{props.errors.title}</div>
                ) : null}
              </div>
              <div className="md:col-span-6 xs:col-span-full">
                <Label label="PRICE" />
                <Input
                  id="price"
                  type="number"
                  value={props.values.price}
                  placeholder="Enter Price"
                  className="lg:w-11/12 md:w-11/12 xs:w-full"
                  onChange={props.handleChange}
                />
                {props.touched.price && props.errors.price ? (
                  <div className="text-red-600">{props.errors.price}</div>
                ) : null}
              </div>
            </div>
            <div className="grid grid-cols-12 text-left">
              <div className="md:col-span-6 xs:col-span-full">
                <Label label="STATUS" />
                <Input
                  id="status"
                  type="text"
                  value={props.values.status}
                  placeholder="Enter Status"
                  className="lg:w-11/12 md:w-11/12 xs:w-full"
                  onChange={props.handleChange}
                />
                {props.touched.status && props.errors.status ? (
                  <div className="text-red-600">{props.errors.status}</div>
                ) : null}
              </div>
              <div className="md:col-span-6 xs:col-span-full">
                <CountryDropdown
                  value={props.values.country_id}
                  onChange={(countryid) => {
                    props.setFieldValue("country_id", countryid);
                    props.setFieldValue("state_id", "");
                    props.setFieldValue("city_id", "");
                  }}
                />

                {props.touched.country_id && props.errors.country_id ? (
                  <div className="text-red-600">{props.errors.country_id}</div>
                ) : null}
              </div>
            </div>
            <div className="grid grid-cols-12 text-left">
              <div className="md:col-span-6 xs:col-span-full">
                <StateDropdown
                  value={props.values.state_id}
                  onChange={(stateid) => {
                    props.setFieldValue("state_id", stateid);
                    props.setFieldValue("city_id", "");
                  }}
                  countryid={props.values.country_id ?? 0}
                />

                {props.touched.state_id && props.errors.state_id ? (
                  <div className="text-red-600">{props.errors.state_id}</div>
                ) : null}
              </div>
              <div className="md:col-span-6 xs:col-span-full">
                <CityDropdown
                  value={props.values.city_id}
                  onChange={(cityid) => {
                    props.setFieldValue("city_id", cityid);
                  }}
                  countryid={props.values.country_id ?? 0}
                  stateid={props.values.state_id ?? 0}
                />
                {props.touched.city_id && props.errors.city_id ? (
                  <div className="text-red-600">{props.errors.city_id}</div>
                ) : null}
              </div>
            </div>
            <div className="grid grid-cols-12 text-left">
              <div className="col-span-full">
                <CKEditorComponent
                  value={props.values.description ?? ""}
                  onChange={(description: string) => {
                    console.log("on change");
                    props.setFieldValue("description", description);
                  }}
                />

                {props.touched.description && props.errors.description ? (
                  <div className="text-red-600 grid place-content-center mb-2">
                    {props.errors.description}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="grid grid-cols-12 text-left">
              <div className="md:col-span-6 xs:col-span-full">
                <ImageUpload
                  onChange={(file) => {
                    props.setFieldValue("img", file);
                  }}
                />

                {/* {props.touched.img && props.errors.img ? (
                  <div className="text-red-600">{props.errors.img}</div>
                ) : null} */}
              </div>
              <div className="md:col-span-6 xs:col-span-full">
                <PdfUpload
                  onChange={(file) => {
                    props.setFieldValue("pdf", file);
                  }}
                />
                {/* {props.touched.pdf && props.errors.pdf ? (
                  <div className="text-red-600">{props.errors.pdf}</div>
                ) : null} */}
              </div>
            </div>
            <div className="flex text-left space-x-2">
              <Button
                type="submit"
                className="px-6 py-2  bg-primaryOrange w-max  text-white font-semibold rounded-lg text-md font-sans hover:bg-orange-200 hover:text-white"
                onClick={(e: React.FormEvent) => {
                  e.preventDefault();
                  props.handleSubmit();

                  console.log("save clicked");
                }}
              >
                Save
              </Button>
              <Button
                className="px-6 py-2  bg-black w-max  text-white font-semibold rounded-lg text-md font-sans hover:bg-primaryOrange hover:text-white"
                onClick={() => {
                  alert("Are you sure you don't want to save any changes?");
                  if (window.confirm())
                    navigate("/home/user-generated-content");
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ResortEdit;

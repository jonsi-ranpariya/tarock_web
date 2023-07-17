import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import { UserFormValues, UserResponseData } from "../../models/data";
import { fetcher, useUser } from "../../store/user-context";
import { FormikErrors } from "formik/dist/types";
import HorizontalBar from "../UI/HorizontalBar";
import { Formik } from "formik";
import Label from "../UI/Label";
import Input from "../UI/Input";
import Button from "../UI/Button";

const UserEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { editHandler } = useUser();
  const url = `http://35.184.195.100/adonis/api/v1/admin/profile-admin?id=${id}`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  const userData: UserResponseData = data?.data ?? "";

  const validate = (values: UserFormValues) => {
    const errors: FormikErrors<UserFormValues> = {};
    return errors;
  };
  console.log(userData.similar_character);
  return (
    <div className="mt-7 ">
      <HorizontalBar />
      <Formik<UserFormValues>
        initialValues={{
          username: userData?.username ?? "",
          name: userData.name ?? "",
          characteristics:
            userData.characteristics?.filter((item) => item).toString() ?? "",
          status: userData.status ?? "",
          birth_date: userData.birth_date ?? "",
          gender: userData.gender ?? "",
          emoji_index: userData.emoji_index ?? 0,
          avatar_index: userData.avatar_index ?? 0,
          similar_character: userData.similar_character ?? "",
        }}
        enableReinitialize
        onSubmit={async (values) => {
          let formData = new FormData();
          formData.set("username", values.username);
          formData.set("name", values.name);
          formData.set("characteristics", values.characteristics);
          formData.set("status", values.status);
          formData.set("birth_date", values.birth_date);
          formData.set("gender", values.gender);
          formData.set("emoji_index", values.emoji_index.toString());
          formData.set("avatar_index", values.avatar_index.toString());
          formData.set("similar_character", values.similar_character);
          console.log(formData);
          editHandler(id ?? "", formData);
          navigate("/home/user-related-content");
        }}
        validate={validate}
      >
        {(props) => (
          <form className="mt-7" onSubmit={props.handleSubmit}>
            <div className="grid grid-cols-12 text-left">
              <div className="md:col-span-6 xs:col-span-full">
                <Label label="Username" />
                <Input
                  id="username"
                  type="text"
                  value={props.values.username}
                  placeholder="Enter Username"
                  className="lg:w-11/12 md:w-11/12 xs:w-full"
                  onChange={props.handleChange}
                />
              </div>
              <div className="md:col-span-6 xs:col-span-full">
                <Label label="Name" />
                <Input
                  id="name"
                  type="text"
                  value={props.values.name}
                  placeholder="Enter Name"
                  className="lg:w-11/12 md:w-11/12 xs:w-full"
                  onChange={props.handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-12 text-left">
              <div className="md:col-span-6 xs:col-span-full">
                <Label label="Characteristics" />
                <Input
                  id="characteristics"
                  type="text"
                  value={props.values.characteristics}
                  placeholder="Enter characteristics"
                  className="lg:w-11/12 md:w-11/12 xs:w-full"
                  onChange={props.handleChange}
                />
              </div>
              <div className="md:col-span-6 xs:col-span-full">
                <Label label="Status" />
                <Input
                  id="status"
                  type="text"
                  value={props.values.status}
                  placeholder="Enter Status"
                  className="lg:w-11/12 md:w-11/12 xs:w-full"
                  onChange={props.handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-12 text-left">
              <div className="md:col-span-6 xs:col-span-full">
                <Label label="Birth Date" />
                <Input
                  id="birthdate"
                  type="text"
                  value={props.values.birth_date}
                  placeholder="Enter Birthdate"
                  className="lg:w-11/12 md:w-11/12 xs:w-full"
                  onChange={props.handleChange}
                />
              </div>
              <div className="md:col-span-6 xs:col-span-full">
                <Label label="Gender" />
                <Input
                  id="gender"
                  type="text"
                  value={props.values.gender}
                  placeholder="Enter Gender"
                  className="lg:w-11/12 md:w-11/12 xs:w-full"
                  onChange={props.handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-12 text-left">
              <div className="md:col-span-6 xs:col-span-full">
                <Label label="Emoji Index" />
                <Input
                  id="emoji-index"
                  type="number"
                  value={props.values.emoji_index}
                  placeholder="Enter Emoji Index"
                  className="lg:w-11/12 md:w-11/12 xs:w-full"
                  onChange={props.handleChange}
                />
              </div>
              <div className="md:col-span-6 xs:col-span-full">
                <Label label="Avatar Index" />
                <Input
                  id="avatar-index"
                  type="number"
                  value={props.values.avatar_index}
                  placeholder="Enter Avatar Index"
                  className="lg:w-11/12 md:w-11/12 xs:w-full"
                  onChange={props.handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-12 text-left">
              <div className="md:col-span-6 xs:col-span-full">
                <Label label="Similar Character" />
                <Input
                  id="similar-character"
                  type="number"
                  value={props.values.similar_character}
                  placeholder="Enter Similar Character"
                  className="lg:w-11/12 md:w-11/12 xs:w-full"
                  onChange={props.handleChange}
                />
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
                  if (window.confirm()) navigate("/home/user-related-content");
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

export default UserEdit;

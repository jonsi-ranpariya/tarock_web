import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "../models/data";
import { AuthContext } from "../store/auth-context";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Logo from "./UI/Logo";
import { toast } from "react-toastify";
import ThemeTogglerBar from "./UI/ThemeToggler";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const emailInputRef = useRef() as React.RefObject<HTMLInputElement>;
  const passwordInputRef = useRef() as React.RefObject<HTMLInputElement>;
  const usernameInputRef = useRef() as React.RefObject<HTMLInputElement>;
  const confirmpasswordInputRef = useRef() as React.RefObject<HTMLInputElement>;
  const authCtx = useContext(AuthContext);

  const forgotPasswordHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const email: string = emailInputRef.current?.value || "";
    const username: string = usernameInputRef.current?.value || "";
    const password: string = passwordInputRef.current?.value || "";
    const confirmPassword: string =
      confirmpasswordInputRef.current?.value || "";

    if (email?.includes("@") === false) {
      setIsLoading(false);
      setEmailError("Enter a valid email");
      return;
    }
    if (!username) {
      setIsLoading(false);
      setUsernameError("Enter a valid username");
      return;
    }
    if (password?.length === 0 || password?.length <= 6) {
      setIsLoading(false);
      setPasswordError("Enter a password with more than 6 characters");
      return;
    }
    if (confirmPassword?.length === 0 || confirmPassword?.length <= 6) {
      setIsLoading(false);
      setPasswordError("Enter a password with more than 6 characters");
      return;
    }
    console.log(confirmPassword);
    let res = await fetch(
      "http://35.184.195.100/adonis/api/v1/forgot-password",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password,
          confirm_password: confirmPassword,
        }),
      }
    );

    if (res.status === 200) {
      let data: UserData = await res.json();

      setIsLoading(false);
      if (data.status === 0) {
        setError(data.message);
        return;
      }
      navigate(`/login`);
      toast.success("Password Changed");
    } else {
      let data: any = await res.json();

      setIsLoading(false);
      if (data.status === 0) {
        setError(data.message);
      }
    }
  };
  //handle changes
  const emailChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.includes("@")) setEmailError("");
    setError("");
    setIsLoading(false);
  };
  const usernameChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.value) setUsernameError("");
    setError("");
    setIsLoading(false);
  };
  const passwordChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.length >= 6) setPasswordError("");
    setError("");
    setIsLoading(false);
  };
  const confirmPasswordChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    if (event.currentTarget.value.length >= 6) setConfirmPasswordError("");
    setError("");
    setIsLoading(false);
  };
  return (
    <div
      className={`h-screen bg-blue-50 flex justify-center items-center xs:px-5  dark:bg-black`}
    >
      <div
        className={`bg-white mx-auto rounded-lg py-10 md:w-max xs:w-full md:px-6 xs:px-2 grid place-content-center dark:bg-dimGray
          
          `}
      >
        <Logo />

        <h1 className="font-bold font-sans text-xl text-slate-900 my-3 mx-auto dark:text-mediumGray">
          {" "}
          Tarock Admin
        </h1>
        <form onSubmit={forgotPasswordHandler} autoComplete="off">
          <Input className="hidden" autoComplete="off" />

          <Input
            type="text"
            placeholder="Username"
            autoComplete="off"
            name="username"
            required
            className="md:w-80 xs:w-56 text-slate-700 dark:text-mediumGray"
            ref={usernameInputRef}
            onChange={usernameChangeHandler}
          />
          {usernameError && (
            <p className="text-red-600 text-sm my-3 mx-auto">{usernameError}</p>
          )}
          <Input
            type="email"
            name="email"
            autoComplete="off"
            ref={emailInputRef}
            className="md:w-80 xs:w-56 text-slate-700 dark:text-mediumGray"
            required
            placeholder="Email"
            onChange={emailChangeHandler}
          />
          {emailError && (
            <p className="text-red-600 text-sm mx-auto">{emailError}</p>
          )}
          <Input
            type="password"
            placeholder="Password"
            autoComplete="off"
            required
            className="md:w-80 xs:w-56 text-slate-700 dark:text-mediumGray"
            ref={passwordInputRef}
            onChange={passwordChangeHandler}
          />
          {passwordError && (
            <p className="text-red-600 text-sm my-3 mx-auto">{passwordError}</p>
          )}
          <Input
            type="password"
            autoComplete="off"
            placeholder="Confirm Password"
            required
            className="md:w-80 xs:w-56 text-slate-700 dark:text-mediumGray"
            ref={confirmpasswordInputRef}
            onChange={confirmPasswordChangeHandler}
          />
          {confirmPasswordError && (
            <p className="text-red-600 text-sm my-3 mx-auto">
              {confirmPasswordError}
            </p>
          )}
          <div className="flex items-center">
            <div className=" ml-1 flex items-center">
              {" "}
              <ThemeTogglerBar />
            </div>
            <div className="ml-auto mr-2">
              <h4 className="ml-auto text-sky-300 text-sm font-semibold font-sans cursor-pointer">
                Remember Me ?
              </h4>
            </div>
          </div>
          <Button
            type="submit"
            loading={isLoading}
            disabled={
              isLoading ||
              emailError.trim() !== "" ||
              passwordError.trim() !== ""
            }
            variant="filled"
            color="success"
            size="normal"
            className="px-6 py-2   mt-10 bg-blue-500 w-max mx-auto text-white rounded-lg text-md font-sans hover:bg-blue-600"
          >
            Submit
          </Button>

          {error !== "" && (
            <p className="text-red-600 pt-5 w-56 mx-auto text-center font-semibold">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

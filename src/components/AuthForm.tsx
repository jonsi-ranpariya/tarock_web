import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../models/data";
import { AuthContext } from "../store/auth-context";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Logo from "./UI/Logo";
import { toast } from "react-toastify";
import ThemeTogglerBar from "./UI/ThemeToggler";
import { useTheme } from "../store/theme-context";
import hidePassword from "../images/password/eye-off.svg";
import unHidePassword from "../images/password/eye.svg";

const AuthForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const emailInputRef = useRef() as React.RefObject<HTMLInputElement>;
  const passwordInputRef = useRef() as React.RefObject<HTMLInputElement>;
  const authCtx = useContext(AuthContext);
  const { theme } = useTheme();

  const signInHandler = async (event: React.FormEvent) => {
    setIsLoading(true);
    const email: string = emailInputRef.current?.value || "";
    const password: string = passwordInputRef.current?.value || "";

    if (email?.includes("@") === false) {
      setIsLoading(false);
      setEmailError("Enter a valid email");
      return;
    }
    if (password?.length === 0 || password?.length <= 6) {
      setIsLoading(false);
      setPasswordError("Enter a password with more than 6 characters");
      return;
    }
    let res = await fetch("http://35.184.195.100/adonis/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (res.status === 200) {
      let data: UserData = await res.json();

      setIsLoading(false);
      if (data.status === 0) {
        setError(data.message);
        return;
      }

      authCtx.setData(data);
      authCtx.login(data);
      navigate(`/home`);
      toast.success("Welcome to TAROCK");
    } else {
      let data: any = await res.json();

      setIsLoading(false);
      if (data.status === "0") {
        setError(data.message);
      }
    }
  };

  const emailChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.includes("@")) setEmailError("");
    setError("");
    setIsLoading(false);
  };
  const passwordChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.length >= 6) setPasswordError("");
    setError("");
    setIsLoading(false);
  };
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (event: any) => {
    setPasswordInput(event.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <div
      className={`bg-white mx-auto rounded-lg py-10 md:w-max xs:w-full md:px-6 xs:px-2 grid place-content-center dark:bg-dimGray
      
      `}
    >
      <Logo />

      <h1 className="font-bold font-sans text-xl text-slate-700 mb-3 mx-auto dark:text-mediumGray">
        {" "}
        Sign In
      </h1>
      <Input
        type="email"
        ref={emailInputRef}
        className="md:w-80 xs:w-56 text-slate-700 dark:text-mediumGray"
        required
        placeholder="Email"
        onChange={emailChangeHandler}
      />
      {emailError && (
        <p className="text-red-600 text-sm mx-auto">{emailError}</p>
      )}
      <div className="flex items-center w-80 text-md  font-semibold font-sans text-slate-400 px-2 my-3 lg:w-80 xs:w-full py-3  border rounded-lg  dark:bg-black    ease-in focus:caret-slate-500  lg:mr-3 ">
        <input
          type={passwordType}
          placeholder="Password"
          required
          className="md:w-80 xs:w-56 text-slate-700 dark:text-mediumGray outline-none "
          ref={passwordInputRef}
          onChange={passwordChangeHandler}
        />
        <button className="h-5 w-5" onClick={togglePassword}>
          {passwordType === "password" ? (
            <img src={hidePassword} />
          ) : (
            <img src={unHidePassword} />
          )}
        </button>
      </div>
      {passwordError && (
        <p className="text-red-600 text-sm my-3 mx-auto">{passwordError}</p>
      )}
      <div className="flex">
        <div className="ml-auto mr-2">
          <h4 className="ml-auto text-orange-300 text-xs font-semibold font-sans">
            <Link to="/forgot-password">Forgot Password ?</Link>
          </h4>
        </div>
      </div>
      <Button
        type="submit"
        loading={isLoading}
        disabled={
          isLoading || emailError.trim() !== "" || passwordError.trim() !== ""
        }
        onClick={signInHandler}
        variant="filled"
        color="success"
        size="normal"
        className="px-6 py-2   mt-10 bg-primaryOrange w-max mx-auto text-white rounded-lg text-md font-sans hover:bg-orange-500"
      >
        Sign In
      </Button>

      {error !== "" && (
        <p className="text-red-600 pt-5 w-56 mx-auto text-center font-semibold">
          {error}
        </p>
      )}
    </div>
  );
};

export default AuthForm;

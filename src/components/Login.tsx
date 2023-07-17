import { useTheme } from "../store/theme-context";
import AuthForm from "./AuthForm";

const Login = () => {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <div
      className={`h-screen bg-gray-100 flex justify-center items-center xs:px-5  dark:bg-black`}
    >
      <AuthForm />
    </div>
  );
};

export default Login;

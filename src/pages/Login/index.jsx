import Header from "../../components/login/Header";
import LoginForm from "../../components/login/LoginForm";

const Login = () => {
  return (
    <div className="bg-[#192132] w-full h-screen flex justify-center items-center">
      <div className="max-w-md  w-full">
        <Header />
        <LoginForm />
      </div>
    </div>
  );
};
export default Login;

import { Header, LoginForm } from "../../components/login";

const Login = () => {
  return (
    <div className="bg-[#192132] w-full h-screen flex justify-center items-center">
      <div className="max-w-md  w-full">
        <Header />
        <LoginForm />
        <div className="text-[#697a9b] flex flex-row items-center justify-center mt-5 gap-5">
          <p className="">Privacy Notice </p>
          <div className="w-px h-4 bg-[#697a9b]"></div>
          <p className="">Term of service</p>
        </div>
      </div>
    </div>
  );
};
export default Login;

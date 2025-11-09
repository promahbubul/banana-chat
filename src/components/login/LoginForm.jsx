import { LockKeyhole, Mail } from "lucide-react";
import LabelInput from "./LabelInput";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="bg-[#26334d] mt-5 rounded-md p-10 ">
      <LabelInput
        label={"Username"}
        Icon={Mail}
        placeholder={"Enter username"}
      />
      <LabelInput
        className={"mt-4"}
        label={"Password"}
        Icon={LockKeyhole}
        placeholder={"Enter password"}
      />
      <div className="flex flex-row items-center justify-between my-5">
        <div className="flex flex-row items-center gap-2 ">
          <input
            type="checkbox"
            name=""
            id=""
            className="text-2xl  border border-[#697a9b] hover:border-[#5f5af6] accent-[#5f5af6] bg-transparent w-5 rounded-md h-5 "
          />
          <p className="text-[#a3adbb] text-base">Remember me</p>
        </div>
        <p className="text-sm text-[#697a9b] cursor-pointer hover:text-[#a3adbb]">
          Forgot Password?
        </p>
      </div>
      <button className="w-full bg-[#5f5af6] text-center rounded-md  font-medium text-lg py-3 text-white cursor-pointer">
        Sign In
      </button>
      <p className="text-[#a3adbb] text-center mt-3">
        Dont have Account?{" "}
        <Link className="text-[#5f5af6]" to={"/signup"}>
          Create account
        </Link>
      </p>
    </form>
  );
};
export default LoginForm;

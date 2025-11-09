import { LockKeyhole, Mail } from "lucide-react";
import LabelInput from "./LabelInput";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import SocialLoginBtn from "./SocialLoginBtn";

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
      <div className="flex flex-row items-center gap-3 my-5">
        <div className="w-full h-px bg-[#697a9b]"></div>
        <p className="text-[#697a9b] font-medium">OR</p>
        <div className="w-full h-px bg-[#697a9b]"></div>
      </div>
      <div className="flex flex-row items-center gap-5">
        <SocialLoginBtn title={"Google"} Icon={FcGoogle} />
        <SocialLoginBtn title={"Github"} Icon={FaGithub} />
      </div>
    </form>
  );
};
export default LoginForm;

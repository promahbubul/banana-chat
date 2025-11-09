import { LockKeyhole, Mail } from "lucide-react";
import LabelInput from "../ui/LabelInput";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import SocialLoginBtn from "../ui/SocialLoginBtn";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import useLoginStore from "../../store/useLoginStore";

const LoginForm = () => {
  const { isChecked, setIsChecked } = useLoginStore();
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
          <div
            onClick={() => setIsChecked(!isChecked)}
            className="rounded-xl cursor-pointer overflow-hidden"
          >
            {isChecked ? (
              <MdCheckBox className="text-2xl text-[#5f5af6] hover:text-[#5f5af6] " />
            ) : (
              <MdCheckBoxOutlineBlank className="text-2xl text-[#697a9b] hover:text-[#5f5af6] " />
            )}
          </div>
          <p
            onClick={() => setIsChecked(!isChecked)}
            className="text-[#a3adbb] text-base cursor-pointer"
          >
            Remember me
          </p>
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

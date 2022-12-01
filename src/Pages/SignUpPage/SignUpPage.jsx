import React from "react";
import SignUpImage from "../../assets/images/formImage.png";
import logo from '../../assets/logo/logo.svg'
import SignUpForm from "../../Components/SignUpForm/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-center h-full items-center mx-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          <div className="">
            <img src={logo} alt="" />
            <div className="items-start">
              <img src={SignUpImage} alt="" />
            </div>
          </div>

          <div className="w-1/2">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

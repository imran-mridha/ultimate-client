import React from 'react';
import SignUpImage from "../../assets/images/formImage.png";
import logo from '../../assets/logo/logo.svg'
import LoginForm from '../../Components/LoginForm/LoginForm';

const LogInPage = () => {
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
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
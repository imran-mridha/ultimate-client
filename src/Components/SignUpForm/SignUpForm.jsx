import React, { useState } from "react";
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom'

const SignUpForm = () => {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0])
  const [state, setState] = useState({
    first_name: '',
    last_Name: '',
    phone_number: '',
    email: '',
    password: ''

  })

  
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  console.log(state);
  const next = () => {
    if (formNo === 1 && state.first_name && state.last_Name) {
      setFormNo(formNo + 1)
    }
    else if (formNo === 2 && state.phone_number && state.email) {
      setFormNo(formNo + 1)
    } else {
      toast.error('Please fillup all input field')
    }
  }
  const pre = () => {
    setFormNo(formNo - 1)
  }
  const finalSubmit = () => {
    if (state.password.length < 8) {
      return toast.error('Password Must Be 8 Character')
    } else {
      // toast.error('Please fillup all input field')
      toast.success('Form Submited')
    }
  }
  return (
    <div className="rounded-md shadow-md p-5">
      <h2 className="text-2xl text-center my-10">Sign Up Form</h2>
      <div className="">
        {formNo === 1 && (
          <div>
            <div className="flex flex-col mb-2">
              <input
                value={state.first_name}
                onChange={inputHandle}
                className="w-full p-2 border-b border-border mt-1 outline-0 focus:border-primary text-sm"
                type="text"
                name="first_name"
                placeholder="Write First Name"
                id="first_name"
              />
            </div>
            <div className="flex flex-col mb-2 w-full my-10">
              <input
                value={state.last_Name}
                onChange={inputHandle}
                className="w-full p-2 border-b border-border mt-1 outline-0 focus:border-primary text-sm"
                type="text"
                name="last_Name"
                placeholder="Write Last Name"
                id="last_Name"
              />
            </div>
            <div className="mt-4 flex justify-center items-center">
              <button
                onClick={next}
                className="px-3 py-2 text-lg rounded-md text-white bg-primary"
              >
                Next Step
              </button>
            </div>
            <div className="my-5 text-center">
              <p className="text-accent">Already Have an account? <span className="font-semibold text-primary uppercase"><Link to='/login'>Login Here</Link></span></p>
            </div>
          </div>
        )}

        {formNo === 2 && (
          <div>
            <div className="flex flex-col mb-2">
              <input
                value={state.phone_number}
                onChange={inputHandle}
                className="w-full p-2 border-b border-border mt-1 outline-0 focus:border-primary text-sm"
                type="text"
                name="phone_number"
                placeholder="+8801000000000"
                id="phone_number"
              />
            </div>
            <div className="flex flex-col mb-2">
              <input
                value={state.email}
                onChange={inputHandle}
                className="w-full p-2 border-b border-border mt-1 outline-0 focus:border-primary text-sm"
                type="email"
                name="email"
                placeholder="Write Email Address"
                id="email"
              />
            </div>
            <div className="mt-4 gap-3 flex justify-center items-center">
              <button
                onClick={pre}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-accent"
              >
                Previous
              </button>
              <button
                onClick={next}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-primary"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {formNo === 3 && (
          <div>
            <div className="flex flex-col mb-2">
              <input
                value={state.password}
                onChange={inputHandle}
                className="w-full p-2 border-b border-border mt-1 outline-0 focus:border-primary text-sm"
                type="password"
                name="password"
                placeholder="Write Password"
                id="password"
              />
            </div>
            <div className="mt-4 gap-3 flex justify-center items-center">
              <button
                onClick={pre}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-accent"
              >
                Previous
              </button>
              <button
                onClick={finalSubmit}
                className="px-3 py-2 text-lg rounded-md w-full text-white bg-primary"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;

import React, { useState } from "react";
import Header from "../component/Header";
import { useSelector } from "react-redux";
import loginSignupImage from "../assests/login-animation.gif";
import { Link, useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";

import { toast } from "react-hot-toast";

const Dbregister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
    dob: "",
    area: "",
    document: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    area: "",
    document: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const isValidFullName = /^[A-Za-z ]+$/.test(value);
    var pattern = /^[6789]\d{9}$/.test(value);
    var passpattern = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value);
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      value
    );

    if (name === "document") {
      const file = e.target.files[0]; 
      setData((prev) => ({
        ...prev,
        [name]: file, 
      }));
    } else {
      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    if (name === "fullName") {
      if (!isValidFullName) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Full name must contain only letters",
        }));
      } else if (value.length < 3) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Full name must be at least 3 characters long",
        }));
      } else if (value.length > 20) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Full name must have maximum 20 characters",
        }));
      } else {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "", // Clear the validation error
        }));
      }
    }

    if (name === "phone") {
      if (!pattern) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Enter Valid Phone number",
        }));
      } else {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "", // Clear the validation error
        }));
      }
    }

    if (name === "password") {
      if (value.length < 5) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Password must be at least 5 characters long",
        }));
      } else if (!passpattern) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Atleast one special character required",
        }));
      } else if (value.length > 15) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Password must have maximum 20 characters",
        }));
      } else {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "", // Clear the validation error
        }));
      }
    }

    if (name === "email") {
      if (!emailPattern) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Enter Valid Email id",
        }));
      } else {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "", // Clear the validation error
        }));
      }
    }

    if (name === "dob") {
      const dobDate = new Date(value);
      const maxAllowedDate = new Date("2005-01-01");

      if (dobDate > maxAllowedDate) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Date of birth must be on or before 1-1-2005",
        }));
      }
    }

    
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const {
  //     fullName,
  //     phone,
  //     email,
  //     password,
  //     confirmpassword,
  //     dob,
  //     area,
  //     document,
  //   } = data;
  //   if (
  //     fullName &&
  //     phone &&
  //     email &&
  //     password &&
  //     confirmpassword &&
  //     dob &&
  //     area &&
  //     document
  //   ) {
  //     if (password === confirmpassword) {
  //       const fetchData = await fetch(
  //         `${process.env.REACT_APP_SERVER_DOMIN}/dbregister`,
  //         {
  //           method: "POST",
  //           headers: {
  //             "content-type": "application/json",
  //           },
  //           body: JSON.stringify(data),
  //         }
  //       );

  //       const dataRes = await fetchData.json();
  //       console.log(dataRes);

  //       //alert(dataRes.message)
  //       toast(dataRes.message);
  //       if (dataRes.alert) {
  //         // toast(`Connection ID: ${dataRes.connectionId}`);
  //         navigate("/");
  //       }
  //     } else {
  //       alert("password and confirm password not equal");
  //     }
  //   } else {
  //     alert("Please fill all fields");
  //     console.log(data);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(data.document);
  
    const formData = new FormData();
    formData.append('fullName', data.fullName);
    formData.append('phone', data.phone);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('confirmpassword', data.confirmpassword);
    formData.append('dob', data.dob);
    formData.append('area', data.area);
    formData.append('document', data.document);
  
    if (
      data.fullName &&
      data.phone &&
      data.email &&
      data.password &&
      data.confirmpassword &&
      data.dob &&
      data.area &&
      data.document
    ) {
      if (data.password === data.confirmpassword) {
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMIN}/dbregister`,
          {
            method: "POST",
            body: formData, // Use FormData object instead of JSON.stringify(data)
          }
        );
  
        const dataRes = await fetchData.json();
        console.log(dataRes);
  
        toast(dataRes.message);
        if (dataRes.alert) {
          navigate("/");
        }
      } else {
        alert("password and confirm password not equal");
      }
    } else {
      alert("Please fill all fields");
      console.log(data);
    }
  };
  

  return (
    <div>
      <Header />
      <main className="pt-28 bg-slate-100 min-h-[calc(100vh)]">
        <div className="p-3 md:p-4">
          <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4 rounded-[20px] mt-0">
            {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
            <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
              <img src={loginSignupImage} className="w-full h-full" />
            </div>

            <form className="w-full py-3 flex flex-col" encType="multipart/form-data" onSubmit={handleSubmit}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type={"text"}
                id="fullName"
                name="fullName"
                className="mt-2 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                value={data.fullName}
                onChange={handleOnChange}
              />
              {validationErrors.fullName && (
                <p className="text-red-500">{validationErrors.fullName}</p>
              )}

              <label htmlFor="phone">Phone</label>
              <input
                type={"tel"}
                id="phone"
                name="phone"
                className="mt-2 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                value={data.phone}
                onChange={handleOnChange}
              />
              {validationErrors.phone && (
                <p className="text-red-500">{validationErrors.phone}</p>
              )}

              <label htmlFor="email">Email</label>
              <input
                type={"email"}
                id="email"
                name="email"
                className="mt-2 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                value={data.email}
                onChange={handleOnChange}
              />
              {validationErrors.email && (
                <p className="text-red-500">{validationErrors.email}</p>
              )}

              <label htmlFor="dob">Date of Birth</label>
              <input
                type={"date"}
                id="dob"
                name="dob"
                className="mt-2 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                value={data.dob}
                onChange={handleOnChange}
              />
              {validationErrors.dob && (
                <p className="text-red-500">{validationErrors.dob}</p>
              )}

              <label htmlFor="area">Select Area</label>
              <select
                id="area"
                name="area"
                className="mt-2 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                value={data.area}
                onChange={handleOnChange}
              >
                <option value="">Select Area</option>
                <option value="area1">Area 1</option>
                <option value="area2">Area 2</option>
                <option value="area3">Area 3</option>
              </select>

              <label htmlFor="password">Password</label>
              <div className="flex px-2 py-1 bg-slate-200 rounded mt-2 mb-2 focus-within:outline focus-within:outline-blue-300">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className=" w-full bg-slate-200 border-none outline-none "
                  value={data.password}
                  onChange={handleOnChange}
                />
                <span
                  className="flex text-xl cursor-pointer"
                  onClick={handleShowPassword}
                >
                  {showPassword ? <BiShow /> : <BiHide />}
                </span>
              </div>
              {validationErrors.password && (
                <p className="text-red-500">{validationErrors.password}</p>
              )}

              <label htmlFor="confirmpassword">Confirm Password</label>
              <div className="flex px-2 py-1 bg-slate-200 rounded mt-2 mb-2  focus-within:outline focus-within:outline-blue-300">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmpassword"
                  name="confirmpassword"
                  className=" w-full bg-slate-200 border-none outline-none "
                  value={data.confirmpassword}
                  onChange={handleOnChange}
                />
                <span
                  className="flex text-xl cursor-pointer"
                  onClick={handleShowConfirmPassword}
                >
                  {showConfirmPassword ? <BiShow /> : <BiHide />}
                </span>
              </div>

              <label htmlFor="document">Upload Document</label>
              <input
                type="file"
                id="document"
                name="document"
                className="mt-2 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
                onChange={handleOnChange}
              />

              <button className="w-full max-w-[150px] m-auto  bg-blue-900 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4">
                Sign up
              </button>
            </form>
            <p className="text-left text-sm mt-2">
              Already have account ?{" "}
              <Link to={"/dblogin"} className="text-blue-900 underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dbregister;

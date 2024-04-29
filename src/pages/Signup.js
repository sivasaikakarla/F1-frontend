import React, { useState } from "react";
import loginSignupImage from "../assests/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast"
import Header from "../component/Header";

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [data,setData] = useState({
    fullName : "",
    phone : "",
    email : "",
    password :"",
    confirmPassword : "",
    })
    console.log(data)


    const [validationErrors, setValidationErrors] = useState({
      fullName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const isValidFullName = /^[A-Za-z ]+$/.test(value);
    var pattern = /^[6789]\d{9}$/.test(value);
    var passpattern = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value);
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
  
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  
    if (name === "fullName") {
      if (!isValidFullName) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Full name must contain only letters",
        }));
      } else if (value.length < 3 ) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Full name must be at least 3 characters long",
        }));
      } 
      else if (value.length > 20 ) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Full name must have maximum 20 characters",
        }));
      } 
      else {
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
      } 
      else {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "", // Clear the validation error
        }));
      }
    }

    if (name === "password") {
      if (value.length < 5 ) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Password must be at least 5 characters long",
        }));
      } 
       else if (!passpattern) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Atleast one special character required",
        }));
      }
      else if (value.length > 15 ) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Password must have maximum 20 characters",
        }));
      } 
      else {
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
      } 
      else {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "", // Clear the validation error
        }));
      }
    }

  };

  const email2 = data.email
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    // Assuming you have a server endpoint for sending OTP
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/send-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email2 }),
      });

      if (response.ok) {
        setIsOtpSent(true);
        alert('OTP sent successfully!');
      } else {
        alert('Failed to send OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    // Assuming you have a server endpoint for verifying OTP
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email2, otp }),
      });

      if (response.ok) {
        alert('OTP verified successfully! User can now be registered.');
        // Implement user registration logic here
        const { fullName,phone, email, password, confirmPassword } = data
        if (fullName && phone && email && password && confirmPassword) {
          if (password === confirmPassword) {
            const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`,{
              method : "POST",
              headers : {
                "content-type":"application/json"
              },
              body : JSON.stringify(data)
            })
    
            const dataRes = await fetchData.json()
            console.log(dataRes)
    
            //alert(dataRes.message)
            toast(dataRes.message)
            if(dataRes.alert){
            navigate("/signin")
            }
          }
          else{
            alert("password and confirm password not equal")
              }
            }
      else{
        alert("Please fill all fields");
      }
        
        
      } else {
        alert('Failed to verify OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };
  
  
  
  console.log(process.env.REACT_APP_SERVER_DOMIN)

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const { fullName,phone, email, password, confirmPassword } = data
    if (fullName && phone && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`,{
          method : "POST",
          headers : {
            "content-type":"application/json"
          },
          body : JSON.stringify(data)
        })

        const dataRes = await fetchData.json()
        console.log(dataRes)

        //alert(dataRes.message)
        toast(dataRes.message)
        if(dataRes.alert){
        navigate("/signin")
        }
      }
      else{
        alert("password and confirm password not equal")
          }
        }
  else{
    alert("Please fill all fields");
  }
    
  }
 

  

  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   setData((preve) => {
  //     return {
  //       ...preve,
  //       [name]: value,
  //     };
  //   });
  // };

  

      

  return (
    <div>
    <Header />
    <main className='pt-28 bg-slate-100 min-h-[calc(100vh)]'>
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4 rounded-[20px] mt-0">
        {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
          <img src={loginSignupImage} className="w-full h-full" />

         
        </div>

        <form className="w-full py-3 flex flex-col"  >
          <label htmlFor="fullName">Full Name</label>
          <input
            type={"text"}
            id="fullName"
            name="fullName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value = {data.fullName}
            onChange = {handleOnChange}
          />
           {validationErrors.fullName && (
        <p className="text-red-500">{validationErrors.fullName}</p>
      )}

          <label htmlFor="phone">Phone</label>
          <input
            type={"tel"}
            id="phone"
            name="phone"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value = {data.phone}
            onChange = {handleOnChange}
          />
           {validationErrors.phone && (
        <p className="text-red-500">{validationErrors.phone}</p>
      )}

          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value = {data.email}
            onChange = {handleOnChange}
          />
          {validationErrors.email && (
        <p className="text-red-500">{validationErrors.email}</p>)}

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none "
              value = {data.password}
             onChange = {handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          {validationErrors.password && (
        <p className="text-red-500">{validationErrors.password}</p>)}

          <label htmlFor="confirmpassword">Confirm Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-300">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmPassword"
              className=" w-full bg-slate-200 border-none outline-none "
              value = {data.confirmPassword}
              onChange = {handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
{!isOtpSent ? (
          <button className="w-full max-w-[150px] m-auto  bg-blue-900 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4" onClick={handleSignup}>
            Sign up
          </button> ) : (
            <>
             <label>OTP:</label>
             <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={{
              border: '2px solid black',
            }}
            /><br></br>
            <button   style={{
                    backgroundColor: '#2980b9',
                    color: 'white',
                    border: '2px solid #2980b9',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    width:'100px',
                    marginLeft:'35%',
                    borderRadius:'10px'
                  }} onClick={handleVerifyOtp}>Verify OTP</button>
          </>
        )}
          
        </form>
        <p className="text-left text-sm mt-2">
          Already have account ?{" "}
          <Link to={"/signin"} className="text-blue-900 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
    </main>
    </div>
  );
}

export default Signup;

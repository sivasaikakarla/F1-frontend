import React , {useState} from 'react';
import UserHeader from '../component/UserHeader';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast"

const NewConnection = () => {

  const userData  = useSelector((state) => state.userSliceReducer)
  const navigate = useNavigate();
  const [data,setData] = useState({
  fullName: userData.fullName || '',
  phone: userData.phone || '',
  email: userData.email || '',
    aadhar :"",
    dob : "",
    address : "",
    gender:"",
    area:"",
    document:"",
    })

    const [documentURL, setDocumentURL] = useState("");
    console.log(documentURL);

    const [validationErrors, setValidationErrors] = useState({
      aadhar: "",
      dob: "",
    });


  const handleOnChange = (e) =>{
    const {name,value} = e.target
    var pattern = /^[1-9]\d{11}$/.test(value);
   
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

    if (name === "dob") {
      const dobDate = new Date(value);
      const maxAllowedDate = new Date("2005-01-01");
  
      if (dobDate > maxAllowedDate) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Date of birth must be on or before 1-1-2005",
        }));
      }}

    if (name === "aadhar") {
      if (!pattern) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Enter Valid Aadhar number",
        }));
      } 
      else {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "", // Clear the validation error
        }));
      }
    }


  }

  

  // const handleOnSubmit = async(e) =>{
  //   e.preventDefault()
  //   const { fullName,phone, email, aadhar,dob,address,area,gender,document } = data
  //   if (fullName && phone && email && aadhar && dob && address && area && gender && document) {
     
  //       const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/newconnection`,{
  //         method : "POST",
  //         headers : {
  //           "content-type":"application/json"
  //         },
  //         body : JSON.stringify(data)
  //       })

  //       const dataRes = await fetchData.json()
  //       console.log(dataRes)

  //       //alert(dataRes.message)
  //       toast(dataRes.message)
  //       if(dataRes.alert){
  //       toast(`Connection ID: ${dataRes.connectionId}`);
  //       navigate("/userhome")
  //       }
      
      
  //       }
  // else{
  //   alert("Please fill all fields");
  //   console.log(data)
  // }
    
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(data.document);
  
    const formData = new FormData();
    formData.append('fullName', data.fullName);
    formData.append('phone', data.phone);
    formData.append('email', data.email);
    formData.append('aadhar', data.aadhar);
    formData.append('dob', data.dob);
    formData.append('address', data.address);
    formData.append('area', data.area);
    formData.append('gender', data.gender);
    formData.append('document', data.document);
  
    if (
      data.fullName &&
      data.phone &&
      data.email &&
      data.aadhar &&
      data.dob &&
      data.address &&
      data.area &&
      data.gender&&
      data.document
    ) {
     
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMIN}/newconnection`,
          {
            method: "POST",
            body: formData, // Use FormData object instead of JSON.stringify(data)
          }
        );
  
        const dataRes = await fetchData.json();
        console.log(dataRes);
  
        toast(dataRes.message);
        if (dataRes.alert) {
          toast(`Connection ID: ${dataRes.connectionId}`);
        navigate("/userhome")
          
        }
      
    } else {
      alert("Please fill all fields");
      console.log(data);
    }
  };
  

  return (
    <div className="flex">
      <UserHeader />
      <main className="pt-28 bg-blue-100 min-h-screen w-full">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-[1000px] p-6 bg-white rounded-md shadow-md">
            <h1 className="text-2xl mb-4 text-center">New Connection Form</h1>
            <form className="grid grid-cols-2 gap-4" encType="multipart/form-data" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                   value = {userData.fullName}
                  onChange = {handleOnChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-600">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={userData.phone}
                  onChange = {handleOnChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={userData.email}
                  name="email"
                  // onChange = {handleOnChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="dob" className="block text-sm font-semibold text-gray-600">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  onChange = {handleOnChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                {validationErrors.dob && (
        <p className="text-red-500">{validationErrors.dob}</p>
      )}
              </div>

              <div className="mb-4">
                <label htmlFor="gender" className="block text-sm font-semibold text-gray-600">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  onChange = {handleOnChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="" disabled selected>Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-semibold text-gray-600">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  onChange = {handleOnChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="aadhar" className="block text-sm font-semibold text-gray-600">
                  Aadhar Number
                </label>
                <input
                  type="text"
                  id="aadhar"
                  name="aadhar"
                  onChange = {handleOnChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                 
                 {validationErrors.aadhar && (
        <p className="text-red-500">{validationErrors.aadhar}</p>
      )}

              </div>
              
              


              <div className="mb-4">
                <label htmlFor="area" className="block text-sm font-semibold text-gray-600">
                  Area Name
                </label>
                <select
                  id="area"
                  name="area"
                  onChange = {handleOnChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="" disabled selected>Select your Area</option>
                  <option value="area1">Area 1</option>
                  <option value="area2">Area 2</option>
                  <option value="area3">Area 3</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="document" className="block text-sm font-semibold text-gray-600">
                  Upload Document(ID proof and Address proof)
                </label>
                <input
                  type="file"
                  id="document"
                  name="document"
                  onChange = {handleOnChange}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              {/* {documentURL && (
  <div className="mb-4">
    <a href={documentURL} target="_blank" rel="noopener noreferrer">
      View Uploaded Document
    </a>
  </div>
)} */}

              <div className="mb-4 col-span-2">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                  
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <style>
        {`
          .text-red-500 {
            color: #e53e3e;
            margin-top: 0.5rem;
            font-size: 0.875rem;
          }
          .bg-blue-500 {
            background-color: #4299e1;
          }
          .hover\:bg-blue-600:hover {
            background-color: #3182ce;
          }
          .focus\:outline-none:focus {
            outline: none;
          }
          .focus\:ring:focus {
            box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
          }
          .border {
            border-width: 1px;
            border-color: #e2e8f0;
          }
          .rounded-md {
            border-radius: 0.375rem;
          }
          .shadow-md {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                        0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          .grid {
            display: grid;
          }
          .grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .gap-4 {
            gap: 1rem;
          }
          .mb-4 {
            margin-bottom: 1rem;
          }
          .mt-1 {
            margin-top: 0.25rem;
          }
          .p-2 {
            padding: 0.5rem;
          }
          .w-full {
            width: 100%;
          }
          .text-center {
            text-align: center;
          }
          `}
      </style>
    </div>
  );
};

export default NewConnection;

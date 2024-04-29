import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserHeader from '../component/UserHeader';
import { Link, useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast"
import PaymentModal from '../component/PaymentModal'; 

const Booking = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedCylinder, setSelectedCylinder] = useState('');

  const cylinderCosts = {
    '14.2 kg': 600,
    '19 kg': 1000,
    '45.7 kg': 1500,
    // Add more cylinder types and their respective costs here
  };


  const handlePaymentModalClose = () => {
    setShowPaymentModal(false);
  };
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [bookingData, setBookingData] = useState({
    connectionId:'',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    area: '',
    type: '',
  });
  const handleSelectChange = (event) => {
    setBookingData({
      ...bookingData,
      type: event.target.value,
    });
  };

  

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios.get(`${process.env.REACT_APP_SERVER_DOMIN}/api/data`)
      .then(response => 
        {
          console.log(response.data)
          setData(response.data)

          if (response.data.length > 0) {
        setBookingData({
          connectionId: response.data[0].connectionId,
          fullName: response.data[0].fullName,
          email: response.data[0].email,
          phone: response.data[0].phone,
          address: response.data[0].address,
          area: response.data[0].area,
          type: '',
        });
      }
        }
        )
      .catch(error => console.error(error));
  }, []);

  const handleBookClick = async () => {
   
   
    try {
      
      const connectionDataResponse = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/api/data`);
      const connectionData = await connectionDataResponse.json();
      const conn = connectionData[0]

      
      console.log("Booking Data Connection ID:", bookingData.connectionId);
      console.log("Connection Data:", connectionData.connectionId);

      const selectedConnection = connectionData[0];
      console.log("Selected Connection:", selectedConnection);
      

      
      if (!connectionData || connectionData.length === 0) {
        throw new Error('No connection data available.');
      }
      
      if (!selectedConnection) {
        throw new Error('Selected connection not found');
      }

      const timestamp = new Date();
  
      const bookingDataWithConnection = {
        ...bookingData,
        connection: selectedConnection._id, 
        // timestamp,// Assuming your connection model has an _id field
      };
  
     
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/booking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDataWithConnection),
      });
  
      const dataRes = await fetchData.json();
  
      console.log('Booking successful:', dataRes);
      // toast(dataRes.message)
      if(dataRes.alert){
      // toast(`Order ID: ${dataRes.orderId}`);
      navigate("/booking")
     }
  
      
  
    } catch (error) {
      console.error('Error booking:', error);
      // Handle errors if needed
    }
  };
  console.log(bookingData.type)
  return (

    <div>
    <UserHeader />
    <main className="pt-28 bg-blue-100 min-h-screen w-full">
        <div className="container mx-auto p-4 border rounded-md border-black bg-white">
          <h1 className="text-2xl font-bold mb-4 text-center">Booking Details</h1>
          <table className="table-auto w-full mb-4">
          <tbody>
          <PaymentModal isOpen={showPaymentModal} onClose={handlePaymentModalClose} selectedCylinder={bookingData.type} cylinderCost={cylinderCosts[bookingData.type]} />
        
            {data.map((item, index) => (
              <React.Fragment key={index}>
                {item.status=='pending' ? (<tr className="border-b border-black">
                  <td className="border p-3 font-black">Connection Id</td>
                  <td className="border p-3">{item.connectionId}</td>
                </tr>):(<><tr className="border-b border-black">
                    <td className="border p-3 font-black">Connection Id</td>
                    <td className="border p-3">{item.connectionId}</td>
                  </tr><tr className="border-b border-black">
                      <td className="border p-3 font-black">Name</td>
                      <td className="border p-3">{item.fullName}</td>
                    </tr><tr className="border-b border-black">
                      <td className="border p-3 font-black">Email</td>
                      <td className="border p-3">{item.email}</td>
                    </tr><tr className="border-b border-black">
                      <td className="border p-3 font-black">Phone</td>
                      <td className="border p-3">{item.phone}</td>
                    </tr><tr className="border-b border-black">
                      <td className="border p-3 font-black">Address</td>
                      <td className="border p-3">{item.address}</td>
                    </tr><tr className="border-b border-black">
                      <td className="border p-3 font-black">Area</td>
                      <td className="border p-3">{item.area}</td>
                    </tr>
                    <tr className="border-b border-black">
              <td className="border p-3 font-black">Type of Cylinder</td>
              <td className="border p-3">
                <select  id="type" name="type"className="mt-1 p-2 border-b rounded-md focus:outline-none focus:ring focus:border-blue-300" htmlFor="type" onChange={handleSelectChange}>
                <option value="" disabled selected>Select Cylinder in kg</option>
                  <option value="14.2 kg">14.2 kg</option>
                  <option value="19 kg">19 kg</option>
                  <option value="45.7 kg">45.7 kg</option>
                  {/* Add more options as needed */}
                </select>
              </td>
            </tr></>)}

              </React.Fragment>
            ))}
            
          </tbody>
        </table>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            {item.status=='pending' ? (<>Your Connection Status is pending wait for Admin's Approval</>):(
              <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={()=> {
                setShowPaymentModal(true);
                handleBookClick(item.type)}}
            >
              Book
            </button>
            )}
          </React.Fragment>
          
        ))}
        
      </div>
    </main>
    <style>
        {`
          .table-auto {
            width: 100%;
            border-collapse: collapse;
          }
          .table-auto td,
          .table-auto th {
            border: 1px solid #000;
            padding: 0.75rem;
            text-align: left;
          }
          .text-red-500 {
            color: #e53e3e;
            margin-bottom: 1rem;
          }
          /* Add more styles as needed */
        `}
      </style>
  </div>
  )
            }  

 

export default Booking
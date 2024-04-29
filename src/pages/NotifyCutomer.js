import { useSelector } from "react-redux/es/hooks/useSelector";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import DbHeader from "../component/DbHeader";

const NotifyCustomer  = () => {
  const data = useSelector((state) => state.dbSliceReducer);
  const [data1, setData] = useState([]);
  const [emailId, setemailId] = useState("");
  const [orderId, setorderId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [data1]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_DOMIN}/api/db`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNotifyClick = async (email, orderId) => {
    try {
      toast("Email Sent Successfully");
      const response = await axios.post(`${process.env.REACT_APP_SERVER_DOMIN}/NotifyCustomer`, {
        emailId: email,
        orderId: orderId,
      });
      // Additional logic if needed after sending the email

    } catch (error) {
      console.error("Error sending email:", error.message);
    }
  };

  return (
    <div>
      <DbHeader />
      <main className="pt-28 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Pending Orders</h1>
        <table className="w-full max-w-2xl xl:max-w-4xl mx-auto">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Contact</th>
              <th className="px-4 py-2">Cylinder Type (kg)</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data1.map((item) => (
              <tr key={item._id}>
                <td className="border px-4 py-2">{item.orderId}</td>
                <td className="border px-4 py-2">{item.connection.fullName}</td>
                <td className="border px-4 py-2">{item.connection.email}</td>
                <td className="border px-4 py-2">{item.type}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleNotifyClick(item.connection.email, item.orderId)}
                    className="bg-blue-900 text-white p-2 rounded cursor-pointer font-bold"
                  >
                    Notify
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <br/>
        <br/>
        {/* <div className="flex justify-center items-center h-64 space-x-4">
          <form
            className="border border-gray-300 p-6 max-w-screen-md w-full"
            id="form"
          >
            <label htmlFor="id" className="block mb-4 bg-blue-900 text-white px-4 py-2 rounded-tl rounded-tr font-semibold">
              Notify Customer
            </label>

            <input
              type="text"
              id="id1"
              name="emailId"
              placeholder="Enter Email Id"
              value={emailId}
              onChange={(e) => setemailId(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded box-border"
            />

            <input
              type="text"
              id="id2"
              name="orderId"
              placeholder="Enter order Id"
              value={orderId}
              onChange={(e) => setorderId(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded box-border"
            />  

            <input
              type="submit"
              onClick={handleSubmit}
              value="Complete"
              className="bg-blue-900 text-white p-3 rounded cursor-pointer font-bold"
            />
          </form>
        </div> */}
      </main>
    </div>
  );
};

export default NotifyCustomer;
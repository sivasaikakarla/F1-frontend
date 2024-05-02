import { useSelector } from "react-redux/es/hooks/useSelector";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import DbHeader from "../component/DbHeader";

// ... (your imports)

const Dbhome = () => {
  const data = useSelector((state) => state.dbSliceReducer);
  const [data1, setData] = useState([]);
  const [orderId, setOrderId] = useState("");
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

  const handleComplete = async (orderId) => {
    try {
      // Make an API request to update the order status
      toast("Order Completed Successfully");

      const response = await axios.put(`${process.env.REACT_APP_SERVER_DOMIN}/update-status`, {
        orderId,
      });

      // Remove the completed order from the table
      setData((prevData) => prevData.filter((item) => item.orderId !== orderId));
    } catch (error) {
      console.error("Error updating order status:", error.message);
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
              <th className="px-4 py-2">Cylinder Type (kg)</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data1.map((item) => (
              <tr key={item._id}>
                <td className="border px-4 py-2">{item.orderId}</td>
                <td className="border px-4 py-2">{item.connection.fullName}</td>
                <td className="border px-4 py-2">{item.type}</td>
                <td className="border px-4 py-2">{item.status}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleComplete(item.orderId)}
                    className="bg-green-500 text-white p-2 rounded cursor-pointer font-bold"
                  >
                    Complete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Dbhome;


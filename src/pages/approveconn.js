// import { useSelector } from "react-redux/es/hooks/useSelector";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import DbHeader from "../component/DbHeader";
import Table from '../component/Table/Table3'
import Cards from '../component/Cards/Cards'
import Sidebar from "../component/Sidebar/Sidebar";
import './approveconn.css'

const Approveconn = () => {
//   const data = useSelector((state) => state.dbSliceReducer);
  const [data1, setData] = useState([]);
  const [connId, setconnId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [data1]);



  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_DOMIN}/approveconn`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make an API request to update the order status
      toast("Connection Approved");
      
      const response = await axios.post(`${process.env.REACT_APP_SERVER_DOMIN}/approveconn`, {
        connId,
      });
     
    } catch (error) {
      console.error("Error updating order status:", error.message);
    }
  };



  return (
    <div  className="approveconn">
        <Sidebar></Sidebar>
        <div>
            <Cards/>
            <Table/>
            <main className="pt-28 flex flex-col items-center">
            <div className="flex justify-center items-center h-64">
            <form
            
                className="border border-gray-300 p-6 max-w-screen-md w-full"
                id="form"
            >
                <label htmlFor="id" className="block mb-4">
                Connection Id
                </label>
                <input
                type="text"
                id="id"
                name="connId"
                placeholder="Enter Connection Id"
                value={connId}
                onChange={(e) => setconnId(e.target.value)}
                className="w-full p-3 mb-4 border border-gray-300 rounded box-border"
                />
                <input
                type = "submit"
                onClick={handleSubmit}
            
                value="complete"
                className="bg-blue-900 text-white p-3 rounded cursor-pointer font-bold"
                />
            </form>
            </div>
        </main>
        </div>
        <div></div>
    </div>
  );
};

export default Approveconn;
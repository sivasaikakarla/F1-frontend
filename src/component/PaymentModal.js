import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast"

const PaymentModal = ({ isOpen, onClose , selectedCylinder, cylinderCost}) => {
    const navigate = useNavigate();


  const handlePayment = async () => {
    toast.success('Order Placed Successfully')
      navigate('/userhome')
      
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="bg-white p-6 rounded-md w-96">
        {/* Payment form content */}
        <h2 className="text-2xl font-bold mb-4 text-center">Payment Details</h2>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="cardNumber" className="font-bold mb-1">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="border p-2 rounded-md"
              placeholder="Enter card number"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="expiryDate" className="font-bold mb-1">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              className="border p-2 rounded-md"
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cvv" className="font-bold mb-1">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              className="border p-2 rounded-md"
              placeholder="CVV"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold mb-1">Total Cost:</label>
            <p>{`Rs${cylinderCost}`}</p>
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="button"
              className="bg-blue-900 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
              onClick={handlePayment}
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default PaymentModal;

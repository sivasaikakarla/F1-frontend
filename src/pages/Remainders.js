import React,{useState} from 'react';
import axios from 'axios';
import Cards from '../component/Cards/Cards'
import Sidebar from '../component/Sidebar/Sidebar'
import styles from './remainder.module.css'

const FormComponent = () => {
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For demonstration purposes, it's left blank
    try {
      // Make an API request to update the order status
      
      const response = await axios.post(`${process.env.REACT_APP_SERVER_DOMIN}/remainders`,{
      subject,message
      })
    } catch (error) {
      console.error("Error updating order status:", error.message);
    }
  };

  

  return (
    <div className={styles.remainder}>
    <Sidebar/>
    <div>
      <Cards/>
      <form style={{ width: '40%', margin: '0 auto' }} >
        <div className="form-group">
          <label htmlFor="subject" style={{ display: 'inline-block', width: '100px', fontWeight: 'bold', marginRight: '10px' }}>
            Subject:
          </label>
          <input type="text" name="subject" onChange={(e) => setsubject(e.target.value)} style={{ display: 'block', width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box', marginTop: '5px' }} />
        </div>
        <div className="form-group">
          <label htmlFor="message" style={{ display: 'inline-block', width: '100px', fontWeight: 'bold', marginRight: '10px' }}>
            Message:
          </label>
          <textarea name="message" onChange={(e) => setmessage(e.target.value)} style={{ display: 'block', width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box', marginTop: '5px' }}></textarea>
        </div><br></br>
        <div className="form-group">
          <button type="submit" onClick ={handleSubmit} style={{ backgroundColor: '#427eed', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default FormComponent;

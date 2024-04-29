import React , {useEffect,useState} from 'react'
import DbHeader from '../component/DbHeader'
import axios from 'axios';

const DbBookingHistory = () => {

    const [data, setData] = useState([]);

  useEffect(() => {
    
    axios.get(`${process.env.REACT_APP_SERVER_DOMIN}/api/dbhistory`)
      .then(response => setData(response.data))
      .catch(error => console.error(error));
      console.log(data);
  }, []);

 
  return (
    <div>
  <DbHeader />
  <main className="pt-28 flex justify-center">
    <table className="w-full max-w-xxl">
      <thead>
        <tr className="bg-blue-900 text-white">
          <th className="px-4 py-2">Order ID</th>
          <th className="px-4 py-2">Order Time</th>
          <th className="px-4 py-2">Cylinder Type (kg)</th>
          <th className="px-4 py-2">Status</th>
          {/* Add more headers for additional fields */}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            <td className="border px-4 py-2">{item.orderId}</td>
            <td className="border px-4 py-2">
              {new Date(item.timestamp).toString()}
            </td>
            <td className="border px-4 py-2">{item.type}</td>
            <td className="border px-4 py-2">{item.status}</td>

            {/* Add more cells for additional fields */}
          </tr>
        ))}
      </tbody>
    </table>
  </main>
</div>

  )
          }  

export default DbBookingHistory
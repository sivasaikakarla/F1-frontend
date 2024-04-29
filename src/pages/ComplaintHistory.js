import React , {useState , useEffect} from 'react'
import axios from 'axios';
import UserHeader from '../component/UserHeader';

const ComplaintHistory = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      // Fetch data from the backend when the component mounts
      axios.get(`${process.env.REACT_APP_SERVER_DOMIN}/api/comphistory`)
        .then(response => setData(response.data))
        .catch(error => console.error(error));
    }, []);
  return(
    <div>
    <UserHeader />
    <main className="pt-28 flex justify-center">
      <table className="w-full max-w-xxl">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="px-4 py-2">Complaint ID</th>
            <th className="px-4 py-2">Complaint Time</th>
            <th className="px-4 py-2">Complaint Description</th>
            <th className="px-4 py-2">Status</th>
            {/* Add more headers for additional fields */}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item._id}>
              <td className="border px-4 py-2">{item.complaintId}</td>
              <td className="border px-4 py-2">
                {new Date(item.timestamp).toString()}
              </td>
              <td className="border px-4 py-2">{item.type}</td>
              <td className="border px-4 py-2">pending</td>
  
              {/* Add more cells for additional fields */}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  </div>
  
    )
            }  

export default ComplaintHistory
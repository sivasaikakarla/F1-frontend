import React from 'react'
import UserHeader from '../component/UserHeader'
import { useSelector } from 'react-redux';
import { useState , useEffect } from 'react';
import axios from 'axios';

const MyAccount = () => {
  const userData  = useSelector((state) => state.userSliceReducer)
  const [data, setData] = useState([]);

  useEffect(() => {
    
    axios.get(`${process.env.REACT_APP_SERVER_DOMIN}/api/data`)
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

    return (
        <div>
    <UserHeader />
    <main className="pt-28 bg-blue-900 min-h-screen w-full">
        <div className="container">
          <div className="main-body mt-20 ml-20">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/3 px-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOj4E2GdAN_d3ArtA4N84cmta91XiOvLMaFEaOXRJ8bA&s"
                        alt="Admin"
                        className="rounded-full"
                        width="150"
                      />
                      <div className="mt-3">
                        <h4>{userData.fullName}</h4>
                        <p className="text-muted font-size-sm">Kurnool, Andhra Pradesh</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="flex">
                      <div className="w-1/4">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="w-3/4 text-secondary">{userData.email}</div>
                    </div>
                    <hr className="my-3" />
                    <div className="flex">
                      <div className="w-1/4">
                        <h6 className="mb-0">Mobile No</h6>
                      </div>
                      <div className="w-3/4 text-secondary">{userData.phone}</div>
                    </div>
                    <hr className="my-3" />
                    <div>
                    {data.map(item => (
                      <><tr key={item._id}></tr><div className="flex">

                        <div className="w-1/4">
                          <h6 className="mb-0">Connection Status</h6>
                        </div>
                        <div className="w-3/4 text-secondary">{item.status}</div>
                      </div><hr className="my-3" /><div className="flex">
                          <div className="w-1/4">
                            <h6 className="mb-0">Address</h6>
                          </div>
                          <div className="w-3/4 text-secondary">
                            {item.address}
                          </div>
                        </div></>
                    ))}
                    </div>
                    <hr className="my-3" />
                    <div className="flex">
                      <div className="w-1/4">
                        <h6 className="mb-0">Pincode</h6>
                      </div>
                      <div className="w-3/4 text-secondary">518004</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </main>
      </div>
  )
}

export default MyAccount
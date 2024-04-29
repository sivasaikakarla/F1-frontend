import React, { useEffect, useState } from 'react';
import axios from 'axios';
import userimg from "../assests/user.jpg"
import Sidebar from '../component/Sidebar/Sidebar'
import Cards from '../component/Cards/Cards'
import './approvedb.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const EmployeeDetails = () => {
    const [data1, setData] = useState([]);
    const itemsPerPage = 5;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const [editedUser, setEditedUser] = useState(null);
    const [updatedDetails, setUpdatedDetails] = useState({}); // State to store updated user details
    
    useEffect(() => {
        fetchData();
    }, [data1]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_DOMIN}/api/getdbdetails`);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const handleClickNext = () => {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, data1.length - 1));
    };
    
  
    const handleClickPrev = () => {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
    };
  

    const paginationButtonStyle = {
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      padding: '10px 15px',
      cursor: 'pointer',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
    };
  

    const handleEditUser = (user) => {
        setEditedUser(user);
        setUpdatedDetails(user); // Initialize updated details with current user details
        setShowModal(true);
    };

    const handleDeleteUser = (user) => {
        setUserToDelete(user);
        setShowDeleteModal(true);
    };

    const confirmDelete = async () => {
        try {
            await axios.delete(`${process.env.REACT_APP_SERVER_DOMIN}/api/deletedb/${userToDelete._id}`);
            setShowDeleteModal(false);
            fetchData();
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpdateUser = async () => {
        try {
            // Extract all the fields from updatedDetails
            const { fullName, phone, area } = updatedDetails;
            const updatedUserData = { userId: editedUser._id, fullName, phone, area };
    
            await axios.post(`${process.env.REACT_APP_SERVER_DOMIN}/api/updatedb`, updatedUserData);
    
            setShowModal(false);
            fetchData();
        } catch (error) {
            console.error(error);
        }
    };

    return (
      <div className="approveddb">

            
                <Sidebar />
        
            <div >
                <Cards />
                <div style={{ marginBottom: '20px' }}>
                    <form>
                        <InputGroup>
                            <Form.Control
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search ...."
                            />
                        </InputGroup>
                    </form>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {data1.filter((user) => {
                        return search.toLowerCase() === ""
                            ? user
                            :( user.fullName.toLowerCase().startsWith(search) ) ;
                    }).slice(currentIndex, currentIndex + itemsPerPage).map((user) => (
                        <div key={user.email} style={{ display: 'flex', marginBottom: '20px' }}>
                            <div style={{ flex: '0 0 200px' }}>
                                <img
                                    src={userimg}
                                    className="img-thumbnail item-image"
                                    style={{ width: '200px' }}
                                    alt="Cannot display"
                                />
                            </div>
                            <div style={{ flex: 1, paddingLeft: '40px' }}>
                                <div>
                                    <h3>{user.fullName}</h3>
                                </div>
                                
                                <div>
                                    <b>Email: </b>
                                    {user.email}
                                </div>
                                <div>
                                    <b>Phone Number: </b>
                                    {user.phone}
                                </div>
                                <div>
                                    <b>DeliveryArea: </b>
                                    {user.area}
                                </div>
                    

                                <div style={{ width: '300px', marginTop: '20px'}}  >
                                    <button
                                        className="about-view packages-btn btn btn-primary"
                                        onClick={() => handleEditUser(user)}
                                        style={{ marginRight: '15px' }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="about-view packages-btn btn btn-primary"
                                        onClick={() => handleDeleteUser(user)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px',marginBottom:'30px' }}>
            <button
              onClick={handleClickPrev}
              disabled={currentIndex === 0}
              style={paginationButtonStyle}
            >
              <FaArrowLeft /> Prev
            </button>
            <button
              onClick={handleClickNext}
              disabled={currentIndex + itemsPerPage >= data1.length}
              style={paginationButtonStyle}
            >
              Next <FaArrowRight />
            </button>
          </div>

            </div>
            {/* Modal for editing user details */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Form for editing user details */}
                    <Form>
                        <Form.Group controlId="formFullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={updatedDetails.fullName || ""}
                                onChange={(e) => setUpdatedDetails({ ...updatedDetails, fullName: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPhoneNumber"> {/* Change controlId */}
                            <Form.Label>Phone Number</Form.Label> {/* Change label */}
                            <Form.Control
                                type="text" 
                                value={updatedDetails.phone || ""} 
                                onChange={(e) => setUpdatedDetails({ ...updatedDetails, phone: e.target.value })} 
                            />
                        </Form.Group>
                        <Form.Group controlId="formArea">
                            <Form.Label>Area</Form.Label>
                            <Form.Control
                                type="text"
                                value={updatedDetails.area || ""}
                                onChange={(e) => setUpdatedDetails({ ...updatedDetails, area: e.target.value })}
                            />
                        </Form.Group>
                       

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdateUser}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* Modal for deleting user */}
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to delete this user?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={confirmDelete}>
                        Confirm Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default EmployeeDetails;
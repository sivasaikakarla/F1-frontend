import React, {useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from "react-hot-toast"
const UserHeader = () => {
    const [showMenu, setShowMenu] = useState(false);
    const userData  = useSelector((state) => state.userSliceReducer)
    console.log(userData)
   

    const [registerDropdown, setRegisterDropdown] = useState(false);
    const handleRegisterClick = () => {
        setRegisterDropdown(!registerDropdown);
       
      };
      const handleArrowClick = () => {
        setRegisterDropdown(!registerDropdown);
       
      };

      const closeDropdowns = () => {
        setRegisterDropdown(false);
      };
    
      useEffect(() => {
        const handleClickOutside = (event) => {
          
          if (
            registerDropdown &&
            !event.target.closest('.register-dropdown') &&
            !event.target.closest('.register-link')
          ) {
            closeDropdowns();
          }
        };
    
        window.addEventListener('click', handleClickOutside);
    
        return () => {
          window.removeEventListener('click', handleClickOutside);
        };
      }, [registerDropdown]);

      const handleLogout = () =>{
        toast("Log Out Successfull")
      }

  return (
    <header className="fixed shadow-md w-full h-24 px-6 md:px-12 z-50 bg-blue-900">
    {/* desktop */}
    <div className="flex items-center h-full justify-between">
      <div className="flex items-center gap-10 md:gap-16">
        <Link to={"/userhome"} className="flex items-center h-20">
          <img
            src="https://clipground.com/images/hp-gas-logo-clipart.jpg"
            className="h-full"
            alt="Logo"
          />
        </Link>
        <nav className="gap-10 md:gap-16">
          <Link
            to={"/userhome"}
            className="text-white text-xl md:text-2xl px-10 transition duration-200 ease-out text-decoration-none hover:bg-2e5d8d hover:text-white hover:scale-110 hover:border hover:border-2e5d8d hover:rounded-md ml-0"
          >
            Home
          </Link>
          <Link
            to={"/booking"}
            className="text-white text-xl md:text-2xl px-10 transition duration-200 ease-out text-decoration-none hover:bg-2e5d8d hover:text-white hover:scale-110 hover:border hover:border-2e5d8d hover:rounded-md"
          >
            Book a cylinder
          </Link>
          <Link
            to={"/complaint"}
            className="text-white text-xl md:text-2xl px-10 transition duration-200 ease-out text-decoration-none hover:bg-2e5d8d hover:text-white hover:scale-110 hover:border hover:border-2e5d8d hover:rounded-md"
          >
            Complaint
          </Link>
          <Link
            to={"/newconnection"}
            className="text-white text-xl md:text-2xl px-10 transition duration-200 ease-out text-decoration-none hover:bg-2e5d8d hover:text-white hover:scale-110 hover:border hover:border-2e5d8d hover:rounded-md"
          >
            New Connection
          </Link>
        </nav>
      </div>
      { <div className="flex items-center gap-8 md:gap-12 relative">
       

        <div
          className="text-white text-xl right-0  md:text-2xl px-10 cursor-pointer relative register-link"
          onClick={handleRegisterClick}
        >
        
            {
              userData  ? <span>{userData.fullName}</span> : <span>Account</span>
            }
          
          {registerDropdown && (
            <div className="absolute top-full right-0 left-0 bg-white p-2 rounded-md shadow-md text-base mt-2 mr-0.5 ml-5 register-dropdown">
              <Link
                to="/myaccount"
                className="block px-4 py-2 text-gray-800 no-underline  hover:bg-red-500 transition duration-300"
                onClick={closeDropdowns}
              >
                My Account
              </Link>
              <Link
                to="/bookinghistory"
                className="block px-4 py-2 text-gray-800 no-underline hover:bg-red-500 transition duration-300 "
                onClick={closeDropdowns}
              >
                Booking History
              </Link>

              <Link
                to="/complainthistory"
                className="block px-4 py-2 text-gray-800 no-underline  hover:bg-red-500 transition duration-300"
                onClick={closeDropdowns}
              >
                Complaint History
              </Link>

              <Link
                to="/"
                className="block px-4 py-2 text-gray-800 no-underline  hover:bg-red-500 transition duration-300"
                onClick={closeDropdowns}
              >
                <p onClick = {handleLogout}>Log out</p>
              </Link>
             
            </div>
          )}
        </div>
        
        <div className="absolute top-0 right-0 mt-2 mr-2 text-white cursor-pointer" onClick={handleRegisterClick}>
        &#9660; {/* Unicode down arrow character */}
      </div>
      </div> }
    </div>
  </header>
);
};

 

export default UserHeader
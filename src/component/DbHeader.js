import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

const DbHeader = () => {
  const data = useSelector((state) => state.dbSliceReducer);

  const [registerDropdown, setRegisterDropdown] = useState(false);

  const handleRegisterClick = () => {
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

  const handleLogout = () => {
    toast('Log Out Successful');
  };

  return (
    <header className="fixed shadow-md w-full h-24 px-6 md:px-12 z-50 bg-blue-900">
      <div className="flex items-center h-full justify-between">
        <div className="flex items-center gap-10 md:gap-16">
          <Link to={'/userhome'} className="flex items-center h-20">
            <img
              src="https://clipground.com/images/hp-gas-logo-clipart.jpg"
              className="h-full"
              alt="Logo"
            />
          </Link>
          <nav className="gap-10 md:gap-16 ">
            <Link
              to={'/dbhome'}
              className="text-white text-xl md:text-2xl px-10 transition duration-200 ease-out text-decoration-none hover:bg-2e5d8d hover:text-white hover:scale-110 hover:border hover:border-2e5d8d hover:rounded-md ml-0"
            >
              Home
            </Link>
          </nav>
        </div>
        {
          <div className="flex items-center gap-8 md:gap-12 relative">
            <div
              className="text-white text-xl right-0 md:text-2xl px-10 cursor-pointer relative register-link"
              onClick={handleRegisterClick}
            >
              {data ? <span>{data.fullName}</span> : <span>Account</span>}
              {registerDropdown && (
                <div className="absolute top-full right-0 bg-white rounded-md shadow-md text-base mt-2 mr-0.5 ml-5 register-dropdown" style={{ minWidth: '150px' }}>
                  <Link
                    to="/dbStats"
                    className="block px-4 py-2 text-gray-800 no-underline hover:bg-blue-200 transition duration-300 border-b border-gray-300"
                    onClick={closeDropdowns}
                  >
                    My Account
                  </Link>
                  <Link
                    to="/NotifyCustomer"
                    className="block px-4 py-2 text-gray-800 no-underline hover:bg-blue-200 transition duration-300 border-b border-gray-300"
                    onClick={closeDropdowns}
                  >
                    Notify
                  </Link>
                  
                  <Link
                    to="/"
                    className="block px-4 py-2 text-gray-800 no-underline hover:bg-blue-200 transition duration-300 border-b border-gray-300"
                    onClick={closeDropdowns}
                  >
                    Log out
                  </Link>
                </div>
              )}
            </div>
            <div className="absolute top-0 right-0 mt-2 mr-2 text-white cursor-pointer" onClick={handleRegisterClick}>
              &#9660; {/* Unicode down arrow character */}
            </div>
          </div>
        }
      </div>
    </header>
  );
};

export default DbHeader;
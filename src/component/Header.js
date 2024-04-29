import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [loginDropdown, setLoginDropdown] = useState(false);
  const [registerDropdown, setRegisterDropdown] = useState(false);

  

  const handleLoginClick = () => {
    setLoginDropdown(!loginDropdown);
    setRegisterDropdown(false);
  };

  const handleRegisterClick = () => {
    setRegisterDropdown(!registerDropdown);
    setLoginDropdown(false);
  };

  const closeDropdowns = () => {
    setLoginDropdown(false);
    setRegisterDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        loginDropdown &&
        !event.target.closest('.login-dropdown') &&
        !event.target.closest('.login-link')
      ) {
        closeDropdowns();
      }

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
  }, [loginDropdown, registerDropdown]);

  return (
    <header className="fixed shadow-md w-full h-24 px-6 md:px-12 z-50 bg-blue-800">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        <div className="flex items-center gap-10 md:gap-16">
          <Link to={""} className="flex items-center h-20">
            <img
              src="https://clipground.com/images/hp-gas-logo-clipart.jpg"
              className="h-full"
              alt="Logo"
            />
          </Link>
          <nav className="gap-10 md:gap-16">
            <Link
              to={"/"}
              className="text-white text-xl md:text-2xl px-10 transition duration-200 ease-out text-decoration-none hover:bg-2e5d8d hover:text-white hover:scale-110 hover:border hover:border-2e5d8d hover:rounded-md"
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="text-white text-xl md:text-2xl px-10 transition duration-200 ease-out text-decoration-none hover:bg-2e5d8d hover:text-white hover:scale-110 hover:border hover:border-2e5d8d hover:rounded-md"
            >
              About
            </Link>
            
          </nav>
        </div>
        <div className="flex items-center gap-8 md:gap-12 relative">
          <div
            className="text-white text-xl md:text-2xl px-10 cursor-pointer relative login-link"
            onClick={handleLoginClick}
          >
            Login
            {loginDropdown && (
              <div className="absolute top-full left-0 bg-white p-2 rounded-md shadow-md text-base mt-2 ml-5 login-dropdown">
                <Link
                  to="/signin"
                  className="block px-4 py-2 text-gray-800 no-underline hover:bg-gray-200"
                  onClick={closeDropdowns}
                >
                  User
                </Link>
                <Link
                  to="/dblogin"
                  className="block px-4 py-2 text-gray-800 no-underline hover:bg-gray-200"
                  onClick={closeDropdowns}
                >
                  Delivery Boy
                </Link>
                <Link
                  to="/adminlogin"
                  className="block px-4 py-2 text-gray-800 no-underline hover:bg-gray-200"
                  onClick={closeDropdowns}
                >
                  Admin
                </Link>
              </div>
            )}
          </div>

          <div
            className="text-white text-xl md:text-2xl px-10 cursor-pointer relative register-link"
            onClick={handleRegisterClick}
          >
            Register
            {registerDropdown && (
              <div className="absolute top-full left-0 bg-white p-2 rounded-md shadow-md text-base mt-2 ml-5 register-dropdown">
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-gray-800 no-underline hover:bg-gray-200"
                  onClick={closeDropdowns}
                >
                  User
                </Link>
                <Link
                  to="/dbregister"
                  className="block px-4 py-2 text-gray-800 no-underline hover:bg-gray-200"
                  onClick={closeDropdowns}
                >
                  Delivery Boy
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
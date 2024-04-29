import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { store } from './redux/index';
import { Provider } from 'react-redux';
import Home from './pages/Home'
import About from './pages/About';
import Blog from './pages/Blog';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dblogin from './pages/Dblogin';
import Dbregister from './pages/Dbregister';
import AdminLogin from './pages/AdminLogin';
import Userhome from './pages/Userhome';
import NewConnection from './pages/NewConnection';
import Complaint from './pages/Complaint';
import Booking from './pages/Booking';
import BookingHistory from './pages/BookingHistory';
import ComplaintHistory from './pages/ComplaintHistory';
import MyAccount from './pages/MyAccount';
import Dbhome from './pages/Dbhome';
import Dbstats from './pages/Dbstats';
import ViewDoc from './component/Viewdoc';
import Admin from './pages/Admin'
import Approvedb from './pages/approvedb'
import Approveconn from './pages/approveconn';
import Approvecom from './pages/Approvecom';
import Remainders from './pages/Remainders';
import BarGraph from './pages/BarGraph';
import UserDetails from './pages/Userdetails';
import EmployeeDetails from './pages/Employeedetails';
import NotifyCustomer from './pages/NotifyCutomer';
import DbBookingHistory from './pages/DbBookingHistory';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route index element = {<Home/>}/>
    <Route path='about' element = {<About/>}/>
    <Route path='blog' element = {<Blog/>}/>
    <Route path='signin' element = {<Signin/>}/>
    <Route path='signup' element = {<Signup/>}/>
    <Route path ='dblogin' element = {<Dblogin/>}/>
    <Route path ='dbregister' element = {<Dbregister/>}/>
    <Route path ='adminlogin' element = {<AdminLogin/>}/>
    <Route path = 'userhome' element = {<Userhome/>}/>
    <Route path = 'booking' element = {<Booking/>}/>
    <Route path = 'newconnection' element = {<NewConnection/>}/>
    <Route path = 'complaint' element = {<Complaint/>}/>
    <Route path = 'bookinghistory' element = {<BookingHistory/>}/>
    <Route path = 'complainthistory' element = {<ComplaintHistory/>}/>
    <Route path = 'myaccount' element = {<MyAccount/>}/>
    <Route path = 'dbhome' element = {<Dbhome/>}/>
    <Route path = 'dbstats' element = {<Dbstats/>}/>
    <Route path = 'viewdoc' element = {<ViewDoc/>}/> 
    <Route path = 'admin' element = {<Admin/>}/>
    <Route path = 'approvedb' element = {<Approvedb/>}/>
    <Route path = 'approveconn' element = {<Approveconn/>}/>
    <Route path = 'approvecom' element = {<Approvecom/>}/>
    <Route path = 'remainders' element = {<Remainders/>}/>
    <Route path = 'bargraph' element = {<BarGraph/>}/>
    <Route path = 'userdetails' element= {<UserDetails/>}/>
    <Route path = 'employeedetails' element = {<EmployeeDetails/>}/>
    <Route path = 'NotifyCustomer' element = {<NotifyCustomer />}/>
    <Route path = 'DbBookingHistory' element = {<DbBookingHistory />}/>
        </Route>


  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
  <RouterProvider router={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

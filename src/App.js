import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <Toaster />
      <div >
       
          <Outlet />
        
      </div>
     
      </>
  );
}

export default App;

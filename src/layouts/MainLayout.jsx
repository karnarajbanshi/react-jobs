import {Outlet} from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = () => {
  return (
    <div>
        <Navbar/>
         <Outlet/> {/* The Outlet component renders the matching child route component */}
        <ToastContainer/>
    </div>
  )
}

export default MainLayout
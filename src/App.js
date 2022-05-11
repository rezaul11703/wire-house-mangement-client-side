import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Sharing/Header/Header';
import Footer from './Components/Sharing/Footer/Footer';
import Home from './Components/Home/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import AddItems from './Components/AddItems/AddItems';
import MangeInventory from './Components/ManageInventory/MangeInventory';
import AddItemsinDisplay from './Components/Home/InventorySection/AddItemsinDisplay';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import FourOFour from './Components/404/FourOFour';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Blogs from './Components/Blogs/Blogs';
import SmartMonitor from './Components/Home/Category/SmartMonitor/SmartMonitor';
import Computer from './Components/Home/Category/Computer';
import Acces from './Components/Home/Category/Acces';
import Mobile from './Components/Home/Category/Mobile';
import SmartWatch from './Components/Home/Category/SmartWatch';
import LapTop from './Components/Home/Category/LapTop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>
        <Route path='/manageinventory' element={
          <MangeInventory></MangeInventory>
        }></Route>
        <Route path='/additems' element={<AddItems></AddItems>}></Route>
        <Route path='/displayProduct' element={<AddItemsinDisplay></AddItemsinDisplay>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/smartmonitor' element={<SmartMonitor></SmartMonitor>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

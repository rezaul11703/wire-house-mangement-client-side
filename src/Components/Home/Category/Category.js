import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div>
       <h2 className='text-center text-6xl m-6 text-blue-600'> Categories</h2>
      <div className=' container sm:grid grid-cols-6 gap-4'>
      <div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <Link to={'/laptop'} >
      <img className="rounded-t-lg" src="https://i.ibb.co/QD5Bw08/vivobook-15-x515ea-01-228x228.jpg
" alt=""/>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Laptop</h5>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See Details</button>
    </div>
    </Link>
  </div>
</div>
<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <Link to={'/acr'}>
      <img className="rounded-t-lg" src="https://i.ibb.co/MP9sC0r/rs200-01-500x500.jpg
" alt=""/>
    
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Accessories</h5>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See Details</button>
    </div>
    </Link>
  </div>
</div>
<div className="flex justify-center">
<div className="rounded-lg shadow-lg bg-white max-w-sm">
  <Link to={'/desktop'}>
    <img className="rounded-t-lg" src="https://i.ibb.co/MnPYPh4/vivo-aio-v161gart-01-500x500.jpg" alt=""/>
  
  <div className="p-6">
    <h5 className="text-gray-900 text-xl font-medium mb-2">Computer</h5>
    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See Details</button>
  </div>
  </Link>
</div>
</div>
<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <Link to={'/smartwatch'}>
      <img className="rounded-t-lg" src="https://i.ibb.co/sFTkcz0/sw04-01-228x228.jpg
" alt=""/>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Smart Watch</h5>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See Details</button>
    </div>
    </Link>
  </div>
</div>
<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <Link to={'/smartmobi'}>
      <img className="rounded-t-lg" src="https://i.ibb.co/5hrSPDZ/samsung-s22-preview-016.webp" alt=""/>
    
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Smart Phone</h5>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
    </Link>
  </div>
</div>
<div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <Link to={'/smartmonitor'}>
      <img className="rounded-t-lg" src="https://i.ibb.co/KzFNxs2/xiaomi-xmmnt27hq-monitor-2-500x500.jpg
" alt=""/>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Smart Monitor</h5>
      <button  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See Details</button>
    </div>
    </Link>
  </div>
</div>

    </div>
    </div>
  );
};

export default Category;
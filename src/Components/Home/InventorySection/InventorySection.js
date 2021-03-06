import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventorySection = () => {
  const [displayProducts,setDisplayProducts]= useState([])
  useEffect(()=>{
    const url= 'https://stark-beyond-11447.herokuapp.com/displayProduct'
    fetch(url)
    .then(res=>res.json())
    .then(data=> {
      setDisplayProducts(data)
    })
  }, [])

  return (
    <div>
     
      <h2 className='text-center text-6xl m-6 text-blue-600'> Items On Display</h2>
     <div className='sm:grid grid-cols-3 gap-4 mt-5'>
     {
        displayProducts.map(product=>
          <div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg" src={product.img} alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl text-center font-medium mb-2">{product.name}</h5>
      <ul className="text-gray-700 text-base mb-4">
        <li> Catagory: <span>{product.catagory}</span></li>
        <li> Short Description: <span>{product.description.substring(0,100)}...</span></li>
        <li> Price: <span>{product.price}</span></li>
        <li> Quantity: <span>{product.quantity}</span></li>
        <li> Brand Name: <span>{product.BrandName}</span></li> 
      </ul>
      <Link to={`inventory/${product._id}`}>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>
      </Link>
    </div>
  </div>
</div>)
      }
     
     <div className='container  my-10 '>
      <Link to={'/manageinventory'}> <button type="button" className="w-full inline-block px-6 py-2 border-2 border-blue-600 text-white-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"> Manage Inventory</button>
      </Link>
      </div>
</div>
    </div>


  );
};

export default InventorySection;
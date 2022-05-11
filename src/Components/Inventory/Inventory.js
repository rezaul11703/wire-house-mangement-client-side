import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Inventory = () => {
  const {id}= useParams()
  const [singleUser, setUser]= useState({})
  const navigate=useNavigate()
  useEffect(()=>{
    const url= `http://localhost:5000/inventory/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setUser(data))
  },[])
  
  const handleIncreaseQuantity=event=>{
    event.preventDefault()
    const updateQuantity= parseInt(event.target.quantity.value)
    const  previousQuantity = parseInt(singleUser.quantity)
    const finalUser=JSON.stringify(updateQuantity+previousQuantity)
    const updateUser={finalUser} 
    const url= `http://localhost:5000/inventory/${id}`
    fetch(url,{
      method: "PUT",
      headers:{
        'content-type':"application/json"
      },
      body:JSON.stringify(updateUser)
    })
    .then(res=>res.json())
    .then(data=>{
      setUser(data)
    })
    event.target.reset()
    alert("sucessfully Updated")
    navigate('/')
  }

  const handleReduceQuantity=e=>{
    e.preventDefault()
    const  previousQuantity = parseInt(singleUser.quantity)
    const normalUser=(previousQuantity-1)
    if(normalUser>0){
      
  }
  else{
    alert("You have less Item")
  }
}
  
  return (
    <div>
      <h2 className='text-center'> This is a Singel Inventory Section:{singleUser._id}</h2>

      <div className='sm:grid grid-cols-1 gap-4 mt-5 container mx-auto my-6'>
      <Card>
    <Card.Img variant="top" src={singleUser.img} />
    <Card.Body>
      <Card.Text>
      <ul className="text-gray-700 text-base mb-4">
      <li className='font-bold text-2xl'> Catagory: <span className='font-semibold text-xl'>{singleUser.name}</span></li>
        <li className='font-bold text-2xl'> Short Description: <span className='font-semibold text-xl'>{singleUser.description}</span></li>
        <li className='font-bold text-2xl'> Price: <span className='font-semibold text-xl'>{singleUser.price}</span></li>
        <li className='font-bold text-2xl'> Quantity: <span className='font-semibold text-xl'>{singleUser.quantity}</span></li>
        <li className='font-bold text-2xl'> Brand Name: <span className='font-semibold text-xl'>{singleUser.BrandName}</span></li> 
       </ul>
      </Card.Text>
    </Card.Body>
  </Card>
</div>
<div className='sm:grid grid-cols-2 gap-4 mt-5 container mx-auto my-6'>
<form className="flex space-x-2 justify-center" onSubmit={handleIncreaseQuantity}>
  <input type="text" name="quantity" placeholder='Input Quantity'/>
  <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Restock Items</button>
</form>
<form className="flex space-x-2 justify-center" onSubmit={handleReduceQuantity}>
  <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Restock Items</button>
</form>

</div>
      <div className='container mx-auto my-6 '>
      <Link to={'/manageinventory'}> <button type="button" className="w-full inline-block px-6 py-2 border-2 border-blue-600 text-white-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"> Manage Inventory</button>
      </Link>
      </div>
    </div>
  
)};

export default Inventory;
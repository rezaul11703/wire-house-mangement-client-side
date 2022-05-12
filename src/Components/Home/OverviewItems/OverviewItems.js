import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';

const OverviewItems = () => {
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
   <div className='container'>
      <h2 className='text-center text-6xl m-6 text-blue-600'> Items Overview</h2>
     <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Catagory</th>
      <th>Total Quantity</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laptop</td>
      <td>10</td>
      
    </tr>
    <tr>
      <td>Smart Phone</td>
      <td>10</td>
      
    </tr>
    <tr>
      <td>Smart Watch</td>
      <td>10</td>
      
    </tr>
    <tr>
      <td>Computer</td>
      <td>10</td>
    
    </tr>
    <tr>
      <td>Smart Tv</td>
      <td>10</td>
      
    </tr>
    <tr>
      <td>Accessories</td>
      <td>10</td>
      
    </tr>
    </tbody>
  </Table>
   </div>
  )
};

export default OverviewItems;
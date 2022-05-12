
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MangeInventory = (props) => {
  const [items, setItems] = useState([])
  const [fetureditems, setfeturedItems] = useState([])
  useEffect(() => {
    const url = 'http://localhost:5000/addedItems'
    fetch(url)
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])
  useEffect(() => {
    const url = 'http://localhost:5000/displayProduct'
    fetch(url)
      .then(res => res.json())
      .then(data => setfeturedItems(data))
  }, [])

  const itemDelete = id => {
    const process = window.confirm("Are you sure to Delete")
    console.log(id)
    if (process) {
      console.log(id)
      const url = `http://localhost:5000/inventory/${id}`
      fetch(url, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            const remainItem = items.filter(item => item._id !== id)
            setItems(remainItem)
          }
        })
    }
  }
  return (
    <div className='container mt-10'>
      <h2 className='text-center'>
        Here You can see All the products
      </h2>
      <button className="border-2 text-sm" > <Link className='no-underline' to={'/additems'}>  Add New item</Link></button>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Catagory</th>
            <th>Name</th>
            <th>BrandName</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        {items.map(item => <tr>
          <td>{item.catagory}</td>
          <td>{item.name}</td>
          <td>{item.BrandName}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          <td><button onClick={() => itemDelete(item._id)}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg></button></td>
          <td><button><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg></button></td>
        </tr>)}
      </Table>

      <h2 className='text-center'>
        Featured Items
      </h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Catagory</th>
            <th>Name</th>
            <th>BrandName</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Update</th>
          </tr>
        </thead>
        {fetureditems.map(item => <tr>
          <td>{item.catagory}</td>
          <td>{item.name}</td>
          <td>{item.BrandName}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          <td><button><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg></button></td>
        </tr>)}
      </Table>

    </div>
  )

};

export default MangeInventory;
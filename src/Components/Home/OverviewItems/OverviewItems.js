import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const OverviewItems = () => {
  return (
   <div className='container'>
      <h2 className='text-center text-6xl m-6 text-blue-600'> Items Overview</h2>
     <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Catagory</th>
      <th>Total Quantity</th>
      <th>Product In</th>
      <th>Product Out</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laptop</td>
      <td>10</td>
      <td>15</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Smart Phone</td>
      <td>10</td>
      <td>15</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Smart Watch</td>
      <td>10</td>
      <td>15</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Computer</td>
      <td>10</td>
      <td>15</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Smart Tv</td>
      <td>10</td>
      <td>15</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Accessories</td>
      <td>10</td>
      <td>15</td>
      <td>5</td>
    </tr>
    </tbody>
  </Table>
   </div>
  )
};

export default OverviewItems;
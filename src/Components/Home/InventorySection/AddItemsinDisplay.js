import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const AddItemsinDisplay = () => {
  const { register, handleSubmit } = useForm();
  const navigate=useNavigate()
  const onSubmit = data => {
    const url= 'http://localhost:5000/displayProduct'
   fetch(url, {
     method: "POST",
     headers:{
       "content-type":"application/json"
     },
     body: JSON.stringify(data)
   })
   .then(res=>res.json())
   .then(data=>data)
   alert('Your Display item is suceesfully added')
   navigate('/')
  }
  
  return (
    <div className='mt-5 text-center'>
      <h3> Please Fill Up the fields to Added Some Items</h3>
      <div >
      <form className='flex  flex-col mx-auto w-80 m-2' onSubmit={handleSubmit(onSubmit)}>
      <input name="name" className='m-2  border-2  text-xl border-slate-600 shadow rounded-md' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <select name="catagory"className='m-2  text-xl border-2 border-slate-600 shadow rounded-md' placeholder='Catagory' {...register("catagory")} >
        <option value="laptop">Laptop</option>
        <option value="Computer">Computer</option>
        <option value="Accessories">Accessories</option>
        <option value="Smart Watch">Smart Watch</option>
        <option value="Smart TV">Smart TV</option>
        <option value="Smart Phone">Smart Phone</option>
      </select>
      <textarea name="description"className='m-2 text-xl  border-2 border-slate-600 shadow rounded-md'placeholder='Description' {...register("description")} />
      <input name="price" className='m-2  text-xl border-2 border-slate-600 shadow rounded-md' placeholder='Price' {...register("price", { required: true, maxLength: 20 })} />
      <input name="BarndName" className='m-2  text-xl border-2 border-slate-600 shadow rounded-md' placeholder='Brand Name' {...register("BrandName")} />
      <input name="imgUrls"className='m-2 text-xl  border-2 border-slate-600 shadow rounded-md' placeholder='ImgUrl' {...register("img")}/>
      <input name=""className='m-2 text-xl  border-2 border-slate-600 shadow rounded-md' placeholder='Quantity' {...register("quantity")}/>
      <input className='m-2  text-xl border-3  border-slate-600 shadow rounded-md hover:border-slate-900 hover:bg-blue-100'  type="submit" />
    </form>
      </div>

    </div>
  );
};

export default AddItemsinDisplay;
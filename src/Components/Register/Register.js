import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { SpinnerCircular, SpinnerCircularSplit } from 'spinners-react';
import auth from '../../firebase.init';

const Register = () => {
  const navigate=useNavigate()
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
 
  const handleRegister=event=>{
    event.preventDefault()
    const name = event.target.name.value
    const email= event.target.email.value
    const pass= event.target.passward.value
    createUserWithEmailAndPassword(email,pass)
  }
  if(user){
    alert("email Verification Sent")
    return navigate('/') 
  }
  if(loading){
    return <SpinnerCircularSplit/>
  }
  if(error){
    alert("try Again")
  }
  return (
    <div>
      <h2> Please Register Here</h2>
      <Form className="container mx-auto" onSubmit={handleRegister}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Name</Form.Label>
    <Form.Control type="text" name="name" placeholder="Enter email" />
  </Form.Group>
  <Form.Group>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3"  controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="passward" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  <p>Already Register? <Link to="/Login">login</Link></p>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
};

export default Register;
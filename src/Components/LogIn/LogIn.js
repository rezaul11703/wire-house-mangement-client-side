import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState, useSendPasswordResetEmail, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SpinnerCircularSplit } from 'spinners-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify'
import { async } from '@firebase/util';


const LogIn = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const navgate = useNavigate()
  const location = useLocation()
  const emailId = useRef('')
  const passNo = useRef('')
  let from = location.state?.from?.pathname || "/";
  const Handlelogin = event => {
    event.preventDefault()
    const email = emailId.current.value
    const pass = passNo.current.value
    signInWithEmailAndPassword(auth, email, pass)
    if (loading) {
      return <SpinnerCircularSplit />
    }
    if (user) {
      alert("Sucessefully Login")
      return navgate(from, { replace: true })
    }
    if (error) {
      return console.log(error)
    }


  }
  const handleloginWithGoogle = () => {
    signInWithGoogle()
    if (loading1) {
      return <SpinnerCircularSplit />
    }
    if (user1) {
      alert("Sucessefully Login")
      return navgate(from, { replace: true })

    }
    if (error1) {
      alert("Please Provide Valid Information or Reset Pass")
      navgate('/login')
    }
  }



  return (
    <div className="container w-50 mx-auto mt-6">
      <Form onSubmit={Handlelogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailId} type="email" name="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passNo} type="password" name="passward" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <p>New Here? <Link to="/register">Register</Link></p>
        <p>Forge passward? <button className='text-primary'>Reset Password</button></p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <hr />
      <h2 className='text-center'> Or</h2>
      <hr />
      <div className='text-center'>
        <button onClick={handleloginWithGoogle} className="w-80 mx-auto inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
          <div className='flex justify-evenly items-center'>
            <FontAwesomeIcon icon={faGoogle} />
            <span> Sign in with Google</span>
          </div>
        </button>
      </div>
      <ToastContainer />

    </div>
  );
};

export default LogIn;

import React from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import useFirebase from '../Authentification/Authenticate';
import './Login.css'
const Login = () => {
    const {googleSignin} = useFirebase()
    return (
        <div>
          <h2 className='logintext'> You have to Login to access the other Benefits </h2>
          <div className="w-25 background-info text-dark align-center login">
           <h3>Already users?</h3>
           <p>Sign is with google then </p>
           <Button variant="success" onClick={googleSignin} >Google Sign in </Button>
          </div>
        </div>
    );
};

export default Login;<h2>This is login page come here to log here </h2>
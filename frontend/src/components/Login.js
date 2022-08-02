import React from 'react'
// import {TextField} from '@mui/material'
import {Formik} from "formik"
import Swal from 'sweetalert2'
import * as Yup from 'yup';
import {useNavigate ,Link} from 'react-router-dom'
import { Card } from '@mui/material';
import './Login.css';
const Login = () => {

const navigate = useNavigate();

  const userSubmit = async (formdata) =>{
    console.log(formdata);
     
    // when we use a fetch 
    // 1.Address
    // 2.request method
    //3.data
    // 4.data format 

    const response = await fetch('http://localhost:5000/user/authenticate',{
      method:'POST',
      // converting javascript object to JSON with stringify
       body:JSON.stringify(formdata),  
       headers:{
        'Content-Type':'application/json'
       }
    })

    if(response.status === 200){
      console.log('success');
      Swal.fire({
        icon :"success",
        title :"well done👍",
        text :"You have done a wonderfull job!!"
         });
         navigate("/addcode")
         const data = await response.json();
         sessionStorage.setItem("user", JSON.stringify(data));
    }
    else{
      console.log('Login Error');
      Swal.fire({
        icon: "error",
        title: "Try Again",
        text: "Check email and password",

      })
    }

  }
  const SignupSchema = Yup.object().shape({
      password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });
  return (
    <div className='loginbackground1'>
    <div className='loginbackground' >
     {/* <div className='loginmargin'   > */}
      {/* <h1 className='text-center' style={{color:"black"}}>Login</h1>
      <h4 className='text-center' style={{color:"black"}}>Welcome back! Login to access your account.</h4>
      <h5 className='text-center' style={{color:"black"}}>Did you <Link to='/forgetpassword'>Forget Your Password?</Link> </h5> */}

         <Formik initialValues={{
             email:'',
              password:'',
              }} onSubmit={userSubmit} validationSchema={SignupSchema} >
              {({values,handleChange,handleSubmit,errors})=>(
              //  <form  className='logintextfield' onSubmit={handleSubmit}>
              //  <TextField  value={values.email} onChange={handleChange} id="email" sx={{mt:3}} fullWidth label="Email" helperText={errors.email} error={errors.email?true:false} />
              //  <TextField  value={values.password} onChange={handleChange} id="password" sx={{mt:3}} fullWidth label="Password" type="password" helperText={errors.password} error={errors.password?true:false}/>
              //  <button type='submit' className='btn btn-primary'>Log In</button>
              //  </form>
              <Card className='logincard'>
<form className='Loginform'>
<h1 className='text-center' style={{color:"black"}}>Login</h1>
      <h4 className='text-center' style={{color:"black"}}>Welcome back! Login to access your account.</h4>
      <h5 className='text-center' style={{color:"black"}}>Did you <Link to='/forgetpassword'>Forget Your Password?</Link> </h5>
  <br />
  <div class="form-outline mb-4">
    <input type="email"  class="form-control"  value={values.email} onChange={handleChange} id="email" helperText={errors.email} error={errors.email?true:false}/>
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  
  <div class="form-outline mb-4">
    <input type="password" value={values.password} onChange={handleChange} id="password" class="form-control" helperText={errors.password} error={errors.password?true:false} />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

 
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example34" checked />
        <label class="form-check-label" for="form2Example34"> Remember me </label>
      </div>
    </div>

    <div class="col">
      
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  
  <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

  
  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
</Card>

               )}              
            </Formik>
           </div>
           </div>
           )
}
export default Login
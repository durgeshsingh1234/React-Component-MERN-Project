import React from 'react'
import {TextField,Button} from '@mui/material'
import {Formik} from "formik"
import Swal from 'sweetalert2'
import * as Yup from 'yup';
import {useNavigate ,Link} from 'react-router-dom'
const Login = () => {

const navigate = useNavigate();

  const userSubmit = async (formdata) =>{
    console.log(formdata);
     
    // when we use a fetch 
    // 1.Address
    // 2.request method
    //3.data
    // 4.data format 

    const response = await fetch('http://localhost:5000/user/add',{
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
         response.json().then(data=>{
            sessionStorage.setItem("user",JSON.stringify(data));
            navigate('/login');
         });
    }else{
      console.log('error occured');
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
    <div className='loginbackground' >
     <div className='loginmargin'   >
      <h1 className='text-center' style={{color:"black"}}>Login</h1>
      <h4 className='text-center' style={{color:"black"}}>Welcome back! Login to access your account.</h4>
      <h5 className='text-center' style={{color:"black"}}>Did you <Link to='/forgetpassword'>Forget Your Password?</Link> </h5>

         <Formik initialValues={{
             email:'',
              password:'',
              }} onSubmit={userSubmit} validationSchema={SignupSchema} >
              {({values,handleChange,handleSubmit,errors})=>(
               <form  className='logintextfield' onSubmit={handleSubmit}>
               <TextField  value={values.email} onChange={handleChange} id="email" sx={{mt:3}} fullWidth label="Email" helperText={errors.email} error={errors.email?true:false} />
               <TextField  value={values.password} onChange={handleChange} id="password" sx={{mt:3}} fullWidth label="Password" type="password" helperText={errors.password} error={errors.password?true:false}/>
               <Button variant="contained" type="submit" color='secondary' sx={{mt:5}}>Login</Button>
               </form>
               )}              
            </Formik>
           </div>
           </div>
           )
}
export default Login
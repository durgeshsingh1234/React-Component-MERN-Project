import React from 'react'
import {Link} from 'react-router-dom'
import {TextField,Button} from '@mui/material'
import {Formik} from "formik"
import Swal from 'sweetalert2'
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom'
const Signup = () => {

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
         navigate('/login');
    }else{
      console.log('error occured');
    }

  }
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      mobile: Yup.number()
      .required('Required'),
      password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      confirmpassword: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });
  return (
    <div className='signupbackground' >
     <div className='signupmargin'  >
      <h1 className='text-center' style={{color:"black" }} >SignUp here</h1>
      <h4 className='text-center' style={{color:"black" }} >Please fill this form to create an account!</h4>
         <Formik initialValues={{
              name:'',
              
              email:'',
              password:'',
              mobile:'',
              confirmpassword:''
            }} onSubmit={userSubmit} validationSchema={SignupSchema} >
              {({values,handleChange,handleSubmit,errors})=>(
               <form  className='signuptextfield' onSubmit={handleSubmit}>
               
               <TextField  value={values.name} onChange={handleChange} id="name" sx={{mt:3}} fullWidth label="Full Name" helperText={errors.name} error={errors.name?true:false}  />
               <TextField  value={values.email} onChange={handleChange} id="email" sx={{mt:3}} fullWidth label="Email" helperText={errors.email} error={errors.email?true:false} />
               <TextField  value={values.mobile} onChange={handleChange} id="mobile" sx={{mt:3}} fullWidth label="Mobile Number" helperText={errors.mobile} error={errors.mobile?true:false} />
               <TextField  value={values.password} onChange={handleChange} id="password" sx={{mt:3}} fullWidth label="Create Password" type="password" helperText={errors.password} error={errors.password?true:false}/>
               <TextField  value={values.confirmpassword} onChange={handleChange} id="confirmpassword" sx={{mt:3}} fullWidth label="Confirm Password" type="password" helperText={errors.password} error={errors.password?true:false}/>
               <Button  variant="contained" type="submit" color='secondary' sx={{mt:5}}>Create Account</Button>
               <h6 className='text-center'>Already a member? <Link to='/login'>Login</Link></h6>
             
               </form>

              )}              
            </Formik>
          
          
           </div>
           </div>
           )
}
export default Signup
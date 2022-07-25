import React from 'react'
import {TextField,Button} from '@mui/material'
import {Formik} from "formik"
import Swal from 'sweetalert2'
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom'
const Addcode = () => {

const navigate = useNavigate();

  const userSubmit = async (formdata) =>{
    console.log(formdata);
     
    // when we use a fetch 
    // 1.Address
    // 2.request method
    //3.data
    // 4.data format 

    const response = await fetch('http://localhost:5000/components/add',{
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
         navigate('/browse');
    }else{
      console.log('error occured');
    }

  }
  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    // email: Yup.string().email('Invalid email').required('Required'),
  });
  return (
     <div className='addcodebackground'>
      <div className='addcodemargin'>
      <h1 className='text-center' style={{color:'black'}} > Addcode </h1>
         <Formik initialValues={{
              title:'',
              description:'',
              thumbnail:'',
              code:'',
              createdAt:new Date()
            }} onSubmit={userSubmit} validationSchema={SignupSchema} >
              {({values,handleChange,handleSubmit,errors})=>(
               <form  className='addcodetextfield' onSubmit={handleSubmit}>
               <TextField value={values.title} onChange={handleChange} id="title" sx={{mt:5}} fullWidth label="Title" helperText={errors.name} error={errors.name?true:false} />
               <TextField value={values.description} onChange={handleChange} id="description" sx={{mt:3}} fullWidth label="Description" />
               <TextField value={values.thumbnail} onChange={handleChange} id="thumbnail" sx={{mt:3}} fullWidth label="Thumbnail"  />
               <TextField value={values.code} onChange={handleChange} id="code" sx={{mt:3}} fullWidth label="Code"  />
              
               <Button variant="contained" type="submit" color='success' sx={{mt:5}}>Addcode</Button>
               </form>  
              )}              
            </Formik>
           </div>
           </div>
           )
}
export default Addcode
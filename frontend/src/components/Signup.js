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
              fname:'',
              lname:'',
              email:'',
              password:'',
              // mobile:'',
              // confirmpassword:''
            }} onSubmit={userSubmit} validationSchema={SignupSchema} >
              {({values,handleChange,handleSubmit,errors})=>(
                        <form onSubmit={handleSubmit}>
                    
                        <div class="row">
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              <input
                                type="text"
                                
                                class="form-control"
                              />
                              <input value={values.email} onChange={handleChange} id="fname" />
                              <label
                                class="form-label" 
                                
                                for="form3Example1"
                                style={{"marginLeft": "0px"}}
                                >First name</label
                              >
                              <div class="form-notch">
                                <div
                                  class="form-notch-leading"
                                  style={{"width": "9px"}}
                                ></div>
                                <div
                                  class="form-notch-middle"
                                  style={{"width": "68.8px"}}
                                ></div>
                                <div class="form-notch-trailing"></div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 mb-4">
                            <div class="form-outline">
                              <input
                                type="text"
                                // id="form3Example2"
                                class="form-control"
                              />
                              <input value={values.email} onChange={handleChange} id="lname" />
                              <label
                                class="form-label"
                                for="form3Example2"
                                style={{"marginLeft": "0px"}}
                                >Last name</label
                              >
                              <div class="form-notch">
                                <div
                                  class="form-notch-leading"
                                  style={{"width":"9px"}}
                                ></div>
                                <div
                                  class="form-notch-middle"
                                  style={{"width": "68px"}}
                                ></div>
                                <div class="form-notch-trailing"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                 
                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            // id="form3Example3"
                            class="form-control active"
                            autocompleted=""
                          />
                          <input value={values.email} onChange={handleChange} id="email" />
                          <label
                            class="form-label"
                            for="form3Example3"
                            style={{"marginLeft": "0px"}}
                            >Email address</label
                          >
                          <div class="form-notch">
                            <div
                              class="form-notch-leading"
                              style={{"width": "9px"}}
                            ></div>
                            <div
                              class="form-notch-middle"
                              style={{"width": "88.8px"}}
                            ></div>
                            <div class="form-notch-trailing"></div>
                          </div>
                        </div>
                      
                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            // id="form3Example4"
                            class="form-control active"
                            autocompleted=""
                          />
                          <input value={values.email} onChange={handleChange} id="password" />
                          <label
                            class="form-label"
                            for="form3Example4"
                            style={{"marginLeft": "0px"}}
                            >Password</label
                          >
                          <div class="form-notch">
                            <div
                              class="form-notch-leading"
                              style={{"width": "9px"}}
                            ></div>
                            <div
                              class="form-notch-middle"
                              style={{"width": "64.8px"}}
                            ></div>
                            <div class="form-notch-trailing"></div>
                          </div>
                        </div>
             
                        <div
                          class="form-check d-flex justify-content-center mb-4"
                        >
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            // id="form2Example33"
                            checked=""
                          />
                          <label class="form-check-label" for="form2Example33"
                            >Subscribe to our newsletter</label
                          >
                        </div>
                       
                        <button
                          type="submit"
                          class="btn btn-primary btn-block mb-4"
                          aria-controls="#picker-editor"
                        >
                          Sign up
                        </button>
                   
                        <div class="text-center">
                          <p>or sign up with:</p>
                          <button
                            type="button"
                            class="btn btn-link btn-floating mx-1"
                          >
                            <i
                              class="fab fa-facebook-f"
                              aria-controls="#picker-editor"
                            ></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-link btn-floating mx-1"
                          >
                            <i
                              class="fab fa-google"
                              aria-controls="#picker-editor"
                            ></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-link btn-floating mx-1"
                          >
                            <i
                              class="fab fa-twitter"
                              aria-controls="#picker-editor"
                            ></i>
                          </button>
                          <button
                            type="button"
                            class="btn btn-link btn-floating mx-1"
                          >
                            <i
                              class="fab fa-github"
                              aria-controls="#picker-editor"
                            ></i>
                          </button>
                        </div>
                      </form>

              )}              
            </Formik>
          
          
           </div>
           </div>
           )
}
export default Signup
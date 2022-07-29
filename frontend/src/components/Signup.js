import React from "react"
import { Formik } from "formik"
import Swal from "sweetalert2"
import * as Yup from "yup"
import "./Signup.css"
import { useNavigate } from "react-router-dom"
const Signup = () => {
  const navigate = useNavigate()

  const userSubmit = async (formdata) => {
    console.log(formdata)

    // when we use a fetch
    // 1.Address
    // 2.request method
    //3.data
    // 4.data format

    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      // converting javascript object to JSON with stringify
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.status === 200) {
      console.log("success")
      Swal.fire({
        icon: "success",
        title: "well done👍",
        text: "You have done a wonderfull job!!",
      })
      navigate("/login")
    } else {
      console.log("error occured")
    }
  }
  const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    mobile: Yup.number().required("Required"),
    password: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    confirmpassword: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  })
  return (
    <div className="signupbackground">
      <div className="signupmargin">
        {/* <h1 className='text-center' style={{color:"black" }} >SignUp here</h1>
      <h4 className='text-center' style={{color:"black" }} >Please fill this form to create an account!</h4> */}

        {/* Started */}

        <div id="preview" class="preview">
          <div className="custom6"></div>
          <div>
            <div className="custom5" data-draggable="true" draggable="false">
              <section draggable="false" class="overflow-hidden pt-0" data-v-271253ee="">
                <section class="mb-10 background-radial-gradient overflow-hidden">
                  <div class="container px-4 py-5 px-md-5 text-center text-lg-start">
                    <div class="row gx-lg-5 align-items-center mb-5">
                      <div class="col-lg-6 mb-5 mb-lg-0 custom4">
                        <h1 class="my-5 display-3 fw-bold ls-tight custom3">
                          <span>The best offer</span> <br />
                          <span className="custom2">for your business</span>
                        </h1>
                        <p class="mb-4 opacity-70 custom1">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, expedita iusto veniam atque, magni tempora
                          mollitia dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
                        </p>
                      </div>
                      <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
                        <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
                        <div class="card bg-glass">
                          <div class="card-body px-4 py-5 px-md-5">
                            <Formik
                              initialValues={{
                                fname: "",
                                lname: "",
                                email: "",
                                password: "",
                              }}
                              onSubmit={userSubmit}
                              // validationSchema={SignupSchema}
                              >
                              {({ values, handleChange, handleSubmit, errors }) => (
                                <form onSubmit={handleSubmit}>
                                  <div class="row">
                                    <div class="col-md-6 mb-4">
                                      <div class="form-outline">
                                        <input type="text" class="form-control" value={values.fname} onChange={handleChange} id="fname" />
                                        <label
                                          class="form-label"
                                          // for="form3Example1"
                                          style={{ marginLeft: "0px" }}>
                                          First name
                                        </label>

                                        <div class="form-notch">
                                          <div class="form-notch-leading" style={{ width: "9px" }}></div>
                                          <div class="form-notch-middle" style={{ width: "68.8px" }}></div>
                                          <div class="form-notch-trailing"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-6 mb-4">
                                      <div class="form-outline">
                                        <input class="form-control" type="text" value={values.lname} onChange={handleChange} id="lname" />
                                        <label class="form-label" for="form3Example2" style={{ marginLeft: "0px" }}>
                                          Last name
                                        </label>

                                        <div class="form-notch">
                                          <div class="form-notch-leading" style={{ width: "9px" }}></div>
                                          <div class="form-notch-middle" style={{ width: "68px" }}></div>
                                          <div class="form-notch-trailing"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="form-outline mb-4">
                                    <input
                                      type="email"
                                      class="form-control active"
                                      value={values.email}
                                      onChange={handleChange}
                                      id="email"
                                    />
                                    <label class="form-label" for="form3Example3" style={{ marginLeft: "0px" }}>
                                      Email address
                                    </label>
                                    <div class="form-notch">
                                      <div class="form-notch-leading" style={{ width: "9px" }}></div>
                                      <div class="form-notch-middle" style={{ width: "88.8px" }}></div>
                                      <div class="form-notch-trailing"></div>
                                    </div>
                                  </div>

                                  <div class="form-outline mb-4">
                                    <input
                                      class="form-control active"
                                      type="password"
                                      value={values.password}
                                      onChange={handleChange}
                                      id="password"
                                    />
                                    <label class="form-label" for="form3Example4" style={{ marginLeft: "0px" }}>
                                      Password
                                    </label>
                                    <div class="form-notch">
                                      <div class="form-notch-leading" style={{ width: "9px" }}></div>
                                      <div class="form-notch-middle" style={{ width: "64.8px" }}></div>
                                      <div class="form-notch-trailing"></div>
                                    </div>
                                  </div>

                                  <div class="form-check d-flex justify-content-center mb-4">
                                    <input
                                      class="form-check-input me-2"
                                      type="checkbox"
                                      value=""
                                      // id="form2Example33"
                                      checked=""
                                    />
                                    <label class="form-check-label" for="form2Example33">
                                      Subscribe to our newsletter
                                    </label>
                                  </div>

                                  <button type="submit" class="btn btn-primary btn-block mb-4" aria-controls="#picker-editor">
                                    Sign up
                                  </button>

                                  <div class="text-center">
                                    <p>or sign up with:</p>
                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                      <i class="fab fa-facebook-f" aria-controls="#picker-editor"></i>
                                    </button>
                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                      <i class="fab fa-google" aria-controls="#picker-editor"></i>
                                    </button>
                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                      <i class="fab fa-twitter" aria-controls="#picker-editor"></i>
                                    </button>
                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                      <i class="fab fa-github" aria-controls="#picker-editor"></i>
                                    </button>
                                  </div>
                                </form>
                              )}
                            </Formik>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Signup

import React, { useState } from "react"
import { Formik } from "formik"
import Swal from "sweetalert2"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"
import './Addcode.css';
import { Card } from '@mui/material';

const Addcode = () => {
  const navigate = useNavigate()

  const [selFile, setSelFile] = useState("");
  const url = 'http://localhost:5000';

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")));

  const userSubmit = async (formdata) => {
    formdata.thumbnail = selFile;
    console.log(formdata)

    // when we use a fetch
    // 1.Address
    // 2.request method
    //3.data
    // 4.data format

    const response = await fetch("http://localhost:5000/components/add", {
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
      navigate("/browse")
    } else {
      console.log("error occured")
    }
  }

  const uploadThumbnail = (e) => {
    const file = e.target.files[0]
    setSelFile(file.name)
    const fd = new FormData()
    fd.append("myfile", file)
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded")
      }
    })
  }

  const SignupSchema = Yup.object().shape({
    title: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    // email: Yup.string().email('Invalid email').required('Required'),
  })
  return (
    <div className="addcodebackground ">
      <div className="addcodemargin ">
        <Formik
          initialValues={{
            title: "",
            description: "",
            code: "",
            imports:"",
            uploadedBy : currentUser._id,
            createdAt: new Date(),
          }}
          onSubmit={userSubmit}
          validationSchema={SignupSchema}>
          {({ values, handleChange, handleSubmit, errors }) => (
            <form className="form" onSubmit={handleSubmit}>

              <div className="row">
                <div className="col-md-12">
              <Card className="Addcodecard" >
                 
            <div class="form-outline mb-4">
              <input type="text" id="title" class="form-control" value={values.text} onChange={handleChange} helperText={errors.name}    error={errors.name ? true : false}/>
              <label class="form-label" for="form4Example1">Title</label>
            </div>
          
            
            <div class="form-outline mb-4">
              <input type="text" value={values.description} onChange={handleChange} id="description" class="form-control" />
              <label class="form-label" for="form4Example2">Description</label>
            </div>

            <div class="form-outline mb-4">
              <input type="text" value={values.imports} onChange={handleChange} id="imports" class="form-control" />
              <label class="form-label" for="form4Example2">Imports</label>
            </div>
          
            
            <div class="form-outline mb-4">
              <textarea type="text" class="form-control" value={values.code} onChange={handleChange} id="code" rows="4"></textarea>
              <label class="form-label" for="form4Example3">Code</label>
            </div>
            
             <label>Select Image </label>
             <br />
            <input onChange={uploadThumbnail} type="file" />
          <button type="submit" class="btn btn-primary btn-block mb-4 addcodebutton">Addcode</button>
          </Card>
          </div>
          
          {/* <Card>
          <div className="col">
          <img  src="https://ih1.redbubble.net/image.624068452.2428/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="code image" />
          
          </div>
          </Card> */}
          </div>
          </form>

          )}
        </Formik>
      </div>
    </div>
  )
}
export default Addcode

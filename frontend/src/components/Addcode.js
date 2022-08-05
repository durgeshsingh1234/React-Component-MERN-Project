import React, { useState } from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./Addcode.css";
import { TextField } from "@mui/material";

const Addcode = () => {
  const navigate = useNavigate();

  const [selFile, setSelFile] = useState("");
  const url = "http://localhost:5000";

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const userSubmit = async (formdata) => {
    formdata.thumbnail = selFile;
    console.log(formdata);

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
    });

    if (response.status === 200) {
      console.log("success");
      Swal.fire({
        icon: "success",
        title: "well done👍",
        text: "You have done a wonderfull job!!",
      });
      navigate("/browse");
    } else {
      console.log("error occured");
    }
  };

  const uploadThumbnail = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    // email: Yup.string().email('Invalid email').required('Required'),
  });
  return (
    <div className="container2">
      <div className="col-md-4 mx-auto">
        <div className="cards mt-5">
          <div className="card-body2">
            <Formik
              initialValues={{
                title: "",
                description: "",
                code: "",
                imports: "",
                uploadedBy: currentUser._id,
                createdAt: new Date(),
              }}
              onSubmit={userSubmit}
              validationSchema={SignupSchema}
            >
              {({ values, handleChange, handleSubmit, errors }) => (
                <form className="form" onSubmit={handleSubmit}>
                  <h3 className="text-center" style={{ color: "black" }}>
                    Add your code
                  </h3>

                  <div class="form-outline mb-2">
                    <TextField
                      class="form-control"
                      value={values.title}
                      onChange={handleChange}
                      id="title"
                      // sx={{ mt: 1 }}
                      fullWidth
                      label="Title"
                      type="text"
                    />
                  </div>

                  <div class="form-outline mb-2">
                    <TextField
                      class="form-control"
                      value={values.description}
                      onChange={handleChange}
                      id="description"
                      // sx={{ mt: 1 }}
                      fullWidth
                      label="Description"
                      type="text"
                    />
                  </div>

                  <div class="form-outline mb-2">
                    <TextField
                      class="form-control"
                      value={values.imports}
                      onChange={handleChange}
                      id="imports"
                      // sx={{ mt: 1 }}
                      fullWidth
                      label="Imports"
                      type="text"
                    />
                  </div>

                  <div class="form-outline mb-2">
                    {/* <textarea
                      type="text"
                      class="form-control"
                      value={values.code}
                      onChange={handleChange}
                      id="code"
                      rows="4"
                    ></textarea>
                    <label class="form-label" for="form4Example3">
                      Code
                    </label> */}
                    <TextField multiline
                    rows={4}
                      class="form-control"
                      value={values.code}
                      onChange={handleChange}
                      id="code"
                      // sx={{ mt: 1 }}
                      fullWidth
                      label="Code"
                      type="text"
                    />
                  </div>

                  <label>Select Image </label>
                  <br />
                  <input onChange={uploadThumbnail} type="file" />
                  <br />
                  <br />
                  <button
                    type="submit"
                    class="btn btn-primary btn-block mb-2 addcodebutton"
                  >
                    Addcode
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Addcode;

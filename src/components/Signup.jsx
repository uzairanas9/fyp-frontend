import axios from "axios";
import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signUpSchema } from "../schemas";
import { useFormik } from "formik";

const Signup = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    phoneno: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        submitdata(
          values.name,
          values.email,
          values.password,
          values.phoneno
        );
        console.log(
          values
        );
        action.resetForm();
      },
      
    });
  const navigate = useNavigate();
  const [msg, setMsg]=useState("");
  const[error,setError]=useState("");
  const submitdata = async ( name, email, password, phoneno) => {
        
    // e.preventDefault();
    try {
  
    
    const response = await axios.post(`http://localhost:5000/api/signup`, values);
    const data1 = await response.data;
    console.log("this is message", data1)
    localStorage.setItem("authToken", data1?.token);
    localStorage.setItem("userId", data1?.user?._id);
    localStorage.setItem("lohinUserId", data1?.user?._id);

    // if (data1.token) {
    //   navigate("/");
    //   // window.location.reload();
    //   alert("Sign Up Successful")
    // }
    if(data1.success){
      console.log("SUCCESSFULL Response");
      navigate("/");
        window.location.reload();
      alert("Sign Up Successful")
    }
    else{
      console.log("Suceess False")
      setError(data1.message)
    }
        
  } catch (error) {
      console.log("The Error in Catch is",error)
  }
  }

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setdata((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
 
  return (
    <>
      <div className="my-5">
        <h1 class="section-heading">Register Yourself Now</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  placeholder="Enter Your Full Name"
                />
                {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phoneno"
                  value={values.phoneno}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  placeholder="Enter Your Phone Number"
                />
                 {errors.phoneno && touched.phoneno ? (
                      <p className="form-error">{errors.phoneno}</p>
                    ) : null}
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  placeholder="name@example.com"
                />
                 {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                    {msg.message}
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" onClick={handleSubmit} type="submit">
                  Submit
                </button>
              </div>
            </form>
            {error && 
            <div>
              <p style={{color:"red"}}>{error}</p>
            </div>
            }
            <div class="btn1 col-lg-12 col-xs-12 col-sm-12">
              <h5>Already have an account?</h5>
              <button class="btn btn-secondary">
                <NavLink
                  activeClassName="menu_active"
                  exact
                  className="nav-link"
                  to="/login"
                >
                  Log In
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;

import axios from "axios";
import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setdata((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const[error,setError]=useState("");
  const formsubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:5000/api/signin`, data);
    const data1 = await response.data;
    // console.log("The SIGN-In User Data", data1.data._id);
    
    if (data1.data) {
      if(data1.data.email==="admin@gmail.com"){
        localStorage.setItem("authToken", data1.data?.token);
      localStorage.setItem("userId", data1.data._id);
      localStorage.setItem("lohinUserId", data1.data._id);
        navigate("/Adminuserdata");
        window.location.reload();
        alert("Log in Successful");
      }
      else {
        localStorage.setItem("authToken", data1.data?.token);
    localStorage.setItem("userId", data1.data._id);
    localStorage.setItem("lohinUserId", data1.data._id);
        navigate("/");
        window.location.reload();
        alert("Log in Successful");
    } 
    }
    else {
      setError(data1.message)
      // alert("Wrong Email or Password Try Again");
    }
      
    } catch (error) {
      console.log("Error", error)
    }

    
  };
  return (
    <>
      <div className="my-5">
        <h1 class="section-heading">Log In</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formsubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="password"
                  value={data.password}
                  onChange={InputEvent}
                  placeholder="Enter Your Password"
                />
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Log In
                </button>
              </div>
            </form>
            {error && 
            <div>
              <p style={{color:"red", marginTop:"10px"}}>{error}</p>
            </div>
            }
            <div class="btn1 col-lg-12 col-xs-12 col-sm-12">
              <h5>Don't have an account?</h5>
              <button class="btn btn-secondary">
                <NavLink
                  activeClassName="menu_active"
                  exact
                  className="nav-link"
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

import React from 'react';
import { useState } from 'react';
import { NavLink } from "react-router-dom";

const Signup = () => {
    const [data, setdata] = useState({
        fullname: "",
        phone: "",
        email: "",
        password: "",
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setdata((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };
    const formsubmit = (e) => {
        e.preventDefault();
        alert(`My Name is ${data.fullname}, My Mobile Number is ${data.phone}, My Email Address is ${data.email} and My password is ${data.password}`)
    }
    return (
        <>
            <div className="my-5">
                <h1 class="section-heading">Register Yourself Now</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formsubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    name='fullname'
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter Your Full Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1"
                                    name='phone'
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Enter Your Phone Number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    name='email'
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleFormControlInput1"
                                    name='password'
                                    value={data.password}
                                    onChange={InputEvent} />
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit</button>
                            </div>
                        </form>
                        <div class="btn1 col-lg-12 col-xs-12 col-sm-12">
                            <h5>Already have an account?</h5>
                            <button class="btn btn-secondary">
                                <NavLink activeClassName="menu_active" exact className="nav-link" to="/login">Log In</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

};
export default Signup;
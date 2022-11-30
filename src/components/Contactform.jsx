import React from 'react';
import { useState } from 'react';

const Contactform = () => {
    const [data, setdata] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg:"",
    });

    const InputEvent = (event)=>{
        const {name, value} = event.target;

        setdata((preVal)=>{
            return{
                ...preVal,
                [name]: value,
            };
        });
    };
    const formsubmit = (e) =>{
        e.preventDefault();
        alert(`My Name is ${data.fullname}, My Mobile Number is ${data.phone}, My Email Address is ${data.email} and My message is ${data.msg}`)
    }
    return (
        <>
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
                                <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"
                                name='msg'
                                value={data.msg}
                                onChange={InputEvent}></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );

};
export default Contactform;
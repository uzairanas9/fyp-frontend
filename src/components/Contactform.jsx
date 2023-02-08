import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Contactform = () => {
    const [data, setdata] = useState({
        name: "",
        phoneno: "",
        email: "",
        msg:"",
    });

    const InputEvent = (event)=>{
        setdata({
            ...data,
            [event.target.name]: event.target.value,
          });
    };
    const formsubmit = async (event) =>{
        event.preventDefault();

        try {
          await axios.post('http://localhost:5000/api/contact', data);
          alert('Your message has been sent successfully!');
          setdata({ name: "",
          phoneno: "",
          email: "",
          msg:"",})
        } catch (error) {
          console.error(error);
          alert('An error occurred while sending your message. Please try again later.', error);
        }
    }

    console.log("This is data", data)
    return (
        <>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formsubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                name='name'
                                value={data.name}
                                onChange={InputEvent}
                                placeholder="Enter Your Full Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1"
                                name='phoneno'
                                value={data.phoneno}
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
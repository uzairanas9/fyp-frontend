import React, { useState } from 'react'
import phone from "../images/phone-2.svg"
import clock from "../images/clock-2.svg"
import bag from "../images/bag-2.svg"
import Contactform from './Contactform'
import Commonheader from './Commonheader'
import Chat from './Chat'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsFillChatFill } from 'react-icons/bs';

function Contact() {

   
    return (
        <>
            {/* <Navbar /> */}
            <Commonheader title="Contact Us"/>
            <div className="my-5">
                {/* <h1 class="section-heading">Contact US</h1> */}
            </div>

            {/* <div className="floating-icon">
            <i class="fa-solid fa-comment"></i>
            <FontAwesomeIcon className='ic' icon="fa-regular fa-comment" />
            </div> */}

           


            <Contactform />


            <section class="contact-us flex" id="contact1">
                <div class="contact-info-wrapper">
                    <h1 class="section-heading">Contacts</h1>

                    <div class="contact-info">
                        <div>
                            <div>
                                <img src={phone} alt="" />
                                <div>
                                    <span>Call us:</span>
                                    <span>(+92) 3415552862</span>
                                </div>
                            </div>
                            <div>
                                <img src={bag} alt="" />
                                <div>
                                    <span>E-mail ::</span>
                                    <span>support@Bakramandi.com</span>
                                </div>
                            </div>
                            <div>
                                <img src={clock} alt="" />
                                <div>
                                    <span>Working Hours:</span>
                                    <span>Mon - Sat (8.00am - 12.00am)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13283.665953867676!2d73.0237518!3d33.6593257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b2f1c1c99b676ce!2sInternational%20Islamic%20University!5e0!3m2!1sen!2s!4v1639660241824!5m2!1sen!2s"
                        width="100%" height="100%" frameborder="0" allowfullscreen=""></iframe>
                </div>
            </section>
        </>
    )
}

export default Contact
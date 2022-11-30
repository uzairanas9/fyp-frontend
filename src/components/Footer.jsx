import React from 'react'
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
function Footer() {
    return (
        <>
            <div class="footer_areabg">
                 <div class="container"> 
                 <div class="main_footer col-lg-12 col-xs-12 col-sm-12">
                <div class="footer-menu col-lg-4 col-xs-12 col-sm-4">
                     <h3>Important Links</h3>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">New Animals</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Learning Video</a>
                        </li> <li><a href="">Terms and Conditions</a></li>
                    </ul>
                </div>
                <div class="footer_bx1 col-lg-4 col-xs-12 col-sm-4">
                    <h3>Follow Us</h3>
                    <ul>
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=923415552862&amp;text=Hi" style={{fontSize:"20px"}}>
                                <i class="fab fa-whatsapp"> <FaWhatsapp/></i>
                            </a></li>
                        <li><a href="" style={{fontSize: "20px"}} target="_blank">
                        <i class="fa-brands fa-facebook-f"><FaFacebookF/></i>
                            </a></li> </ul>
                    <div class="phn1"> <p>info@bakramandi.com.pk</p> <a href="">+92 341 555 2862</a> </div>
                </div> 
                <div class="footer_bx1 col-lg-4 col-xs-12 col-sm-4"> <h3>Newsletter</h3> <p>Enter Your email to subscribe!</p>
                    <div class="form-group col-lg-8 col-xs-8 col-sm-8">
                        <form action="">
                            <input type="email" class="form-control" name="email" required="" placeholder="Subscribe" />
                            <button type="submit" name="btnAddNewsLetterUsers" value="asd" style={{display:"none"}}></button>
                        </form>
                    </div>
                    <div class="bankcard col-lg-12 col-xs-12 col-sm-12"> Designed and Developed by : <a href="https://www.linkedin.com/in/uzair-front-end-developer/" target="_blank">Uzair Anas</a>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Footer
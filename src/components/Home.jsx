import React from 'react'
import img1 from "../images/img1.jpg"
import { NavLink } from 'react-router-dom'
// import img1 from "../images/img1.jpg"
// import img4 from "../images/img4.jpg"
import img10 from "../images/img10.jpg"
import img5 from "../images/img5.jpg"
import Card from './Card'
import Footer from './Footer'


function Home() {
  return (
    <>
    {/* <Navbar/> */}
    
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img5} class="d-block w-100" alt="..." />
            <div class="carousel-caption visible-lg visible-sm">
              <h1>Pakistan's</h1>
              <h3> Biggest Online Bakramandi</h3>
               <NavLink
                  activeClassName="menu_active"
                  exact
                  className="nav-link"
                  to="/about"
                > <div class="slider_btn"> 
                  Learn More </div>
                </NavLink> 
            </div>
          </div>
          <div class="carousel-item">
            <img src={img10} class="d-block w-100" alt="..." />
            <div class="carousel-caption visible-lg visible-sm">
              <h1>Pakistan's</h1>
              <h3> Biggest Online Bakramandi</h3>
              <NavLink
                  activeClassName="menu_active"
                  exact
                  className="nav-link"
                  to="/about"
                > <div class="slider_btn"> 
                  Learn More </div>
                </NavLink> 
            </div>
          </div>
          <div class="carousel-item">
            <img src={img1} class="d-block w-100" alt="..." />
            <div class="carousel-caption visible-lg visible-sm">
              <h1>Pakistan's</h1>
              <h3> Biggest Online Bakramandi</h3>
              <NavLink
                  activeClassName="menu_active"
                  exact
                  className="nav-link"
                  to="/about"
                > <div class="slider_btn"> 
                  Learn More </div>
                </NavLink> 
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="header_btm1 col-lg-12 col-xs-12 col-sm-12">
        <p>Now Buy and Sell your animals at Bakra Mandi at competitive prices and without any hassle. </p>
      </div>
      <div className="my-5">
      <h1 class="section-heading">New Arrivals</h1>
        {/* <div class="border1"></div> */}
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              <Card name="Healthy Cow For Sale" price="120,000" phone="3415552862"/>
              <Card name="Cow In Islamabad" price="100,000" phone="3425552841"/>
              <Card name="Cow For Sale" price="150,000" phone="3323234512"/>
            </div>
          </div>
        </div>
      </div>
      <div class="btn1 col-lg-12 col-xs-12 col-sm-12">  </div>

      <div class="footer_bottombg">
        <div class="container"> <div class="footer_btm_tx col-lg-12 col-xs-12 col-sm-12">
          <h3>Want to <span style={{ color: "#fdbc15" }}>Sell Your Animals</span> <br /> at Bakra Mandi?</h3>
          <div class="btn1 col-lg-12 col-xs-12 col-sm-12"> 
            <NavLink
                  activeClassName="menu_active"
                  exact
                  className="nav-link"
                  to="/signup"
                >
                  <div class="view_btn1"> 
                  Free Signup </div>
                </NavLink>  </div>
            <h4 dir="RTL" style={{ color: "white" }}>اگر اپ سائن اپ نہیں کر سکتے<br /> اپنے مویشی کے معلومات ہمیں Whatsapp کریں اور<br /> ہم اپ ک لئے اپ لوڈ کریں گے</h4> <div class="btn1 col-lg-12 col-xs-12 col-sm-12">
            <div class="view_btn1">
            <a
                      href="https://api.whatsapp.com/send?phone=923415552862&amp;text=Hi"
                      target="_blank"
                    >WhatsApp Now</a>
            </div> </div> </div> </div> </div>

      <div class="footer_bottom">
        <div class="container">
          <div class="footer1 col-lg-12 col-xs-12 col-sm-12">
            <div class="footer_box col-lg-4 col-xs-12 col-sm-4">
              <h3>Delivery</h3>
              <p>Most of sellers at Bakra mandi are facilitating delivery at your door step. Buyers can coordinate and negotiate directly with sellers for time, place and charges of delivery. </p>
            </div>
            <div class="footer_box col-lg-4 col-xs-12 col-sm-4">
              <h3>Payment</h3>
              <p>Payment terms and options to be mutually agreed between Buyers and Sellers. Bakra Mandi recommends making payment on delivery after inspecting animal. </p>
            </div>
            <div class="footer_box col-lg-4 col-xs-12 col-sm-4">
              <h3>Customer Satisfaction</h3>
              <p>Bakra Mandi tries its best to ensure customer satisfaction by ensuring reasonable pricing and maintaining an adequate system of rating to help buyers with level of trust and credibility that can be associated with a particular seller.</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Home
import React from 'react'
import Commonheader from './Commonheader'
import { NavLink } from 'react-router-dom'

function Animaldetails() {
    return (
        <>
            <Commonheader />
        <div class="container">
            <div class="Inner_pages col-lg-12 col-xs-12 col-sm-12" id="content">
            <h1 class="section-heading">Animal Details</h1>
                <div class="product_slider col-lg-12 col-xs-12 col-sm-12">
                    <div data-ride="carousel" class="carousel slide" id="myCarousel">
                        <div class="carousel-inner"> </div> </div> <div class="clearfix">
                        <div id="thumbcarousel" class="carousel slide" data-interval="true">
                            <div class="carousel-inner"> <div class="item active"> </div> </div>  </div> </div> </div>
                <div class="product_bgc col-lg-12 col-xs-12 col-sm-12">
                    <h2>Price Rs 220000/</h2>
                    <h3>HrdB9900288 Details</h3>
                    <div class="border4"></div>
                    <div class="col-lg-12 col-xs-12 col-sm-12">
                        <div class="product_ul col-lg-4 col-xs-12 col-sm-4">
                            <ul> <li><strong>Type</strong>: Bull</li>
                                <li><strong>Weight</strong>: 6 man meatkg</li>
                                <li><strong>Age</strong>: 02 Year 09 Months</li>
                                 </ul> </div>
                        <div class="product_ul col-lg-4 col-xs-12 col-sm-4">
                            <ul> <li><strong>City</strong>: Haroonabad</li>
                                <li><strong>Delivery Time</strong>: Next day</li>
                                <li><strong>Teeth</strong>: 2</li> </ul> </div>
                        <div class="product_ul col-lg-4 col-xs-12 col-sm-4">
                            <ul> <li><strong>Added On</strong>: 14, June 2022</li>
                                <li><strong>Vendor</strong>: Abdul Rauf </li>
                                <li><strong>Color</strong>: Black</li>
                                </ul> </div>
                        <div class="border4 col-lg-12"></div> </div>
                    <div class="col-lg-12 col-xs-12 col-sm-12">
                        <h3> Description</h3> <p style={{padding:"12px"}}>Qurbani animals available in stock now.</p> </div>
                    <div class="border4 col-lg-12"></div>
                    <div class="vendor_option col-lg-12 col-xs-12 col-sm-12">
                        <h3>Vendor Contact Options</h3>
                        <ul><li> <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact"> <span>1) Contact Us </span> </NavLink> </li>
                            <li> <span>2) Seller Contact (+92355555555)</span></li>
                             <li><span> 3) <a href="https://api.whatsapp.com/send?phone=923415552862&amp;text=Hi" target="_blank">Whatsapp</a></span></li> </ul>
                    </div> <div class="border4 col-lg-12"></div> </div> </div></div>
        </>
    )
}

export default Animaldetails
import React, { useEffect, useState } from "react";
import Commonheader from "./Commonheader";
import { NavLink } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";
function Animaldetails() {
  const { id } = useParams();
  const URL = "http://localhost:5000";
  const [posts, setPosts] = useState({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [price, setPrice] = useState();
  const [bid, setBid] = useState([]);
  var getAllNotes = async () => {
    // API Call
    const response = await fetch(
      `http://localhost:5000/api/getSinglePost/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "auth-token":"Token here",
        },
      }
    );
    // console.log("The response=",response);
    const json = await response.json();

    console.log("The json data=", json.data.bids);
    setName(json.sellarName);
    setPhone(json.Phoneno);
    setPosts(json.data);
    setBid(json.data.bids);
  };
  useEffect(() => {
    getAllNotes();
    console.log("The Data:", posts);
  }, []);
  const addBid = async () => {
    console.log(price);
    const response = await axios.post(
      `http://localhost:5000/api/makeBid/${id}`,
      {
        price,
        buyerId: localStorage.getItem("userId"),
      }
    );
    const data2 = await response.data;
    getAllNotes();
    setPrice("");
    console.log(data2);
  };
  return (
    <>
      <Commonheader />
      <div class="container">
        <div class="Inner_pages col-lg-12 col-xs-12 col-sm-12" id="content">
          <h1 class="section-heading">Animal Details</h1>
          <div class="product_slider col-lg-12 col-xs-12 col-sm-12">
            <div data-ride="carousel" class="carousel slide" id="myCarousel">
              <div class="carousel-inner"> </div>{" "}
            </div>{" "}
            <div class="clearfix">
              <div
                id="thumbcarousel"
                class="carousel slide"
                data-interval="true"
              >
                <div class="carousel-inner">
                  {" "}
                  <div class="item active"> </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div class="product_bgc col-lg-12 col-xs-12 col-sm-12">
            <h2>{posts.name}</h2>
            <h3>Animal Details</h3>
            <div class="border4"></div>
            <div class="col-lg-12 col-xs-12 col-sm-12">
              <div class="product_ul col-lg-4 col-xs-12 col-sm-4">
                <ul>
                  {" "}
                  <li>
                    <strong>Type</strong>: {posts.type}
                  </li>
                  <li>
                    <strong>Weight</strong>: {posts.weight}
                  </li>
                  <li>
                    <strong>Age</strong>: {posts.age}
                  </li>
                </ul>{" "}
              </div>
              <div class="product_ul col-lg-4 col-xs-12 col-sm-4">
                <ul>
                  {" "}
                  <li>
                    <strong>City</strong>: {posts.city}
                  </li>
                  {/* <li><strong>Delivery Time</strong>: Next day</li> */}
                  <li>
                    <strong>Teeth</strong>: {posts.teeth}
                  </li>{" "}
                </ul>{" "}
              </div>
              <div class="product_ul col-lg-4 col-xs-12 col-sm-4">
                <ul>
                  {/* <li><strong>Added On</strong>: 14, June 2022</li> */}
                  <li>
                    <strong>Vendor</strong>: {name}{" "}
                  </li>
                  <li>
                    <strong>Color</strong>: Black
                  </li>
                </ul>{" "}
              </div>
              <div class="border4 col-lg-12"></div>
            </div>
            <div class="col-lg-12 col-xs-12 col-sm-12">
              <h3> Description</h3>{" "}
              <p style={{ padding: "12px" }}>{posts.description}</p>{" "}
            </div>
            <div class="border4 col-lg-12"></div>
            <div class="vendor_option col-lg-12 col-xs-12 col-sm-12">
              <h3>Vendor Contact Options</h3>
              <ul>
                <li>
                  {" "}
                  <NavLink
                    activeClassName="menu_active"
                    exact
                    className="nav-link"
                    to="/contact"
                  >
                    {" "}
                    <span>1) Contact Us </span>{" "}
                  </NavLink>{" "}
                </li>
                <li>
                  {" "}
                  <span>2) Seller Contact {phone}</span>
                </li>
                <li>
                  <span>
                    {" "}
                    3){" "}
                    <a
                      href="https://api.whatsapp.com/send?phone=923415552862&amp;text=Hi"
                      target="_blank"
                    >
                      Whatsapp
                    </a>
                  </span>
                </li>{" "}
              </ul>
            </div>{" "}
            <div class="border4 col-lg-12"></div>{" "}
          </div>{" "}
        </div>
        <h1 className="section-heading">Recent Bids So Far </h1>
        {bid &&
          bid.map((element, index) => (
            <div
              className="bidcontaner w-25"
              style={{ border: "1px solid black", marginLeft: "37%", textAlign: "center" }}
              key={index}
            >  
              <div className="bidprice mx-2" style={{ textAlign: "center", position: "relative", alignContent:"center" }}><h4>Bid Price: <span class="badge bg-primary">{element.price}</span></h4></div>
              {/* <div className="bidprice mx-2">price = {element.price}</div> */}
              {/* <div className="buyername">buyerName = {element.bidderName}</div> */}
              <div className="bidprice mx-2"><h4>Bidder Name: <span class="badge bg-secondary">{element.bidderName}</span></h4></div>
            </div>
          ))}

        <div className="addbidContainer" style={{marginLeft:"40%", marginTop: "25px"}}>
          <div className="input-group mb-3">
          <input style={{borderRadius:"7px"}}
           type="number"
           name="price"
           id=""
           placeholder="add your bid price"
           value={price}
           onChange={(e) => setPrice(e.target.value)}
          />
          <button className="add btn btn-outline-secondary" style={{borderRadius:"5px"}} onClick={addBid} >
            add
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Animaldetails;

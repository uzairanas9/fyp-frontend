import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Updatepost = ({ad, adId}) => {
    adId = "6394ce7163b79f8d0dc5ff4b"
    // const [ad, setAd] = useState({});
    const {id}=useParams();
    const navigate = useNavigate();
    
    console.log("IDDDDDDDDD==",id);
    const response =  fetch(
        `http://localhost:5000/api/getSinglePost/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "auth-token":"Token here",
          },
        }
      );

      const json = response.json;
    //    setAd (json);
    ad = {json};
   
  const [formData, setFormData] = useState({
   
    name: ad.name,
    category: ad.category,
    city: ad.city,
    color: ad.color,
    age: ad.age,
    weight: ad.weight,
    teeth: ad.teeth,
    description: ad.description,
    price: ad.price
  });

  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    // make API call to update ad with formData
    axios.patch(`http://localhost:5000/api/updatePost/${id}`, formData)
    .then(res => {
        const response=res.data.data;
        if(response){
          navigate("/manageanimal");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div class="dashboard_right col-lg-8 col-xs-12 col-sm-8" style={{marginLeft:"40px"}}>
    <form onSubmit={handleSubmit}>
          {" "}
          <div
            class="signup col-lg-8 col-xs-12 col-sm-5"
            style={{ marginLeft: "0px", marginTop: "0px", width: "auto" }}
          >
            <p style={{ marginTop: "12px" }}></p>{" "}
              <div class="form-group col-lg-5 col-xs-11 col-sm-5">
                {" "}
                <label>Name / نام</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Name"
                  name="name"
                  defaultValue=""
                  required="required"
                  value={formData.name}
                  onChange={handleChange}
                />{" "}
              </div>
              <div class="form-group col-lg-5 col-xs-11 col-sm-5">
                <label>Category / قسم</label>
                <input
                  type="text"
                  class="form-control"
                  id="category"
                  placeholder="category"
                  name="type"
                  defaultValue=""
                  required="required"
                  value={formData.category}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-lg-5 col-xs-11 col-sm-5">
                <label>City / شہر</label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  placeholder="city"
                  name="city"
                  defaultValue=""
                  required="required"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>{" "}
              <div class="form-group col-lg-5 col-xs-11 col-sm-5">
                {" "}
                <label>Price / قیمت</label>
                <input
                  type="text"
                  class="form-control"
                  id="price"
                  placeholder="price"
                  name="price"
                  defaultValue=""
                  required="required"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-lg-5 col-xs-11 col-sm-5">
                {" "}
                <label>Teeth</label>
                <input
                  type="text"
                  class="form-control"
                  id="teeth"
                  placeholder="Teeth"
                  name="teeth"
                  defaultValue=""
                  required="required"
                  value={formData.teeth}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-lg-5 col-xs-11 col-sm-5">
                {" "}
                <label>Age / عمر</label>
                <input
                  type="text"
                  class="form-control"
                  id="age"
                  placeholder="Age"
                  name="age"
                  defaultValue=""
                  required="required"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-lg-5 col-xs-11 col-sm-5">
                {" "}
                <label>Color / رنگ</label>
                <input
                  type="text"
                  class="form-control"
                  id="color"
                  placeholder="Color"
                  name="color"
                  defaultValue=""
                  required="required"
                  value={formData.color}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-lg-5 col-xs-11 col-sm-5">
                {" "}
                <label>Weight / وزن</label>
                <input
                  type="text"
                  class="form-control"
                  id="weight"
                  placeholder="Weight"
                  name="weight"
                  defaultValue=""
                  required="required"
                  value={formData.weight}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-lg-11 col-xs-11 col-sm-5">
                <label>Detail / تفصیل</label>{" "}
                <textarea
                  class="form-control"
                  id="description"
                  placeholder="Details"
                  name="description"
                  required="required"
                  value={formData.description}
                  onChange={handleChange}
                >
                  {" "}
                </textarea>{" "}
              </div>
              <button type="submit" style={{marginTop:"20px", marginBottom:"20px", marginLeft:"20px"}}>Update Ad</button>
          </div>
       
     
    </form>
    </div>
  );
};

export default Updatepost;

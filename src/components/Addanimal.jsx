import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { NavLink, Navigate } from "react-router-dom";
import Myaccount from "./Myaccount";
function Addanimal() {
  const [input, setInput] = useState({
    name: "",
    type: "",
    city: "",
    price: "",
    age: "",
    color: "",
    weight: "",
    teeth: "",
    description: "",
    sellerId: localStorage.getItem("lohinUserId"),
  });

  const [photo, setPhoto] = useState();
  const inputPhoto = (e) => {
    console.log(e.target.files[0]);
    setPhoto(e.target.files[0]);
  };

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    console.log("The Input Data=", input);
    
    // console.log("The Photo Data=", Photo);
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/api/addPost", {
      headers: {
        "content-type": "multipart/formdata",
        
      },
      ...input,
      photo,
      
     
    });
    const data1 = await response.data;
    // if(data1){
      
    // }
    console.log(data1);
  };
  return (
    <>
      <div className="container">
        <Myaccount />
        <div class="dashboard_right col-lg-8 col-xs-12 col-sm-8">
          {" "}
          <h3>Add New Animal</h3>
          <div
            class="signup col-lg-8 col-xs-12 col-sm-5"
            style={{ marginLeft: "0px", marginTop: "0px", width: "auto" }}
          >
            <p style={{ marginTop: "12px" }}></p>{" "}
            <form enctype="multipart/form-data">
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
                  value={input.name}
                  onChange={inputHandler}
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
                  value={input.category}
                  onChange={inputHandler}
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
                  value={input.city}
                  onChange={inputHandler}
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
                  value={input.price}
                  onChange={inputHandler}
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
                  value={input.teeth}
                  onChange={inputHandler}
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
                  value={input.age}
                  onChange={inputHandler}
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
                  value={input.color}
                  onChange={inputHandler}
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
                  value={input.weight}
                  onChange={inputHandler}
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
                  value={input.description}
                  onChange={inputHandler}
                >
                  {" "}
                </textarea>{" "}
              </div>
              {/* <div class="form-group col-lg-11 col-xs-11 col-sm-5"> */}
                {/* <label>
                  Pictures / تصویریں
                  <strong> (Press Ctrl to select multiple files)</strong> / (
                  Ctrl متعدد فائلوں کو منتخب کرنے کیلئے دبائیں)
                </label> */}
                {/* <input style={{marginTop:"20px", marginRight:"10px"}} type="file" name="photo" onChange={inputPhoto} />{" "} */}
                <Form.Group className="mb-3" controlId="formBasicFile">
                  <Form.Label>Add photo</Form.Label>
                  <Form.Control
                    type="file"
                    name="Photo"
                    onChange={inputPhoto}
                  />
                </Form.Group>
              {/* </div> */}
              <div
                class="status form-group col-lg-12 col-xs-11 col-sm-5"
                style={{ display: "none", margin: "2px", padding: "2px" }}
              >
                <div>Processing</div>
                <div>
                  <img src="https://www.bakramandi.com.pk/btPublic/images/spinner.gif" />
                </div>{" "}
              </div>{" "}
              <div
                class="signup_btm col-lg-12 col-xs-11 col-sm-5"
                style={{ marginTop: "15px" }}
              >
                {" "}
                <input
                  type="submit"
                  onClick={onSubmit}
                  value="Add"
                  name="btnAddbakras"
                />{" "}
              </div>
            </form>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Addanimal;

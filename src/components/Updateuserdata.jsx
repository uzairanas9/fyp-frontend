// React component
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpdateUser = ({ user, onUpdate, userId }) => {

    // const userId= localStorage.getItem("lohinUserId");
    const [isSubmitted, setIsSubmitted] = useState(false);
    // const getNotes = async () => {
        // API Call
        const response = fetch(`http://localhost:5000/api/getSingleUser/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json =  response.json;
        // console.log("The json data=", json.data);
        user = {json};
    //   };

    //   getNotes;
  const [formData, setFormData] = useState({
    name: user.name,
    phone: user.phoneno,
  });

 

  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    if (isSubmitted) {
      onUpdate();
    }
  }, [isSubmitted, onUpdate]);
//   useEffect()

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.patch(`http://localhost:5000/api/updateUser/${userId}`, formData)
      .then(res => {
        console.log(res.data);
        
        setFormData({
            name: "",
            phone: "",
          });
           setIsSubmitted(true);
        setIsUpdated(true);
        onUpdate(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
//   if (isSubmitted) {
//     <div>Data Updated Successfully</div>
//   }
  return (
    <>
    
    <form onSubmit={handleSubmit}>
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
      {/* <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label> */}
      {/* <br /> */}
      {/* <label>
        Phone:
        <input
          type="text"
          name="phoneno"
          value={formData.phone}
          onChange={handleChange}
        />
      </label> */}
      <div class="form-group col-lg-5 col-xs-11 col-sm-5">
                {" "}
                <label>Phone Number</label>
                <input
                  type="text"
                  class="form-control"
                  id="phoneno"
                  placeholder="Phone Number"
                  name="phoneno"
                  value={formData.phone}
                  onChange={handleChange}
                />{" "}
              </div>
      <br />
      <div class="signup_btm col-lg-12 col-xs-11 col-sm-5"
                style={{ marginTop: "15px" }}>
      <input 
                  type="submit"
                  value="Update Data"
                />
                </div>
    </form>
    </>
  );
};


export default UpdateUser;

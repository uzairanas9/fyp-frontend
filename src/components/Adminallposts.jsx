import MarkAsSoldButton from "./Markassold";
import Updatepost from "./Updatepost";
import axios from "axios";
import {NavLink, useNavigate } from "react-router-dom";
import  { useEffect, useState } from "react";
const AnimalList=()=>{
  const navigate = useNavigate();
  const[animals,setAnimals]=useState([]);
  useEffect( () => {
    const fetchData=async()=>{
      const response = await axios.get(`http://localhost:5000/api/getAllPost`,);
      const data1 =  response.data;
      console.log("I am data 1",data1.data);
      setAnimals(data1.data)
    }
    fetchData();
      // soldanimal();
    },[]);
return(

    <>
    <h1 className="section-heading" style={{marginTop:"20px"}}>All Ads</h1>
    <div>
    <NavLink to='/Adminuserdata' >  <button className="signup_btm1" style={{ float:"left", marginLeft:"60px", fontSize:"18px"}}> All Users</button> </NavLink>
    <NavLink to='/Getcontactform' >  <button className="signup_btm1" style={{float:"left",textalign:"center", marginBottom:"50px", marginLeft:"30px", fontSize:"18px"}}> Contact Form Data</button> </NavLink>
    </div>
    <div class="table-responsive "
      style={{ float: "left",  marginTop:"80px" }}>
    <table class="table">
    <thead>
                <tr
                  style={{
                    backgroundColor: "#11b2a5",
                    borderBottom: "3px solid #11b2a5",
                  }}
                >
                  <th
                    style={{
                      paddingLeft: "25px",
                      border: "2px solid #11b2a5",
                      fontSize: "15px",
                      fontFamily: "Karla-Bold",
                      color: "white",
                    }}
                  >
                    S.no
                  </th>
                  <th
                    style={{
                      paddingLeft: "20px",
                      border: "2px solid #11b2a5",
                      fontSize: "15px",
                      fontFamily: "Karla-Bold",
                      color: "white",
                    }}
                  >
                    Animal Name
                  </th>
                  <th
                    style={{
                      paddingLeft: "22px",
                      border: "2px solid #11b2a5",
                      fontSize: "15px",
                      fontFamily: "Karla-Bold",
                      color: "white",
                    }}
                  >
                    Age
                  </th>
                  <th
                    style={{
                      paddingLeft: "22px",
                      border: "2px solid #11b2a5",
                      fontSize: "15px",
                      fontFamily: "Karla-Bold",
                      color: "white",
                    }}
                  >
                    Type
                  </th>
                  <th
                    style={{
                      paddingLeft: "20px",
                      border: "2px solid #11b2a5",
                      fontSize: "15px",
                      fontFamily: "Karla-Bold",
                      color: "white",
                    }}
                  >
                    Weight
                  </th>
                  <th
                    style={{
                      paddingLeft: "20px",
                      border: "2px solid #11b2a5",
                      fontSize: "15px",
                      fontFamily: "Karla-Bold",
                      color: "white",
                    }}
                  >
                    City
                  </th>
                  <th
                    style={{
                      paddingLeft: "20px",
                      border: "2px solid #11b2a5",
                      fontSize: "15px",
                      fontFamily: "Karla-Bold",
                      color: "white",
                    }}
                  >
                    Sold
                  </th>
                </tr>{" "}
              </thead>
    <tbody>
        {animals.map((animal, index)=>
        (

        
      <tr
      >
        <th
          style={{
            width:"20px",
            paddingLeft: "25px",
            border: "2px solid #11b2a5",
            fontSize: "15px",
            fontFamily: "Karla-Bold"
          }}
        >
          {++index}
        </th>
        <th
          style={{
            width:"260px",
            paddingLeft: "20px",
            border: "2px solid #11b2a5",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          {animal.name}
        </th>
        <th
          style={{
            width:"160px",
            paddingLeft: "22px",
            border: "2px solid #11b2a5",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          {animal.age}
        </th>
        <th
          style={{
            width:"125px",
            paddingLeft: "22px",
            border: "2px solid #11b2a5",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          {animal.type}
        </th>
        <th
          style={{
            width:"60px",
            paddingLeft: "20px",
            border: "2px solid #11b2a5",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          {animal.weight}
        </th>
        <th
          style={{
            width:"80px",
            paddingLeft: "20px",
            border: "2px solid #11b2a5",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          {animal.city}
        </th>
        <th
          style={{
            width:"30px",
            paddingLeft: "20px",
            border: "2px solid #11b2a5",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          No
        </th>
        {/* <th
          style={{
            paddingleft: "20px",
            border: "2px solid #11b2a5",
            fontSize: "15px",
            fontFamily: "Karla-Bold",
            color: "black",
          }}
        >
          <MarkAsSoldButton postId={id} />
          <NavLink to={`/updatepost/${id}`}>Update Post</NavLink>
        </th> */}
      </tr>
      ))}
    </tbody>
  </table>
  </div>
  </>
)
}

export default AnimalList;
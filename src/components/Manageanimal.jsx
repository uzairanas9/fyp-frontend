import React from "react";
import axios from "axios";
import Myaccount from "./Myaccount";
import  { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import MarkAsSoldButton from "./Markassold";
import Updatepost from "./Updatepost";
import Animaldetails from "./Animaldetails";
import AnimalList from "./AnimalList";
// import Manageanimal from 'Manageanimal';

function Manageanimal() {
  const id = "6392281ec05db3df839c618b";
  // const [data, setData] = useState([]);
  // const [sold, setSold]= useState("No")
  const[animals,setAnimals]=useState([]);
  useEffect( () => {
    const fetchData=async()=>{
      const response = await axios.get(`http://localhost:5000/api/getUserPost/${id}`);
      const data1 =  response.data;
      console.log("I am data 1",data1.data);
      setAnimals(data1.data)
    }
    fetchData();
      // soldanimal();
    },[id]);

  console.log("local storage", id)
  return (
    <>
      <div className="container">
        <Myaccount />
        <div class="dashboard_right col-lg-8 col-xs-12 col-sm-8">
          {" "}
          <h3>Manage Animals</h3>
          <span
            class="col-lg-12 col-xs-12 col-sm-12"
            style={{
              marginBottom: "15px",
              float: "right",
              textAlign: "right",
              fontFamily: "Karla-Bold",
              fontSize: "19px",
            }}
          >
            <NavLink
              activeClassName="menu_active"
              aria-current="page"
              to="/addanimal"
            >
              Add New Animal
            </NavLink>{" "}
          </span>
          <div
            class="table-responsive col-lg-12 col-xs-12 col-sm-12"
            style={{ float: "left" }}
          >
            {/* {data.map((element,index)=>{()})} */}

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
                      borderRight: "1px solid Black",
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
                      borderRight: "1px solid Black",
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
                      borderRight: "1px solid Black",
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
                      borderRight: "1px solid Black",
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
                      borderRight: "1px solid Black",
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
                      borderRight: "1px solid Black",
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
                      borderRight: "1px solid Black",
                      fontSize: "15px",
                      fontFamily: "Karla-Bold",
                      color: "white",
                    }}
                  >
                    Sold
                  </th>
                  <th
                    style={{
                      paddingleft: "20px",
                      borderRight: "1px solid Black",
                      fontSize: "15px",
                      fontFamily: "Karla-Bold",
                      color: "white",
                    }}
                  ></th>
                </tr>{" "}
              </thead>
              <tbody
                style={{
                  backgroundColor: "white",
                  borderTop: "2px solid Black",
                }}
              >
              </tbody>
            </table>
            {animals.map((animal,index)=>(
              <AnimalList key={index} srNo={index} id={animal._id} name={animal.name} type={animal.type} weight={animal.weight} age={animal.age} city={animal.city} />

            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Manageanimal;


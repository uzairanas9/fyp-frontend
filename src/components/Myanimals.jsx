import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Myaccount from "./Myaccount";

function Myanimals() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `http://localhost:5000/api/getUserPost/${localStorage.getItem(
          "userId"
        )}`
      );
      const data1 = await response.data;
      setData(data1.data);
      console.log("I am data 1",data1);
    })();
  }, []);
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
                      borderRight: "1px solid #11b2a5",
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
                      borderRight: "1px solid #11b2a5",
                      fontSize: "15px",
                      fontFamily: "Karla-Bold",
                      color: "white",
                    }}
                  >
                    Animal Code
                  </th>
                  <th
                    style={{
                      paddingLeft: "22px",
                      borderRight: "1px solid #11b2a5",
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
                      borderRight: "1px solid #11b2a5",
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
                      borderRight: "1px solid #11b2a5",
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
                      borderRight: "1px solid #11b2a5",
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
                      borderRight: "1px solid #11b2a5",
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
                      borderRight: "1px solid #11b2a5",
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
                  borderTop: "2px solid #11b2a5",
                }}
              >
                {data.map((e) => (
                  <tr>
                    <td style={{ paddingLeft: "25px" }}>1</td>
                    <td
                      style={{
                        paddingLeft: "20px",
                        fontSize: "16px",
                        color: "#363636",
                        fontFamily: "Karla-Regular",
                        paddingTop: "14px",
                      }}
                    >
                      {e._id}
                    </td>
                    <td
                      style={{
                        paddingLeft: "22px",
                        fontSize: "16px",
                        color: "#363636",
                        fontFamily: "Karla-Regular",
                        paddingTop: "14px",
                      }}
                    >
                      {" "}
                      {e.age}
                    </td>
                    <td
                      style={{
                        paddingLeft: "23px",
                        fontSize: "16px",
                        color: "#363636",
                        fontFamily: "Karla-Regular",
                        paddingTop: "14px",
                      }}
                    >
                      {e.name}
                    </td>
                    <td
                      style={{
                        paddingLeft: "20px",
                        fontSize: "16px",
                        color: "#363636",
                        fontFamily: "Karla-Regular",
                        paddingTop: "14px",
                      }}
                    >
                      {e.weight}
                    </td>
                    <td
                      style={{
                        paddingLeft: "20px",
                        fontSize: "16px",
                        color: "#363636",
                        fontFamily: "Karla-Regular",
                        paddingTop: "14px",
                      }}
                    >
                      {e.city}
                    </td>
                    <td
                      style={{
                        paddingLeft: "20px",
                        fontSize: "16px",
                        color: "#363636",
                        fontFamily: "Karla-Regular",
                        paddingTop: "14px",
                      }}
                    >
                      <span style={{ color: "green" }}>NO</span>
                    </td>
                    <td
                      style={{
                        fontSize: "16px",
                        color: "#363636",
                        fontFamily: "Karla-Regular",
                        paddingTop: "14px",
                      }}
                    >
                      <a href="">Mark As Sold</a> /{" "}
                      <a href="" onclick="">
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Myanimals;

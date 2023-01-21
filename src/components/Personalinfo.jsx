import React, { useEffect, useState } from "react";
import Myaccount from "./Myaccount";
const URL = "http://localhost:5000";
function Personalinfo() {
  const [userId, setUserId] = useState("");
  const [userInfo, setUserInfo] = useState("");
 

  console.log("The User Get from Local is", userId);
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${URL}/api/getSingleUser/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log("The json data=", json.data);
    setUserInfo(json.data);
  };

  useEffect(() => {
    const Id = localStorage.getItem("lohinUserId");
    console.log("ID is here",Id)
    setUserId(Id);
    getNotes();
  }, [userId]);

  console.log("The Data in the State", userInfo);
  return (
    <>
      <div className="container">
        <Myaccount />
        <div class="dashboard_right col-lg-8 col-xs-12 col-sm-8">
          {" "}
          <h3>Personal Info</h3>
          <div class="info_box col-lg-8 col-xs-12 col-sm-6">
            <div class="info_txt">
              {" "}
              <ul>
                {" "}
                <li>{userInfo.name}</li>
                <li>{userInfo.email}</li>
                <li>{userInfo.phoneno}</li>
                <li></li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Personalinfo;

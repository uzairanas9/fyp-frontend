import axios from "axios";
import React, { useEffect, useState } from "react";
import Myaccount from "./Myaccount";

function Dashboard() {
  const [total, setTotal] = useState(0);
  useEffect(async () => {
    const response = await axios.get(
      `http://localhost:5000/api/getUserPost/${localStorage.getItem("userId")}`
    );
    const data1 = await response.data;
    setTotal(data1.data.length);
    console.log(data1);
  }, []);
  return (
    <>
      <div className="container">
        {/* <div class="Inner_pages col-lg-12 col-xs-12 col-sm-12"> */}
        <Myaccount />
        <div class="dashboard_right col-lg-8 col-xs-12 col-sm-8">
          <h3>
            Welcome <strong>Uzair Anas</strong>
          </h3>
          <div class="dashboard_box col-lg-3 col-xs-12 col-sm-12">
            <h4>Total Animals</h4> <p>{total}</p>{" "}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Dashboard;

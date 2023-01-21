import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import postContext from "../context/postContext";
import Animallisting from "./Animallisting";
import Commonheader from "./Commonheader";
import Filter from "./Filter";
function Buyanimals() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      alert("please login first");
      navigate("/login");
    }
  }, []);
  // const context = useContext(postContext);
  // const {getAllNotes} = context;
  const URL = "http://localhost:5000";
  const [posts, setPosts] = useState([]);
  const [filterByCategory, setFilterByCategory] = useState("all");
  const [filterByCity, setFilterByCity] = useState(null);
  useEffect(() => {
    const data = getAllNotes();
    // getFilterData();
    console.log("The Posts Data:", data.data);
  }, [filterByCategory, filterByCity]);

  const filterCategory = (e) => {
    setFilterByCategory(e.target.value);
    console.log("The Filter Data:", e.target.value);
  };

  const filterDATA = (e) => {
    setFilterByCity(e.target.value);
    console.log(e.target.value);
  };
  const getAllNotes = async () => {
    // API Call
    const response = await fetch(
      `${URL}/api/getFilterPost/?type=${filterByCategory}&city=${filterByCity}`,
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
    console.log("The json data=", json.data);
    setPosts(json.data);
    return json;
  };
  // const getFilterData = async () => {
  //   const response = await fetch(
  //     `http://localhost:5000/api/getFilterPost/?city=${filterByCity}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         // "auth-token":"Token here",
  //       },
  //     }
  //   );
  //   // console.log("The response=",response);
  //   const json = await response.json();
  //   console.log("The json data=", json);
  //   setPosts(json.data);
  // };
  return (
    <>
      <Commonheader title="Buy Animals"/>
      {/* <Filter /> */}
      <div className="my-5">
        {/* <h1 class="section-heading">Animal Listings</h1> */}
      </div>
      <div class="sort_filters col-lg-9 col-xs-12 col-sm-4" align="center">
        {" "}
        <h2 align="center">Sort by Filters</h2>
        <form action="" method="post" />{" "}
        <div class="dropdown">
          {" "}
          <select value={filterByCategory} onChange={filterCategory}>
            <option value="">Category</option>
            <option value="all">All</option>
            <option value="bakra">Bakra</option>
            <option value="bakri">Bakri</option>
            <option value="buffalo">Buffalo</option>
            <option value="bull">Bull</option>
            {/* <option value="7">Calf</option>
            <option value="6">Cow</option>
            <option value="9">Dumba</option> */}
          </select>{" "}
        </div>
        <div class="dropdown">
          <select value={filterByCity} onChange={filterDATA}>
            <option value="" disabled selected>
              Select The City
            </option>
            <option value="islamabad">Islamabad</option>
            <option value="lahore">Lahore</option>
            <option value="mianwali">Mianwali</option>
            <option value="mansehra">Mansehra</option>
            <option value="karachi">Karachi</option>
            <option value="abbottabad">Abbottabad</option>
            <option value="attock">Attock</option>
          </select>
        </div>
        <br></br>
      </div>
      {posts.map((post) => (
        <Animallisting
          name={post.name}
          price={post.price}
          type={post.type}
          weight={post.weight}
          age={post.age}
          teeth={post.teeth}
          city={post.city}
          id={post._id}
        />
      ))}
      {/* <Animallisting />
      <Animallisting /> */}
    </>
  );
}

export default Buyanimals;

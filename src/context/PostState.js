import { useState } from "react";
import PostContext from "./postContext";

const PostState = () => {
  const URL = "http://localhost:5000";
  const [posts, setPosts] = useState([]);
  // Get all Notes
  const getAllNotes = async () => {
    // API Call
    const response = await fetch(`${URL}/api/getAllPost`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "auth-token":"Token here",
      },
    });
    return response.json();
    // const json = await response.json();
    // setPosts(json);
  };
  return (
    <PostContext.Provider value={getAllNotes}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;

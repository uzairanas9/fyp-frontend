import React, { useState } from "react";
import axios from "axios";

const ChangePassword = () => {
    const userId= localStorage.getItem("lohinUserId");
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate form data
    if (formData.newPassword !== formData.confirmPassword) {
        alert("New password and confirm password should be same")
        return
    }
    // Send a PUT request to the server to update the password
    try {
      const response = await axios.put(`http://localhost:5000/api/change-password/${userId}`, formData);
      console.log(response);
      // Show a success message
    } catch (error) {
      console.error(error);
      // Show an error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Current Password:
        <input
          type="password"
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        New Password:
        <input
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Change Password</button>
    </form>
  );
};

export default ChangePassword;

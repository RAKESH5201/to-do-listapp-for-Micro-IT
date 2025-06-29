import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { name, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);
      console.log("Registered:", res.data);
      alert("Registration successful ✅ Please login.");
      navigate("/login"); // redirect to login
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div>
      <h2>Register Form</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={name}
          onChange={onChange}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Choose Password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

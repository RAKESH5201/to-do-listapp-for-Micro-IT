// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Auth = ({ mode, setToken }) => {
//   const isRegister = mode === "register";
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const { name, email, password } = formData;

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const endpoint = isRegister
//         ? "http://localhost:5000/api/auth/register"
//         : "http://localhost:5000/api/auth/login";

//       const res = await axios.post(endpoint, formData);
//       if (res.data.token) {
//         localStorage.setItem("token", res.data.token);
//         setToken(res.data.token);
//         alert(`${isRegister ? "Registered" : "Logged in"} successfully`);
//         navigate("/");
//       }
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       alert(err.response?.data?.msg || "Something went wrong");
//     }
//   };

//   return (
//     <div className="relative flex min-h-screen bg-black font-sans">
//       {/* LEFT SIDE */}
//       <div className="hidden md:flex w-1/2 bg-black items-center justify-center p-8 relative overflow-hidden">
//         <div className="z-10 text-white text-center">
//           <h2 className="text-4xl font-extrabold mb-4">🚀 My To-Do App</h2>
//           <p className="text-lg">Manage your tasks like a pro</p>
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/619/619034.png"
//             alt="To-Do"
//             className="w-48 mx-auto mt-6 animate-bounce"
//           />
//         </div>
//         {/* DRAMATIC S-CURVE */}
//         <svg
//           className="absolute right-0 h-full w-24 text-black"
//           viewBox="0 0 100 100"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0,0 C40,30 60,70 100,100 L100,0 Z"
//             fill="white"
//           />
//         </svg>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 bg-white">
//         <div className="rounded-xl shadow p-8 w-full max-w-md">
//           <h2 className="text-2xl font-bold mb-4 text-center text-black">
//             {isRegister ? "Register" : "Login"}
//           </h2>
//           <form onSubmit={onSubmit} className="space-y-4">
//             {isRegister && (
//               <input
//                 name="name"
//                 value={name}
//                 onChange={onChange}
//                 placeholder="Name"
//                 required
//                 className="w-full p-2 border rounded"
//               />
//             )}
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={onChange}
//               placeholder="Email"
//               required
//               className="w-full p-2 border rounded"
//             />
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={onChange}
//               placeholder="Password"
//               required
//               className="w-full p-2 border rounded"
//             />
//             <button
//               type="submit"
//               className="w-full bg-black text-white rounded py-2 hover:bg-gray-800"
//             >
//               {isRegister ? "Register" : "Login"}
//             </button>
//           </form>
//           <button
//             onClick={() => navigate(isRegister ? "/login" : "/register")}
//             className="w-full mt-4 text-black hover:underline"
//           >
//             {isRegister
//               ? "Already have an account? Login"
//               : "Don't have an account? Register"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Auth = ({ mode, setToken }) => {
  const isRegister = mode === "register";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isRegister
        ? "http://localhost:5000/api/auth/register"
        : "http://localhost:5000/api/auth/login";

      const res = await axios.post(endpoint, formData);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        alert(`${isRegister ? "Registered" : "Logged in"} successfully`);
        navigate("/dashboard");  // better UX
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.msg) {
        alert(err.response.data.msg);
      } else {
        alert("Server error, please try again later.");
      }
    }
  };

  return (
    <div className="relative flex min-h-screen bg-black font-sans">
      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 bg-black items-center justify-center p-8 relative overflow-hidden">
        <div className="z-10 text-white text-center">
          <h2 className="text-4xl font-extrabold mb-4">🚀 My To-Do App</h2>
          <p className="text-lg">Manage your tasks like a pro</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/619/619034.png"
            alt="To-Do"
            className="w-48 mx-auto mt-6 animate-bounce"
          />
        </div>
        {/* DRAMATIC S-CURVE */}
        <svg
          className="absolute right-0 h-full w-24 text-black"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C40,30 60,70 100,100 L100,0 Z" fill="white" />
        </svg>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 bg-white">
        <div className="rounded-xl shadow p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-black">
            {isRegister ? "Register" : "Login"}
          </h2>
          <form onSubmit={onSubmit} className="space-y-4">
            {isRegister && (
              <input
                autoFocus
                name="name"
                value={name}
                onChange={onChange}
                placeholder="Name"
                required
                className="w-full p-2 border rounded"
              />
            )}
            <input
              autoFocus={!isRegister}
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email"
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Password"
              required
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-black text-white rounded py-2 hover:bg-gray-800"
            >
              {isRegister ? "Register" : "Login"}
            </button>
          </form>
          <button
            onClick={() => navigate(isRegister ? "/login" : "/register")}
            className="w-full mt-4 text-black hover:underline"
          >
            {isRegister
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;

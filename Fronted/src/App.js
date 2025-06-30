// // src/App.js
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Auth from "./components/Auth";
// import Todo from "./components/Todo";
// import Dashboard from "./components/Dashboard";
// import Activity from "./components/Activity";
// import { useState } from "react";

// function App() {
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [tasks, setTasks] = useState([]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//   };

//   return (
//     <Router>
//       <Routes>
//         {!token ? (
//           <>
//             <Route
//               path="*"
//               element={<Auth setToken={setToken} mode="login" />}
//             />
//             <Route
//               path="/register"
//               element={<Auth setToken={setToken} mode="register" />}
//             />
//           </>
//         ) : (
//           <>
//             <Route
//               path="/"
//               element={<Todo tasks={tasks} setTasks={setTasks} onLogout={handleLogout} />}
//             />
//             <Route
//               path="/dashboard"
//               element={<Dashboard tasks={tasks} />}

//             />
//                <Route path="/activity" element={<Activity tasks={tasks} />} />
//           </>
//         )}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// 📁 src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth";
import Todo from "./components/Todo";
import Dashboard from "./components/Dashboard";
import Activity from "./components/Activity";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [tasks, setTasks] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <Router>
      {!token ? (
        <Routes>
          <Route path="*" element={<Auth setToken={setToken} mode="login" />} />
          <Route path="/register" element={<Auth setToken={setToken} mode="register" />} />
        </Routes>
      ) : (
        <div className="flex">
          <Sidebar onLogout={handleLogout} />
          <div className="flex-1 ml-64 p-4">
            <Routes>
              <Route path="/" element={<Todo tasks={tasks} setTasks={setTasks} />} />
              <Route path="/dashboard" element={<Dashboard tasks={tasks} />} />
              <Route path="/activity" element={<Activity tasks={tasks} />} />
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;

// // src/components/Sidebar.js
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { FaBars } from "react-icons/fa";

// const Sidebar = ({ onLogout }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="bg-black text-white w-full sm:w-60 p-4 sm:h-screen">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-xl font-bold flex items-center gap-2">
//           🚀 MyApp
//         </h1>
//         <button
//           onClick={() => setOpen(!open)}
//           className="sm:hidden p-2"
//         >
//           <FaBars />
//         </button>
//       </div>
//       <nav className={`${open ? "block" : "hidden"} sm:block`}>
//         <Link to="/" className="block py-2 hover:bg-gray-800 rounded">Home</Link>
//         <Link to="/dashboard" className="block py-2 hover:bg-gray-800 rounded">Dashboard</Link>
//         <button
//           onClick={onLogout}
//           className="block py-2 hover:bg-gray-800 rounded text-left w-full"
//         >
//           Logout
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
// 📁 src/components/Sidebar.js
import { Link } from "react-router-dom";

const Sidebar = ({ onLogout }) => {
  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4 flex flex-col space-y-4 fixed">
      <h2 className="text-2xl font-bold mb-6">📌 My Dashboard</h2>
      <Link
        to="/"
        className="hover:bg-gray-700 px-3 py-2 rounded transition"
      >
        📝 Todo
      </Link>
      <Link
        to="/dashboard"
        className="hover:bg-gray-700 px-3 py-2 rounded transition"
      >
        📊 Dashboard
      </Link>
      <Link
        to="/activity"
        className="hover:bg-gray-700 px-3 py-2 rounded transition"
      >
        📈 Activity
      </Link>
      <button
        onClick={onLogout}
        className="bg-red-600 hover:bg-red-700 mt-auto px-3 py-2 rounded"
      >
        🚪 Logout
      </button>
    </div>
  );
};

export default Sidebar;

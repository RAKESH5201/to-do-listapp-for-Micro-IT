// // // 📁 src/App.js
// // import React, { useState, useEffect, useRef } from 'react';
// // // import './App.css';
// // import { FaBell } from 'react-icons/fa';
// // import {useNavigate} from 'react-router-dom';

// // const builtInSounds = [
// //   { name: 'Classic Beep', path: '/sounds/beep.wav' },
// //   { name: 'Digital Ring', path: '/sounds/nigeria.wav' },
// //   { name: 'Soft Chime', path: '/sounds/chime.wav' }
// // ];

// // const Todo = () => {
// //   const navigate = useNavigate();
// //   const [task, setTask] = useState('');
// //   const [alarmTime, setAlarmTime] = useState('');
// //   const [alarmSound, setAlarmSound] = useState(null);
// //   const [tasks, setTasks] = useState([]);
// //   const [search, setSearch] = useState('');
// //   const [showTopAlarmOptions, setShowTopAlarmOptions] = useState(false);
// //   const bellRef = useRef(null);

// //   const handleSoundChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file && file.type.startsWith('audio/')) {
// //       setAlarmSound(URL.createObjectURL(file));
// //     }
// //   };

// //   const handleAdd = () => {
// //     if (!task || !alarmTime) return;
// //     setTasks([
// //       ...tasks,
// //       {
// //         id: Date.now(),
// //         text: task,
// //         completed: false,
// //         alarmTime,
// //         alarmSound
// //       }
// //     ]);
// //     setTask('');
// //     setAlarmTime('');
// //     setAlarmSound(null);
// //     setShowTopAlarmOptions(false);
// //   };

// //   useEffect(() => {
// //     // Request notification permission
// //     if (Notification.permission !== 'granted') {
// //       Notification.requestPermission();
// //     }
// //   }, []);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       const now = new Date();
// //       tasks.forEach((t) => {
// //         if (t.alarmTime && t.alarmSound) {
// //           const alarm = new Date(t.alarmTime);
// //           if (
// //             now.getHours() === alarm.getHours() &&
// //             now.getMinutes() === alarm.getMinutes() &&
// //             Math.abs(now.getTime() - alarm.getTime()) < 60000
// //           ) {
// //             new Audio(t.alarmSound).play();
// //             if (Notification.permission === 'granted') {
// //               new Notification('⏰ Reminder', {
// //                 body: t.text,
// //                 icon: '/favicon.ico'
// //               });
// //             } else {
// //               alert(`⏰ Reminder: ${t.text}`);
// //             }
// //           }
// //         }
// //       });
// //     }, 60000);
// //     return () => clearInterval(interval);
// //   }, [tasks]);

// //   const toggleComplete = (id) => {
// //     setTasks(
// //       tasks.map((t) =>
// //         t.id === id ? { ...t, completed: !t.completed } : t
// //       )
// //     );
// //   };

// //   const deleteTask = (id) => {
// //     setTasks(tasks.filter((t) => t.id !== id));
// //   };

// //   const editTask = (id, newText) => {
// //     setTasks(tasks.map((t) => (t.id === id ? { ...t, text: newText } : t)));
// //   };

// //   const filteredTasks = tasks.filter((t) =>
// //     t.text.toLowerCase().includes(search.toLowerCase())
// //   );
// //    const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/login");
// //   };

// //   return (
// //     <div className="min-h-screen bg-black p-6 flex flex-col items-center font-sans">
// //       {/* Dashboard Summary
// // <div className="bg-gray-800 rounded-xl shadow-md text-white w-full max-w-xl mb-6 p-4 flex justify-around items-center">
// //   <div className="text-center">
// //     <div className="text-xl font-bold">{tasks.length}</div>
// //     <div className="text-sm">Total Tasks</div>
// //   </div>
// //   <div className="text-center">
// //     <div className="text-xl font-bold">{tasks.filter(t => t.completed).length}</div>
// //     <div className="text-sm">Completed</div>
// //   </div>
// //   <div className="text-center">
// //     <div className="text-xl font-bold">{tasks.filter(t => !t.completed).length}</div>
// //     <div className="text-sm">Pending</div>
// //   </div>
// // </div> */}

    
// //      <div className="flex justify-between items-center w-full max-w-5xl mb-8">
// //   <h1 className="text-4xl font-extrabold text-white align-center drop-shadow-lg">
// //      To-Do List
// //   </h1>
// //   <button
// //     onClick={handleLogout}
// //     className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow-md"
// //   >
// //     Logout
// //   </button>
// // </div>

// //       <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6 relative items-center">
// //         <input
// //           className="border-2 text-black border-white rounded-lg p-3 w-72 focus:outline-none focus:ring-4 focus:ring-yellow-300 shadow-md"
// //           value={task}
// //           onChange={(e) => setTask(e.target.value)}
// //           placeholder="What's on your mind?"
// //         />
// //         <input
// //           type="datetime-local"
// //           className="border-2 border-white text-black rounded-lg p-3 w-72 focus:outline-none focus:ring-4 focus:ring-yellow-300 shadow-md"
// //           value={alarmTime}
// //           onChange={(e) => setAlarmTime(e.target.value)}
// //         />
// //         <div className="relative" ref={bellRef}>
// //           <button
// //             onClick={() => setShowTopAlarmOptions(!showTopAlarmOptions)}
// //             className="text-white bg-blue-500 p-3 rounded-lg hover:bg-blue-600 shadow-md"
// //           >
// //             <FaBell />
// //           </button>
// //           {showTopAlarmOptions && (
// //             <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white text-sm rounded-lg shadow-lg p-2 w-40 z-20 flex flex-col space-y-1 text-center">
// //               {builtInSounds.map((sound) => (
// //                 <button
// //                   key={sound.path}
// //                   onClick={() => setAlarmSound(sound.path)}
// //                   className="text-blue-600 hover:text-blue-800 py-1 px-2 rounded hover:bg-blue-100"
// //                 >
// //                   {sound.name}
// //                 </button>
// //               ))}
// //               <label className="text-green-600 hover:text-green-800 py-1 px-2 rounded hover:bg-green-100 cursor-pointer">
// //                 Upload Custom
// //                 <input
// //                   type="file"
// //                   accept="audio/*"
// //                   className="hidden"
// //                   onChange={handleSoundChange}
// //                 />
// //               </label>
// //             </div>
// //           )}
// //         </div>
// //         <button
// //           onClick={handleAdd}
// //           className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
// //         >
// //           Add Task
// //         </button>
// //       </div>

// //       <input
// //         className="border-2 text-black border-white rounded-full p-3 w-80 mb-8 bg-white placeholder-gray-400 text-gray-700 shadow-inner focus:outline-none focus:ring-4 focus:ring-blue-300"
// //         value={search}
// //         onChange={(e) => setSearch(e.target.value)}
// //         placeholder="🔍 Search tasks..."
// //       />

// //       <ul className="w-full max-w-xl space-y-4">
// //         {filteredTasks.map((t) => (
// //           <li
// //             key={t.id}
// //             className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center bg-white bg-opacity-90 shadow-xl p-4 rounded-2xl hover:scale-105 transform transition-transform duration-300"
// //           >
// //             <div className={`flex-1 text-lg ${t.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
// //               {t.text}
// //               {t.alarmTime && (
// //                 <div className="text-sm text-blue-600">🕒 {new Date(t.alarmTime).toLocaleString()}</div>
// //               )}
// //             </div>
// //             <div className="flex flex-wrap space-x-3 mt-4 sm:mt-0">
// //               <button
// //                 onClick={() => toggleComplete(t.id)}
// //                 className="bg-green-400 hover:bg-green-500 text-white px-3 py-1 rounded-lg shadow-md"
// //               >
// //                 {t.completed ? 'Undo' : 'Done'}
// //               </button>
// //               <button
// //                 onClick={() => {
// //                   const newText = prompt('Edit task:', t.text);
// //                   if (newText) editTask(t.id, newText);
// //                 }}
// //                 className="bg-yellow-300 hover:bg-yellow-400 text-white px-3 py-1 rounded-lg shadow-md"
// //               >
// //                 Edit
// //               </button>
// //               <button
// //                 onClick={() => deleteTask(t.id)}
// //                 className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-lg shadow-md"
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Todo;
// import React, { useState, useEffect, useRef } from "react";
// import { FaBell, FaBars } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const builtInSounds = [
//   { name: "Classic Beep", path: "/sounds/beep.wav" },
//   { name: "Digital Ring", path: "/sounds/nigeria.wav" },
//   { name: "Soft Chime", path: "/sounds/chime.wav" },
// ];

// const Todo = () => {
//   const navigate = useNavigate();
//   const [task, setTask] = useState("");
//   const [alarmTime, setAlarmTime] = useState("");
//   const [alarmSound, setAlarmSound] = useState(null);
//   const [tasks, setTasks] = useState([]);
//   const [search, setSearch] = useState("");
//   const [showTopAlarmOptions, setShowTopAlarmOptions] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const bellRef = useRef(null);

//   const handleSoundChange = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type.startsWith("audio/")) {
//       setAlarmSound(URL.createObjectURL(file));
//     }
//   };

//   const handleAdd = () => {
//     if (!task || !alarmTime) return;
//     setTasks([
//       ...tasks,
//       {
//         id: Date.now(),
//         text: task,
//         completed: false,
//         alarmTime,
//         alarmSound,
//       },
//     ]);
//     setTask("");
//     setAlarmTime("");
//     setAlarmSound(null);
//     setShowTopAlarmOptions(false);
//   };

//   useEffect(() => {
//     if (Notification.permission !== "granted") {
//       Notification.requestPermission();
//     }
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date();
//       tasks.forEach((t) => {
//         if (t.alarmTime && t.alarmSound) {
//           const alarm = new Date(t.alarmTime);
//           if (
//             now.getHours() === alarm.getHours() &&
//             now.getMinutes() === alarm.getMinutes() &&
//             Math.abs(now.getTime() - alarm.getTime()) < 60000
//           ) {
//             new Audio(t.alarmSound).play();
//             if (Notification.permission === "granted") {
//               new Notification("⏰ Reminder", {
//                 body: t.text,
//                 icon: "/favicon.ico",
//               });
//             } else {
//               alert(`⏰ Reminder: ${t.text}`);
//             }
//           }
//         }
//       });
//     }, 60000);
//     return () => clearInterval(interval);
//   }, [tasks]);

//   const toggleComplete = (id) => {
//     setTasks(
//       tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
//     );
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((t) => t.id !== id));
//   };

//   const editTask = (id, newText) => {
//     setTasks(tasks.map((t) => (t.id === id ? { ...t, text: newText } : t)));
//   };

//   const filteredTasks = tasks.filter((t) =>
//     t.text.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="flex min-h-screen font-sans bg-black text-white">
//       {/* SIDEBAR */}
//       <div className="bg-black w-64 hidden md:flex flex-col border-r border-gray-700">
//         <h1 className="text-2xl font-bold p-4 flex items-center gap-2">
//           🚀 MyApp
//         </h1>
//         <nav className="flex flex-col gap-2 p-4">
//           <button onClick={() => navigate("/")} className="hover:bg-gray-800 p-2 rounded">
//             Home
//           </button>
//           <button onClick={handleLogout} className="hover:bg-gray-800 p-2 rounded">
//             Logout
//           </button>
//         </nav>
//       </div>

//       {/* MOBILE SIDEBAR TOGGLER */}
//       <div className="md:hidden bg-black p-4 flex justify-between items-center">
//         <h1 className="text-xl font-bold flex items-center gap-2">🚀 MyApp</h1>
//         <button onClick={() => setSidebarOpen(!sidebarOpen)}>
//           <FaBars />
//         </button>
//       </div>
//       {sidebarOpen && (
//         <div className="absolute top-0 left-0 bg-black w-60 h-screen p-4 flex flex-col z-50">
//           <button onClick={() => setSidebarOpen(false)} className="mb-4">Close</button>
//           <button onClick={() => navigate("/")} className="hover:bg-gray-800 p-2 rounded">
//             Home
//           </button>
//           <button onClick={handleLogout} className="hover:bg-gray-800 p-2 rounded">
//             Logout
//           </button>
//         </div>
//       )}

//       {/* MAIN CONTENT */}
//       <div className="flex-1 p-6 bg-gray-100 text-black">
//         {/* DASHBOARD COUNTS */}
//         <div className="bg-white rounded shadow p-4 flex justify-around mb-6">
//           <div className="text-center">
//             <div className="text-xl font-bold">{tasks.length}</div>
//             <div className="text-sm">Total Tasks</div>
//           </div>
//           <div className="text-center">
//             <div className="text-xl font-bold">{tasks.filter(t => t.completed).length}</div>
//             <div className="text-sm">Completed</div>
//           </div>
//           <div className="text-center">
//             <div className="text-xl font-bold">{tasks.filter(t => !t.completed).length}</div>
//             <div className="text-sm">Pending</div>
//           </div>
//         </div>

//         <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6 items-center">
//           <input
//             className="border-2 border-gray-300 rounded p-3 w-72 focus:outline-none"
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//             placeholder="What's on your mind?"
//           />
//           <input
//             type="datetime-local"
//             className="border-2 border-gray-300 rounded p-3 w-72 focus:outline-none"
//             value={alarmTime}
//             onChange={(e) => setAlarmTime(e.target.value)}
//           />
//           <div className="relative" ref={bellRef}>
//             <button
//               onClick={() => setShowTopAlarmOptions(!showTopAlarmOptions)}
//               className="bg-blue-500 p-3 rounded hover:bg-blue-600 text-white"
//             >
//               <FaBell />
//             </button>
//             {showTopAlarmOptions && (
//               <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white text-black rounded shadow p-2 w-40 z-20 flex flex-col">
//                 {builtInSounds.map((sound) => (
//                   <button
//                     key={sound.path}
//                     onClick={() => setAlarmSound(sound.path)}
//                     className="hover:bg-gray-200 p-1 rounded"
//                   >
//                     {sound.name}
//                   </button>
//                 ))}
//                 <label className="hover:bg-gray-200 p-1 rounded cursor-pointer">
//                   Upload Custom
//                   <input
//                     type="file"
//                     accept="audio/*"
//                     className="hidden"
//                     onChange={handleSoundChange}
//                   />
//                 </label>
//               </div>
//             )}
//           </div>
//           <button
//             onClick={handleAdd}
//             className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded"
//           >
//             Add Task
//           </button>
//         </div>

//         <input
//           className="border rounded p-3 w-80 mb-8"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="🔍 Search tasks..."
//         />

//         <ul className="space-y-4">
//           {filteredTasks.map((t) => (
//             <li
//               key={t.id}
//               className="bg-white shadow p-4 rounded flex flex-col sm:flex-row sm:justify-between"
//             >
//               <div className={t.completed ? "line-through text-gray-400" : ""}>
//                 {t.text}
//                 {t.alarmTime && (
//                   <div className="text-sm text-blue-600">
//                     🕒 {new Date(t.alarmTime).toLocaleString()}
//                   </div>
//                 )}
//               </div>
//               <div className="flex gap-2 mt-2 sm:mt-0">
//                 <button
//                   onClick={() => toggleComplete(t.id)}
//                   className="bg-green-400 hover:bg-green-500 text-white px-2 py-1 rounded"
//                 >
//                   {t.completed ? "Undo" : "Done"}
//                 </button>
//                 <button
//                   onClick={() => {
//                     const newText = prompt("Edit task:", t.text);
//                     if (newText) editTask(t.id, newText);
//                   }}
//                   className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => deleteTask(t.id)}
//                   className="bg-red-400 hover:bg-red-500 text-white px-2 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Todo;
// 📁 src/components/Todo.js

import React, { useState, useEffect, useRef } from 'react';
import { FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const builtInSounds = [
  { name: 'Classic Beep', path: '/sounds/beep.wav' },
  { name: 'Digital Ring', path: '/sounds/nigeria.wav' },
  { name: 'Soft Chime', path: '/sounds/chime.wav' }
];

const Todo = ({ tasks, setTasks, onLogout }) => {
  const navigate = useNavigate();
  const [task, setTask] = useState('');
  const [alarmTime, setAlarmTime] = useState('');
  const [alarmSound, setAlarmSound] = useState(null);
  const [search, setSearch] = useState('');
  const [showTopAlarmOptions, setShowTopAlarmOptions] = useState(false);
  const bellRef = useRef(null);

  const handleSoundChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('audio/')) {
      setAlarmSound(URL.createObjectURL(file));
    }
  };

  const handleAdd = () => {
    if (!task || !alarmTime) return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false,
        alarmTime,
        alarmSound
      }
    ]);
    setTask('');
    setAlarmTime('');
    setAlarmSound(null);
    setShowTopAlarmOptions(false);
  };

  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      tasks.forEach((t) => {
        if (t.alarmTime && t.alarmSound) {
          const alarm = new Date(t.alarmTime);
          if (
            now.getHours() === alarm.getHours() &&
            now.getMinutes() === alarm.getMinutes() &&
            Math.abs(now.getTime() - alarm.getTime()) < 60000
          ) {
            new Audio(t.alarmSound).play();
            if (Notification.permission === 'granted') {
              new Notification('⏰ Reminder', {
                body: t.text,
                icon: '/favicon.ico'
              });
            } else {
              alert(`⏰ Reminder: ${t.text}`);
            }
          }
        }
      });
    }, 60000);
    return () => clearInterval(interval);
  }, [tasks]);

  const toggleComplete = (id) => {
    setTasks(tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  };

  const filteredTasks = tasks.filter((t) =>
    t.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black p-6 flex flex-col items-center font-sans">
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-5xl mb-8">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">To-Do List</h1>
        <div className="flex space-x-2">
          {/* <button
            onClick={onLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow-md"
          >
            Logout
          </button> */}
          {/* <button
            onClick={() => navigate("/activity")}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded shadow-md"
          >
            View Activity
          </button> */}
        </div>
      </div>

      {/* Add Task Controls */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6 relative items-center">
        <input
          className="border-2 text-black border-white rounded-lg p-3 w-72 focus:outline-none focus:ring-4 focus:ring-yellow-300 shadow-md"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What's on your mind?"
        />
        <input
          type="datetime-local"
          className="border-2 border-white text-black rounded-lg p-3 w-72 focus:outline-none focus:ring-4 focus:ring-yellow-300 shadow-md"
          value={alarmTime}
          onChange={(e) => setAlarmTime(e.target.value)}
        />
        <div className="relative" ref={bellRef}>
          <button
            onClick={() => setShowTopAlarmOptions(!showTopAlarmOptions)}
            className="text-white bg-blue-500 p-3 rounded-lg hover:bg-blue-600 shadow-md"
          >
            <FaBell />
          </button>
          {showTopAlarmOptions && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white text-sm rounded-lg shadow-lg p-2 w-40 z-20 flex flex-col space-y-1 text-center">
              {builtInSounds.map((sound) => (
                <button
                  key={sound.path}
                  onClick={() => setAlarmSound(sound.path)}
                  className="text-blue-600 hover:text-blue-800 py-1 px-2 rounded hover:bg-blue-100"
                >
                  {sound.name}
                </button>
              ))}
              <label className="text-green-600 hover:text-green-800 py-1 px-2 rounded hover:bg-green-100 cursor-pointer">
                Upload Custom
                <input
                  type="file"
                  accept="audio/*"
                  className="hidden"
                  onChange={handleSoundChange}
                />
              </label>
            </div>
          )}
        </div>
        <button
          onClick={handleAdd}
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
        >
          Add Task
        </button>
      </div>

      {/* Search */}
      <input
        className="border-2 text-black border-white rounded-full p-3 w-80 mb-8 bg-white placeholder-gray-400 text-gray-700 shadow-inner focus:outline-none focus:ring-4 focus:ring-blue-300"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Search tasks..."
      />

      {/* Tasks List */}
      <ul className="w-full max-w-xl space-y-4">
        {filteredTasks.map((t) => (
          <li
            key={t.id}
            className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center bg-white bg-opacity-90 shadow-xl p-4 rounded-2xl hover:scale-105 transform transition-transform duration-300"
          >
            <div className={`flex-1 text-lg ${t.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
              {t.text}
              {t.alarmTime && (
                <div className="text-sm text-blue-600">🕒 {new Date(t.alarmTime).toLocaleString()}</div>
              )}
            </div>
            <div className="flex flex-wrap space-x-3 mt-4 sm:mt-0">
              <button
                onClick={() => toggleComplete(t.id)}
                className="bg-green-400 hover:bg-green-500 text-white px-3 py-1 rounded-lg shadow-md"
              >
                {t.completed ? 'Undo' : 'Done'}
              </button>
              <button
                onClick={() => {
                  const newText = prompt('Edit task:', t.text);
                  if (newText) editTask(t.id, newText);
                }}
                className="bg-yellow-300 hover:bg-yellow-400 text-white px-3 py-1 rounded-lg shadow-md"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(t.id)}
                className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-lg shadow-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

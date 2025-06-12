import React, { useState } from 'react';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, text: newText } : t))
    );
  };

  const filteredTasks = tasks.filter((t) =>
    t.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 flex flex-col items-center font-sans">
      <h1 className="text-4xl font-extrabold text-white mb-8 drop-shadow-lg">🌟 My Beautiful To-Do List</h1>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
        <input
          className="border-2 border-white rounded-lg p-3 w-72 focus:outline-none focus:ring-4 focus:ring-yellow-300 shadow-md"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What's on your mind?"
        />
        <button onClick={addTask} className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-transform">Add Task</button>
      </div>

      <input
        className="border-2 border-white rounded-full p-3 w-80 mb-8 bg-white placeholder-gray-400 text-gray-700 shadow-inner focus:outline-none focus:ring-4 focus:ring-blue-300"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Search tasks..."
      />

      <ul className="w-full max-w-xl space-y-4">
        {filteredTasks.map((t) => (
          <li key={t.id} className="flex justify-between items-center bg-white bg-opacity-90 shadow-xl p-4 rounded-2xl hover:scale-105 transform transition-transform duration-300">
            <div className={`flex-1 text-lg ${t.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>{t.text}</div>
            <div className="flex space-x-3">
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

export default App;

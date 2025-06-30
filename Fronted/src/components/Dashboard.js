// 📁 src/components/Dashboard.js
const Dashboard = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-8">
      <h2 className="text-3xl text-white font-bold mb-6">📊 Dashboard</h2>
      <div className="bg-white rounded shadow p-6 w-full max-w-md space-y-4 text-center">
        <div>Total Tasks: <strong>{total}</strong></div>
        <div>Completed Tasks: <strong>{completed}</strong></div>
        <div>Pending Tasks: <strong>{pending}</strong></div>
      </div>
    </div>
  );
};

export default Dashboard;

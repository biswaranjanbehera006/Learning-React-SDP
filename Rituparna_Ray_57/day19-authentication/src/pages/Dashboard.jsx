import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>You are logged in 🎉</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;

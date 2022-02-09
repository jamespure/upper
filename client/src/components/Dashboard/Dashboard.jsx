import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
const Dashboard = ({ id }) => {
  return (
    <div className="d-flex dashboard">
      <Sidebar id={id} />
    </div>
  );
};

export default Dashboard;

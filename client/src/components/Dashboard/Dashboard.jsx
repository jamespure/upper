import { useConversations } from "../../contexts/ConversationsProvider";
import OpenConversation from "../OpenConversation/OpenConversation";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
const Dashboard = ({ id }) => {
  const { selectedConversation } = useConversations();

  return (
    <div className="d-flex dashboard">
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
};

export default Dashboard;

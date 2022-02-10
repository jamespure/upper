import Login from "./Login/Login";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard/Dashboard";
import { SocketProvider } from "../contexts/SocketProvider";
import { ContactsProvider } from "../contexts/ContactsProvider";
import { ConversationsProvider } from "../contexts/ConversationsProvider";

function App() {
  const [userName, setUserName] = useLocalStorage("username");
  
  const dashboard = (
    <SocketProvider id={userName}>
      <ContactsProvider>
        <ConversationsProvider>
          <Dashboard id={userName} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );
  
  return userName ? (
    dashboard
  ) : (
    <Login onSubmitId={setUserName} />
  );
}

export default App;

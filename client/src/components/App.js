import Login from "./Login/Login";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  const [userName, setUserName] = useLocalStorage("username");
  console.log(userName);
  return userName ? (
    <Dashboard id={userName} />
  ) : (
    <Login onSubmitId={setUserName} />
  );
}

export default App;

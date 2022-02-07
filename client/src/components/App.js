import { useState } from "react";
import Login from "./Login/Login";

function App() {
  const [userName, setUserName] = useState();
  console.log(userName);
  return (
    <div className="App">
    {userName}
      <Login onSubmitId={setUserName}/>
    </div>
  );
}

export default App;

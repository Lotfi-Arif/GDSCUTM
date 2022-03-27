import Landing from "./pages/Landing";
import Events from "./pages/Events";
import Nav from "./components/Nav"
import Background from "./components/Background"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
      
    <div>
      <Background/>
        <Nav/>
        <Landing />
        </div>
      
  );
}

export default App;

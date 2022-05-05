import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Model from "./Components/Model";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/model" element={<Model />} />
      </Routes>
    </Router>
  );
}

export default App;

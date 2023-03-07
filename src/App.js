import "./App.css";
import SignUp from "./Screens/SignUp/SignUp";
import Home from "./Screens/Home/Home";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

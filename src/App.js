import logo from "./logo.svg";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <h1>SHRED IT</h1>
      <Navbar />

      <div>
        {/* <Routes>
          <Route path="*" element={<Home />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;

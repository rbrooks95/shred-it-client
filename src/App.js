import logo from "./logo.svg";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ReviewFeed from "./components/pages/ReviewFeed";
import ReviewForm from "./components/pages/ReviewForm";
function App() {
  return (
    <div className="App">
      <h1>SHRED IT </h1>
      <Navbar />

      <div>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/reviewfeed" element={<ReviewFeed />} />
          <Route path="/reviewform" element={<ReviewForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

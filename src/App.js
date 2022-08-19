import logo from "./logo.svg";
import axios from "axios";
import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ReviewFeed from "./components/pages/ReviewFeed";
import ReviewForm from "./components/pages/ReviewForm";
function App() {
  const initialState = {
    name: "",
    location: "",
    review: "",
  };
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post(
      "http://localhost:3001/api/reviews/:user_id",
      formState
    );
    console.log(res);
    window.location.reload(false);
  };
  return (
    <div className="App">
      <h1>SHRED IT </h1>
      <Navbar />

      <div>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/reviewfeed" element={<ReviewFeed />} />
          <Route
            path="/reviewform"
            element={
              <ReviewForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                name={"name"}
                location={"location"}
                review={"review"}
                formState={formState}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

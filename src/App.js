import "./App.css";
import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [visits1, setVisits1] = useState(0);

  function visits1AddOne() {
    setVisits1((previousVisits) => previousVisits + 1);
  }

  const [visits2, setVisits2] = useState(0);

  function visits2AddOne() {
    setVisits2((previousVisits) => previousVisits + 1);
  }

  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={visits1AddOne}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={visits2AddOne}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/about"
            element={<About visits1={visits1}></About>}
          ></Route>
          <Route
            path="/contact"
            element={<Contact visits2={visits2}></Contact>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

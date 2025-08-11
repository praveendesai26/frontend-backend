import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./Navbar/Navbar";
import SignIn from "./SignUp/SignIn";
import SignUp from "./SignUp/SignUp";
import Notes from "./Notes/Notes";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignIn />} />{" "}
          <Route path="/notes" element={<Notes />} />
          {/* <Route path="/account" element={<Account />} /> */}
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

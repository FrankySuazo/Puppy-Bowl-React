import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import SingleView from "./components/SingleView";
import SelectedPuppy from "./components/SelectedPuppy";

function App() {
  const [selectedPuppyId, setSelectedPuppyId] = useState(null);

  return (
    <>
      <div>
        <nav id="navbar">
          <Link to="/">All View</Link>
          {/* <Link to="/:id">Single View</Link> */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<SelectedPuppy />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

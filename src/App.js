import { Home } from "./Components/Home/Home";
import { About } from "./Components/About";
import { Nomatch } from "./Components/Nomatch";
import { Routes, Route } from "react-router-dom";
import { Property } from "./Components/Property";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/Property" element={<Property />} />{" "}
        <Route path="about" element={<About />} />{" "}
        <Route path="*" element={<Nomatch />} />{" "}
      </Routes>{" "}
    </>
  );
}

export default App;
